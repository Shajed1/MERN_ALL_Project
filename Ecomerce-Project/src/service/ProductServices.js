const BrandModel=require("../models/BrandModel")
const categoryModel=require("../models/CategorieModel")
const ProductModel=require("../models/ProductModel")
const ProductSliderModel=require("../models/ProductSliderModel")
const productdetailModel=require("../models/ProductDetailModel")
const ReviewModel=require("../models/RieviewModel")
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;


const BrandListService =async ()=>{
    try{
       let data= await BrandModel.find();
       return {status:"success",data:data}
    }catch(err){
        return {status:"fail",data:err}
    }
}

const CategoryListService =async ()=>{
    try{
        let data= await categoryModel.find();
        return {status:"success",data:data}
    }catch(err){
        return {status:"fail",data:err}
    }

}

const SliderListService =async ()=>{
    try{
        let data= await ProductSliderModel.find();
        return {status:"success",data:data}
    }catch(err){
        return {status:"fail",data:err}
    }
}

const DetailsService =async ()=>{

}

const ListByBrandService = async (req) => {


    let BrandID = new ObjectId(req.params.BrandID);

    let MatchState = {
        $match: {

            brandID: BrandID
        }
    };

    let JoinWithBrand = {
        $lookup: {
            from: "brands",
            localField: "brandID",
            foreignField: "_id",
            as: "brands"
        }
    };

    let JoinWithCategory = {
        $lookup: {
            from: "categories",
            localField: "categoryID",
            foreignField: "_id",
            as: "categories"
        }
    };

    let data = await ProductModel.aggregate([
        MatchState,
        JoinWithBrand,
        JoinWithCategory
    ]);

    return {
        status: "success",
        data: data
    };
};

const ListByCategoryService =async ()=>{

}

const ListBySimilierService =async ()=>{

}

const ListByRemarkService =async ()=>{

}

const ListByKeywordService =async ()=>{

}

const ReviewListService =async ()=>{

}


module.exports = {
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
}