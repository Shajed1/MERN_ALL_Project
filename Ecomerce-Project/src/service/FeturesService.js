const Featuresmodel=require("../models/FeaturesModel")



const FeturesListService =async ()=>{
    try{
        let data= await Featuresmodel.find();
        return {status:"success",data:data}
    }catch(err){
        return {status:"fail",data:err}
    }
}


module.exports = {
    FeturesListService
};