const mongoose=require('mongoose');
const UserSceme=mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,required: true},
    ProductId:{type:mongoose.Schema.Types.ObjectId,required: true},


},{
    timestamps:true,
    versionKey:false
})

const WisheModel=mongoose.model("Wishes",UserSceme);
module.exports=WisheModel;