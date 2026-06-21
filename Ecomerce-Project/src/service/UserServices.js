const SendEmailUtility=require("../utility/EmailHelper");
const UserModel=require('../models/UserModel')
const {EnocodeToken} = require("../utility/TokenHelper");
const ProfileModel=require("../models/ProfileModel")


const UserOTPService=async (req)=>{
    try{
        let email=req.params.email
        let code=Math.floor(100000+Math.random()*900000);
        let EmailText=`Your Verification Code:${ code } `;
        let EmailSubject="Email Verification"
        await SendEmailUtility(email,EmailText,EmailSubject)
        await UserModel.updateOne({email:email},{$set:{otp:code}},{upsert:true})
        return {status:"success",message:"The 6 Digit Code has been updated"};
    }catch(err){
        return {status:"Fail",message:"OTP fail"};
    }
}

const VerifyOTPService=async (req)=>{
    try{
        let email=req.params.email
        let otp=req.params.otp
        let total=await UserModel.countDocuments({email:email,otp:otp})
        if(total===1){

            let user_id=await UserModel.find({email:email,otp:otp}).select("_id");
            console.log("user_id=",user_id);

            let token=EnocodeToken(email,user_id[0]["_id"].toString());


            await UserModel.updateOne(
                {email:email},
                {$set:{otp:"0"}}
            );



            return {
                status:"success",
                message:"Valid Otp successfully",
                token:token
            };
        }else{
            return {status:"Fail",message:"Invalid OTP email"};
        }
    }catch(err){
        return {status:"Fail",message:"OTP fail"};
    }

}

const saveProfileService=async (req)=>{
         try{
             let user_id=req.headers.user_id;
             let reqBody=req.body;
             reqBody.userID=user_id;
             await ProfileModel.updateOne({userID:user_id},{$set:reqBody},{upsert:true})
             return {status:"success", message:"Profile Save successfully"};
         }catch (e){
             return {status:"Fail",message:e};
         }
}

const ReadProfileService=async (req)=>{

    try{
        let user_id=req.headers.user_id;
     let data=   await ProfileModel.find({userID:user_id})
        return {status:"success", data:data};
    }catch (e){
        return {status:"Fail",message:e};
    }
}


module.exports={
    UserOTPService,
    VerifyOTPService,
    saveProfileService,
    ReadProfileService,
}