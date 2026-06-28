const Featuresmodel=require("../models/FeaturesModel")
const LegalModel = require("../models/LegalModel");



const FeturesListService =async (req)=>{
    try{
        let data= await Featuresmodel.find();
        return {status:"success",data:data}
    }catch(err){
        return {status:"fail",data:err}
    }
}
const LegaldetailsService =async (req)=>{
    try{
        let types=req.params.type
        let data= await LegalModel.find({type:types});
        return {status:"success",data:data}
    }catch(err){
        return {status:"fail",data:err}
    }
}


module.exports = {
    FeturesListService,
    LegaldetailsService
};