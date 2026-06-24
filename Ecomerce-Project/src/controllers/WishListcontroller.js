const {
    WishListService,
    SaveWishListService,
    RemoveWishService
}  =require("../service/WishListServices")



exports.WishList= async (req,res)=>{

    let result=await WishListService(req);
    return res.status(200).json(result);
}

exports.CreateWishList= async (req,res)=>{
    let result=await SaveWishListService(req);
    return res.status(200).json(result);
}
exports.RemoveWish= async (req,res)=>{
    let result=await RemoveWishService(req);
    return res.status(200).json(result);
}
