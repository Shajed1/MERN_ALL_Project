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
    ReviewListService
}  = require('../service/ProductServices')



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

}
exports.ProductListByBrand=async(req,res)=>{
    let result=await ListByBrandService(req);
    return res.status(200).json(result);
}

exports.ProductListByCategory=async(req,res)=>{
    let result=await ListByCategoryService(req);
    return res.status(200).json(result);
}

exports.ProductListBySimilier=async(req,res)=>{

}

exports.ProductListByRemark=async(req,res)=>{

}

exports.ProductListByKeyword=async(req,res)=>{

}

exports.ProductReviewList=async(req,res)=>{

}

