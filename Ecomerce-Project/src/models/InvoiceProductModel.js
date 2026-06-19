const mongoose=require('mongoose');
const UserSceme=mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,required: true},
    ProductId:{type:mongoose.Schema.Types.ObjectId,required: true},
    InvoiceId:{type:mongoose.Schema.Types.ObjectId,required: true},

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