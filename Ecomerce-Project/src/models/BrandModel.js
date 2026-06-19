const mongoose=require('mongoose');
const BrandSceme=mongoose.Schema({
    brandName:{type:String,unique:true,required: true},
    brandImage:{type:String,required: true},
},{
    timestamps:true,
    versionKey:false
})

const BrandModel=mongoose.model("brands",BrandSceme);
module.exports=BrandModel;