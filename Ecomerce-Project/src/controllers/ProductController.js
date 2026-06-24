const {
    BrandListService,
    CategoryListService,
    DetailsService,
    SliderListService,
    ListByBrandService,
    ListByCategoryService,
    ListBySimilierService,
    ListByRemarkService,
    ListByKeywordService,
    ReviewListService,
    CreateReviewService
}  = require('../service/ProductServices')

const ProductModel=require("../models/ProductModel")

exports.ProductBrandList=async(req,res)=>{
  let result=await BrandListService();
  return res.status(200).json(result);
}

exports.ProductCategoryList=async(req,res)=>{
    let result=await CategoryListService();
    return res.status(200).json(result);
}

exports.ProductSliderList=async(req,res)=>{

    let result=await SliderListService();
    return res.status(200).json(result);

}

exports.ProductDetails=async(req,res)=>{
    let result=await DetailsService(req);
    return res.status(200).json(result);
}
exports.ProductListByBrand=async(req,res)=>{
    let result=await ListByBrandService(req);
    return res.status(200).json(result);
}

exports.ProductListByCategory=async(req,res)=>{
    let result=await ListByCategoryService(req);
    return res.status(200).json(result);
}
exports.ProductListByRemark=async(req,res)=>{
    let result=await ListByRemarkService(req);
    return res.status(200).json(result);
}


exports.ProductListBySimilier=async(req,res)=>{
    let result=await ListBySimilierService(req);
    return res.status(200).json(result);
}



exports.ProductListByKeyword=async(req,res)=>{
    let result=await ListByKeywordService(req);
    return res.status(200).json(result);
}

exports.ProductReviewList=async(req,res)=>{
    let result=await ReviewListService(req);
    return res.status(200).json(result);
}
exports.CreateReview=async(req,res)=>{
    let result=await CreateReviewService(req);
    return res.status(200).json(result);
}
// // const Invoicemodel=require("../models/InvoiceModel")
// // exports.insert=async(req,res)=>{
// //
// //    try{
// //        let body=req.body
// //        let data= await Invoicemodel.create(body)
// //        return res.status(200).json({message:"Product inserted",data:data});
// //    }catch(err){
// //        return {status:"failed",massage:err}
// //    }
//
// }
