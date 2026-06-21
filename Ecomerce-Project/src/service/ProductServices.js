const BrandModel=require("../models/BrandModel")
const categoryModel=require("../models/CategorieModel")
const ProductModel=require("../models/ProductModel")
const ProductSliderModel=require("../models/ProductSliderModel")
const productdetailModel=require("../models/ProductDetailModel")
const Reviewmodel=require("../models/RieviewModel")
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

const ListByBrandService = async (req) => {

    try{
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

        let unlinkbrandstate={
            $unwind:"$brands"
        }
        let unlinkcategorytate={
            $unwind:"$categories"
        }
        let projection={
            $project:{
                "brands._id":0,
                "categories._id":0,
                "categoryID":0,
                "brandID":0
            }
        }


        let data = await ProductModel.aggregate([
            MatchState,
            JoinWithBrand,
            JoinWithCategory,
            unlinkbrandstate,unlinkcategorytate,
            projection
        ]);

        return {status: "success", data: data};
    }catch(err){
        return {status:"fail",data:err}
    }

};

const ListByCategoryService =async (req)=>{
    try{
        let CategoryId = new ObjectId(req.params.CategoryId);

        let MatchState = {
            $match: {

                categoryID: CategoryId
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

        let unlinkbrandstate={
            $unwind:"$brands"
        }
        let unlinkcategorytate={
            $unwind:"$categories"
        }
        let projection={
            $project:{
                "brands._id":0,
                "categories._id":0,
                "categoryID":0,
                "brandID":0
            }
        }


        let data = await ProductModel.aggregate([
            MatchState,
            JoinWithBrand,
            JoinWithCategory,
            unlinkbrandstate,unlinkcategorytate,
            projection
        ]);

        return {status: "success", data: data};
    }catch(err){
        return {status:"fail",data:err}
    }
}

const ListByRemarkService =async (req)=>{
    try{
        let Remark = req.params.Remark;

        let MatchState = {
            $match: {remark: Remark}};

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

        let unlinkbrandstate={
            $unwind:"$brands"
        }
        let unlinkcategorytate={
            $unwind:"$categories"
        }
        let projection={
            $project:{
                "brands._id":0,
                "categories._id":0,
                "categoryID":0,
                "brandID":0
            }
        }


        let data = await ProductModel.aggregate([
            MatchState,
            JoinWithBrand,
            JoinWithCategory,
            unlinkbrandstate,unlinkcategorytate,
            projection
        ]);

        return {status: "success", data: data};
    }catch(err){
        return {status:"fail",data:err}
    }
}

const ListBySimilierService =async (req)=>{

    try{
        let CategoryId = new ObjectId(req.params.CategoryId);

        let MatchState = {$match: {categoryID: CategoryId}};
        let limitstate={$limit:20};
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

        let unlinkbrandstate={
            $unwind:"$brands"
        }
        let unlinkcategorytate={
            $unwind:"$categories"
        }
        let projection={
            $project:{
                "brands._id":0,
                "categories._id":0,
                "categoryID":0,
                "brandID":0
            }
        }


        let data = await ProductModel.aggregate([
            MatchState,
            JoinWithBrand,
            JoinWithCategory,
            unlinkbrandstate,unlinkcategorytate,
            projection,limitstate
        ]);

        return {status: "success", data: data};
    }catch(err){
        return {status:"fail",data:err}
    }

}

const DetailsService =async (req)=>{

    try{
        let ProductID = new ObjectId(req.params.ProductID);
        let MatchState = {$match: {_id: ProductID}};

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

        let JoinWithDetails = {
            $lookup: {
                from: "productdetails",
                localField: "_id",
                foreignField:"productID",
                as: "details"
            }
        };

        let unlinkbrandstate={
            $unwind:"$brands"
        }
        let unlinkcategorytate={
            $unwind:"$categories"
        }
        let unlinkdetails={
            $unwind:"$details"
        }
        let projection={
            $project:{
                "brands._id":0,
                "categories._id":0,
                "categoryID":0,
                "brandID":0
            }
        }
        let data=await ProductModel.aggregate([
            MatchState,
            JoinWithBrand,JoinWithCategory,JoinWithDetails
            ,unlinkbrandstate,unlinkcategorytate,unlinkdetails,projection
        ])
         return {status: "success", data: data};
    }catch(err){
        return {status:"fail",data:err}
    }
}

const ListByKeywordService =async (req)=>{
    try{
        let SearchRegex={"$regex":req.params.Keyword,"$options":"i"}
        let searchParams=[{title:SearchRegex},{shortDes:SearchRegex}]
        let searchquerry={$or:searchParams}

        let MatchState = {$match:searchquerry};
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

        let unlinkbrandstate={$unwind:"$brands"}
        let unlinkcategorytate={$unwind:"$categories"}
        let projection={
            $project:{
                "brands._id":0,
                "categories._id":0,
                "categoryID":0,
                "brandID":0
            }
        }
        let data=await ProductModel.aggregate([
            MatchState,
            JoinWithBrand,JoinWithCategory
            ,unlinkbrandstate,unlinkcategorytate,projection
        ])
        return {status: "success", data: data};
    }catch(err){
        return {status:"fail",data:err}.toString()
    }

}

const ReviewListService =async (req)=>{
try{
    let ProductID = new ObjectId(req.params.ProductID);

    let MatchState = {$match: {productID: ProductID}};

    let joinwithProfilestate={$lookup:{from:"profiles",localField:"userID",foreignField:"userID",as:"profile"}}

    let projecttionstage= {
        $project: {"des": 1, "rating":1, "profile.cus_name":1}}

    let data=await Reviewmodel.aggregate([
        MatchState,
        joinwithProfilestate,
        projecttionstage
    ])
    return {status: "success", data: data};

}catch(err){
    return {status:"fail",data:err}.toString()
}
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