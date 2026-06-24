const WisheModel=require("../models/WishModel")
const mongoose=require("mongoose")
const ObjectID=mongoose.Types.ObjectId

const WishListService= async (req)=>{
    try{
       let user_id=new ObjectID(req.headers.user_id)
        let matchStage={$match:{userID:user_id}}

        let JoinProductStage={$lookup:{from:"products",localField:'productID',foreignField:'_id',as:"products"}}
        let JoinWinthBrands={$lookup:{from:"brands",localField:'products.brandID',foreignField:'_id',as:"brands"}}
        let JoinWithcategory={$lookup:{from:"categories",localField:'products.categoryID',foreignField:'_id',as:"categories"}}
        let unwindproductStage={$unwind:"$products"}
        let unwindbrandsStage={$unwind:"$brands"}
        let unwindcategoriesStage={$unwind:"$categories"}

        let projectionStage={
           $project:{
            '_id':0,'createdAt':0,'updatedAt':0,'products._id':0,
               'products.categoryID':0, 'products.brandID':0,
               'brands._id':0,'categories._id':0,
            }
       }


        let data= await WisheModel.aggregate([
            matchStage,
            JoinProductStage,JoinWinthBrands,JoinWithcategory,
            unwindproductStage,unwindbrandsStage,unwindcategoriesStage,
            projectionStage
        ])
        return {status:"success",massage:data}
    }catch(err){
        return {status:"failed",massage:err}
    }
}

const SaveWishListService= async (req)=>{
      try{
          let user_id=new ObjectID(req.headers.user_id)
          let reqbody=req.body;
          reqbody.userID=user_id;
          await WisheModel.updateOne(reqbody,{$set:reqbody},{upsert:true})
          return {status:"success",massage:"Wish List Create Success"}
      }catch(err){
          return {status:"failed",massage:err}
      }
}

const RemoveWishService= async (req)=>{
    try{
        let user_id=new ObjectID(req.headers.user_id)
        let reqbody=req.body;
        reqbody.userID=user_id;
        await WisheModel.deleteOne(reqbody)
        return {status:"success",massage:"Wish List Remove Success"}
    }catch(err){
        return {status:"failed",massage:err}
    }
}

module.exports={
    WishListService,
    SaveWishListService,
    RemoveWishService
}