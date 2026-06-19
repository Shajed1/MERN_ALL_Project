const mongoose=require('mongoose');
const CategorieSceme=mongoose.Schema({
    CategorieName:{type:String,unique:true,required: true},
    CategorieImage:{type:String,required: true},
},{
    timestamps:true,
    versionKey:false
})

const CategorieModel=mongoose.model("categories",CategorieSceme);
module.exports=CategorieModel;