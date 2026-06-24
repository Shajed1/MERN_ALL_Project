const mongoose=require('mongoose');
const UserSceme=mongoose.Schema({
    userID:{type:mongoose.Schema.Types.ObjectId},
    productID:{type:mongoose.Schema.Types.ObjectId,required: true},
    color:{type:String,required:true},
    qty:{type:String,required:true},
    size:{type:String,required:true},

},{
    timestamps:true,
    versionKey:false
})

const CartModel=mongoose.model("carts",UserSceme);
module.exports=CartModel;