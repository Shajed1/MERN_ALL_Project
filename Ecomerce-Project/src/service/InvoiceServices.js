const mongoose=require("mongoose");
const CartModel=require("../models/CartModel")
const InvoiceProductmodel=require("../models/InvoiceProductModel")
const Invoicemodel=require("../models/InvoiceModel")
const ProfileModel=require("../models/ProfileModel")
const Paymentsettingmodel=require("../models/PaymentSettingsModel")
const ObjectID=mongoose.Types.ObjectId
const FormData=require('form-data')
const axios=require("axios");


const CreateInvoiceServices=async (req)=>{
    try{
        let user_id=new ObjectID(req.headers.user_id)
        let cus_email=req.headers.email
        // Step 1 : Calculate Total Payment and VAT

          let MatchingStage={$match:{userID:user_id}}
          let JoinProductStage={$lookup:{from:"products",localField:'productID',foreignField:'_id',as:"products"}}

          let ProductUnwind={$unwind:"$products"}


        let cartProduct=await CartModel.aggregate([
            MatchingStage,
            JoinProductStage,
            ProductUnwind
        ])

        let TotalAmount=0;
        cartProduct.forEach((element)=>{
         let price;
         if(element["products"]["discount"]){
             price=parseFloat(element["products"]["discountPrice"])
         }else{
             price=parseFloat(element["products"]["price"])
         }
            TotalAmount += parseFloat(element["qty"])*price
        })

        let vat=TotalAmount* 0.05
        let payable=TotalAmount+vat



        // Step 2 : Prepare Customer Details and Shipping Details

        let Profile=await ProfileModel.aggregate([
            MatchingStage
        ])

        let cus_details=`Name:${Profile[0]['cus_name']},Email:${cus_email},Address:${Profile[0]['cus_add']},Phone:${Profile[0]['cus_phone']}`
        let ship_details=`Name:${Profile[0]['ship_name']},City:${Profile[0]['ship_city']},Address:${Profile[0]['ship_add']},Phone:${Profile[0]['ship_phone']}`



        // Step 3 : Transaction and Others ID
       let Tran_id=Math.floor(10000000+Math.random()*90000000);
        let val_id=0;
        let delivery_status="pending"
        let payment_status="pending"


        // Step 4 : Create Invoice
        let CreateInvoice=await Invoicemodel.create({
            userID:user_id,
            payable:payable,
            cus_details:cus_details,
            ship_details:ship_details,
            tran_id:Tran_id,
            val_id:val_id,
            delivery_status:delivery_status,
            payment_status:payment_status,
            total:TotalAmount,
            vat:vat,
        })


        // Step 5 : Create Invoice Product

// Step 5 : Create Invoice Product (Fixed with for...of)
        let invoice_id = CreateInvoice["_id"];

        for (let element of cartProduct) {
            await InvoiceProductmodel.create({
                userID: user_id,
                ProductID: element['productID'],
                InvoiceID: invoice_id,
                qty: element['qty'],
                price: element['products']['discount'] ? element['products']['discountPrice'] : element['products']['price'],
                color: element['color'],
                size: element['size'],
            });
        }


        // Step 6 : Remove Carts

        await CartModel.deleteMany({userID:user_id})


        // Step 7 : Prepare SSl Payment

        let PaymentSettings=await Paymentsettingmodel.find()

        const formData=new FormData()
        formData.append('store_id',PaymentSettings[0]["store_id"])
        formData.append('store_passwd',PaymentSettings[0]["store_passwd"])
        formData.append('total_amount',payable.toString())
        formData.append('currency',PaymentSettings[0]["currency"])
        formData.append('tran_id',Tran_id)

        formData.append('success_url',`${PaymentSettings[0]['success_url']}/${Tran_id}`)
        formData.append('fail_url',`${PaymentSettings[0]['fail_url']}/${Tran_id}`)
        formData.append('cancel_url',`${PaymentSettings[0]['cancel_url']}/${Tran_id}`)
        formData.append('ipn_url',`${PaymentSettings[0]['ipn_url']}/${Tran_id}`)

        formData.append('cus_name',Profile[0]["cus_name"])
        formData.append('cus_email',cus_email)
        formData.append('cus_add1',Profile[0]["cus_add"])
        formData.append('cus_add2',Profile[0]["cus_add"])
        formData.append('cus_city',Profile[0]["cus_city"])
        formData.append('cus_state',Profile[0]["cus_state"])
        formData.append('cus_postcode',Profile[0]["cus_postcode"])
        formData.append('cus_country',Profile[0]["cus_country"])
        formData.append('cus_phone',Profile[0]["cus_phone"])
        formData.append('cus_fax',Profile[0]["cus_phone"])

        formData.append('shipping_method',"YES")
        formData.append('ship_name',Profile[0]["ship_name"])
        formData.append('ship_add1',Profile[0]["ship_add"])
        formData.append('ship_add2',Profile[0]["ship_add"])
        formData.append('ship_city',Profile[0]["ship_city"])
        formData.append('ship_state',Profile[0]["ship_state"])
        formData.append('ship_country',Profile[0]["ship_country"])
        formData.append('ship_postcode',Profile[0]["ship_postcode"])


        let productNames = cartProduct.map(item => item['products']['name']).join(', ');

        formData.append('product_name', productNames || "Invoice Products");
        formData.append('product_category', "E-commerce");
        formData.append('product_profile', "general");
        formData.append('product_amount', payable.toString());


        let SSLRes = await axios.post(
            PaymentSettings[0]['init_url'],
            formData,
            {
                headers: formData.getHeaders()
            }
        );

        return {
            status: "Success",
            data: SSLRes.data
        }
    }catch(err){
        return {status:"Fail",message:err.message}
    }
}

