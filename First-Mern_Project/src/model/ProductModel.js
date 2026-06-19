const mongoose=require('mongoose');

const productschema=mongoose.Schema({
 title:{type:String,required:true},
    price:{type:Number,required:true},
    discount:{type:String,required:true},
    discountPrice:{type:Number,required:true},
},{timestamp:true,versionKey:false})

const ProductModel=mongoose.model('Product',productschema);
module.exports=ProductModel;
