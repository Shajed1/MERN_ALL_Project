const ProductModel = require("../model/ProductModel");


exports.createData=async (req,res)=>{
try{
    const requestBody=req.body;
    await  ProductModel.create(requestBody);
    return res.status(201).json({massage:"send",status:"success"});
}catch(err) {
    console.log(err);
    return res.status(500).json({
        status: "fail",
        message: err.message
    });
}
}
exports.updatedata=async (req,res)=>{
    try{
        let {id} = req.params;
        let requestBody=req.body;
      let row=await  ProductModel.updateOne({_id:id},requestBody);
        return res.status(201).json({massage:"send",status:"success"});
    }catch(err) {
        console.log(err);
        return res.status(500).json({
            status: "fail",
            message: err.message
        });
    }
}

exports.readDatabyId= async (req,res)=>{
        try{
            let {id} = req.params;
            let rows=await ProductModel.find({_id:id});
            return res.status(201).json({massage:"send",status:"success",rows:rows});
        }catch(err) {
            console.log(err);
            return res.status(500).json({
                status: "fail",
                message: err.message
            });
        }
}
exports.readdata= async (req,res)=>{
    try{
        let rows=await ProductModel.find({});
        return res.status(201).json({massage:"send",status:"success",rows:rows});
    }catch(err) {
        console.log(err);
        return res.status(500).json({
            status: "fail",
            message: err.message
        });
    }
}

exports.Deletedelete=async (req,res)=>{
    try{
        let {id} = req.params;
        await  ProductModel.deleteOne({_id:id});
        return res.status(201).json({massage:"send",status:"success"});
    }catch(err) {
        console.log(err);
        return res.status(500).json({
            status: "fail",
            message: err.message
        });
    }
}