const PaymentSuccessService=async (req)=>{
    try{
        let trxID=req.params.trxID;
        await Invoicemodel.updateOne({tran_id:trxID},{payment_status:"success"})
        return {status:"Success"};
    }catch(err){
        return {status:"Fail",message:err.message}
    }
}

const PaymentFailService=async (req)=>{
    try{
        let trxID=req.params.trxID;
        await Invoicemodel.updateOne({tran_id:trxID},{payment_status:"Fail"})
        return {status:"Success"};
    }catch(err){
        return {status:"Fail",message:err.message}
    }
}

const PaymentCancelService=async (req)=>{
    try{
        let trxID=req.params.trxID;
        await Invoicemodel.updateOne({tran_id:trxID},{payment_status:"Cancel"})
        return {status:"Success"};
    }catch(err){
        return {status:"Fail",message:err.message}
    }
}

const PaymentIPNService=async (req)=>{
    try{
        let trxID=req.params.trxID;
        let status=req.body['status'];
        await Invoicemodel.updateOne({tran_id:trxID},{payment_status:status})
        return {status:"Success"};

        return {status:"Success",data:""}
    }catch(err){
        return {status:"Fail",message:err.message}
    }
}

const InvoiceListService=async (req)=>{
    try{
        let user_id=new ObjectID(req.headers.user_id)
        let invoice=await Invoicemodel.find({userID:user_id})
        return {status:"Success",data:invoice}
    }catch(err){
        return {status:"Fail",message:err.message}
    }
}

const InvoiceProductListService=async (req)=>{
    try{
        let user_id=new ObjectID(req.headers.user_id)
        let invoice_id=new ObjectID(req.params.invoice_id)
        console.log(invoice_id)
        console.log(user_id)
        let MatchingStage={$match:{userID:user_id,InvoiceID:invoice_id}}
        let JoinProductStage={$lookup:{from:"products",localField:'productID',foreignField:'_id',as:"products"}}
        let ProductUnwind={$unwind:"$products"}
        let products=await InvoiceProductmodel.aggregate([
            MatchingStage,JoinProductStage,
            ProductUnwind
        ])
        // didnt get the invoiceproduct List
        return {status:"Success",data:products}
    }catch(err){
        return {status:"Fail",message:err.message}
    }
}


module.exports={
    CreateInvoiceServices,
    PaymentFailService,
    PaymentCancelService,
    PaymentIPNService,
    PaymentSuccessService,
    InvoiceListService,
    InvoiceProductListService
}