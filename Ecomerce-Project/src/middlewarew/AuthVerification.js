const {DecodeToken} = require("../utility/TokenHelper");
module.exports=(req,res,next)=>{
    let token=req.headers['token'];
    if(!token){
        token=req.cookies['token'];
    }
    let decoded=DecodeToken(token);
    if(decoded===null){
        return res.status(403).json({
            status:"Fail",
            msg:"No token provided"
        })
    }else{
        let email=decoded['email'];
        let user_id=decoded['user_id'];
        req.headers.email=email;
        req.headers.user_id=user_id;
        next()
        console.log("Successfully logged in")
    }
}