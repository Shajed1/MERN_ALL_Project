const mongoose=require('mongoose');
const UserSceme=mongoose.Schema({
    userID:{type:mongoose.Schema.Types.ObjectId,required: true},
    ProductID:{type:mongoose.Schema.Types.ObjectId,required: true},
    InvoiceID:{type:mongoose.Schema.Types.ObjectId,required: true},
    qty:{type:String,required:true},
    price:{type:String,required:true},
    color:{type:String,required:true},
    size:{type:String,required:true},
},{
    timestamps:true,
    versionKey:false
})

const InvoiceProductmodel=mongoose.model("invoiceproducts",UserSceme);
module.exports=InvoiceProductmodel;