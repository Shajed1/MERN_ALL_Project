const mongoose=require('mongoose');
const UserSceme=mongoose.Schema({
    email:{type:String,required:true,unique:true,lowercase:true},
    otp:{type:String,required:true},

},{
    timestamps:true,
    versionKey:false
})

const UserModel=mongoose.model("Users",UserSceme);
module.exports=UserModel;