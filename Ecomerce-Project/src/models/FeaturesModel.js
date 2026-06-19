const mongoose=require('mongoose');
const UserSceme=mongoose.Schema({

    name:{type:String,required:true},
    description:{type:String,required:true},
    img:{type:String,required:true},
},{
    timestamps:true,
    versionKey:false
})

const Featuresmodel=mongoose.model("features",UserSceme);
module.exports=Featuresmodel;