const mongoose=require('mongoose');
const UserSceme=mongoose.Schema({
    userID:{type:mongoose.Schema.Types.ObjectId,required: true},
    productID:{type:mongoose.Schema.Types.ObjectId,required: true},


},{
    timestamps:true,
    versionKey:false
})

const WisheModel=mongoose.model("wishes",UserSceme);
module.exports=WisheModel;