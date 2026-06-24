const CartModel=require("../models/CartModel")
const mongoose=require("mongoose")

const ObjectID=mongoose.Types.ObjectId


const CartListService=async (req)=>{
    try{
        let user_id=new ObjectID(req.headers.user_id)
        let matchStage={$match:{userID:user_id}}

        let JoinProductStage={$lookup:{from:"products",localField:'productID',foreignField:'_id',as:"products"}}
        let JoinWinthBrands={$lookup:{from:"brands",localField:'products.brandID',foreignField:'_id',as:"brands"}}
        let JoinWithcategory={$lookup:{from:"categories",localField:'products.categoryID',foreignField:'_id',as:"categories"}}
        let unwindproductStage={$unwind:"$products"}
        let unwindbrandsStage={$unwind:"$brands"}
        let unwindcategoriesStage={$unwind:"$categories"}

        let projectionStage={
            $project:{
                '_id':0,'createdAt':0,'updatedAt':0,'products._id':0,
                'products.categoryID':0, 'products.brandID':0,
                'brands._id':0,'categories._id':0,
            }
        }


        let data= await CartModel.aggregate([
            matchStage,
            JoinProductStage,JoinWinthBrands,JoinWithcategory,
            unwindproductStage,unwindbrandsStage,unwindcategoriesStage,
            projectionStage
        ])
        return {status:"success",massage:data}
    }catch(err){
        return {status:"failed",massage:err}
    }
}

const SaveCartListService= async (req)=>{
    try{

        let user_id=new ObjectID(req.headers.user_id)
        let reqbody=req.body;
        reqbody.userID=user_id;
        await CartModel.create(reqbody)
        return {status:"success",massage:"Cart List Created"}
    }catch(err){
        return {status:"failed",massage:err}
    }
}

const UpdateCartListService= async (req)=>{
    try{

        let user_id=new ObjectID(req.headers.user_id)
        let CartID=req.params.cartId
        let reqbody=req.body;

        await CartModel.updateOne({_id:CartID,userID:user_id},{$set:reqbody})
        return {status:"success",massage:"Cart List Updateed"}
    }catch(err){
        return {status:"failed",massage:err}
    }
}

const RemoveCartListService=async (req)=>{
    try{
        let user_id=new ObjectID (req.headers.user_id);
        let reqbody=req.body;
        reqbody.userID=user_id;
        await CartModel.deleteOne(reqbody);
        return {status:"success",massage:"Cart List Remove Success"}
    }catch(err){
        return {status:"failed",massage:err}
    }
}

module.exports={
    CartListService,
    SaveCartListService,
    UpdateCartListService,
    RemoveCartListService
};
