const express = require('express');
const ProductController=require("../controllers/ProductController")
const UserController=require("../controllers/UserController")
const AuthMiddleware=require("../middlewarew/AuthVerification");
const router = express.Router();



//Product Routes
router.get('/productbrandlist',ProductController.ProductBrandList)
router.get('/ProductCategoryList',ProductController.ProductCategoryList)
router.get('/ProductSliderList',ProductController.ProductSliderList)
router.get('/ProductListByBrand/:BrandID',ProductController.ProductListByBrand)
router.get('/ProductListByCategory/:CategoryId',ProductController.ProductListByCategory)
router.get('/ProductListBySimilier/:CategoryId',ProductController.ProductListBySimilier)
router.get('/ProductListByRemark/:Remark',ProductController.ProductListByRemark)
router.get('/ProductListByKeyword/:Keyword',ProductController.ProductListByKeyword)
router.get('/ProductDetails/:ProductID',ProductController.ProductDetails)
router.get('/ProductReviewList/:ProductID',ProductController.ProductReviewList)


// router.get("/insert",ProductController.insert)

//User Routes
router.get('/UserOTP/:email',UserController.UserOTP)
router.get('/VerifyOTP/:email/:otp',UserController.VerifyOTP)
router.get('/UserLogout',AuthMiddleware,UserController.UserLogout)
router.post('/CreateuserProfile',AuthMiddleware,UserController.CreateProfile)
router.post('/UpdateProfile',AuthMiddleware,UserController.UpdateProfile)
router.get('/ReadProfile',AuthMiddleware,UserController.ReadProfile)



module.exports=router;
