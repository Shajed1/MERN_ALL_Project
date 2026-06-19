const mongoose=require('mongoose');
const ProductSliderSceme=mongoose.Schema({

    title:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:String,required:true},
    img:{type:String,required:true},

    ProductId:{type:mongoose.Schema.Types.ObjectId,required: true},


},{
    timestamps:true,
    versionKey:false
})

const ProductSliderModel=mongoose.model("productsliders",ProductSliderSceme);
module.exports=ProductSliderModel;