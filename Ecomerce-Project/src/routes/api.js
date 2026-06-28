const express = require('express');
const ProductController=require("../controllers/ProductController")
const UserController=require("../controllers/UserController")
const WishListcontroller= require("../controllers/WishListcontroller")
const CartListController=require("../controllers/CartListcontroller")
const InvoiceController=require("../controllers/InvoiceController")
const FeaturesController=require("../controllers/FeturesController")
const AuthMiddleware=require("../middlewarew/AuthVerification");
const {WishList} = require("../controllers/WishListcontroller");
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
router.post('/ProductListByFilter',ProductController.ProductListByFilter)

 // router.post("/insert",ProductController.insert)

//User Routes
router.get('/UserOTP/:email',UserController.UserOTP)
router.get('/VerifyOTP/:email/:otp',UserController.VerifyOTP)
router.get('/UserLogout',AuthMiddleware,UserController.UserLogout)
router.post('/CreateuserProfile',AuthMiddleware,UserController.CreateProfile)
router.post('/UpdateProfile',AuthMiddleware,UserController.UpdateProfile)
router.get('/ReadProfile',AuthMiddleware,UserController.ReadProfile)

// WishList Routes
 router.get("/wishlist",AuthMiddleware,WishListcontroller.WishList)
router.post("/createwish",AuthMiddleware,WishListcontroller.CreateWishList)
router.post("/removewish",AuthMiddleware,WishListcontroller.RemoveWish)


//Create Cart Routes
router.get("/cartlist",AuthMiddleware,CartListController.CartList)
router.post("/SaveCartList",AuthMiddleware,CartListController.SaveCartList)
router.post("/UpdateCartList/:cartId",AuthMiddleware,CartListController.UpdateCartList)
router.post("/RemoveCartList",AuthMiddleware,CartListController.RemoveCartList)

// Invoice Route
router.get("/CreateInvoice",AuthMiddleware,InvoiceController.CreateInvoice)
router.get("/InvoiceList",AuthMiddleware,InvoiceController.InvoiceList)
router.get("/InvoiceProductList/:invoice_id",AuthMiddleware,InvoiceController.InvoiceProductList)

router.post("/PaymentFail/:trxID",InvoiceController.PaymentFail)
router.post("/PaymentCancel/:trxID",InvoiceController.PaymentCancel)
router.post("/PaymentIPN/:trxID",InvoiceController.PaymentIPN)
router.post("/PaymentSuccess/:trxID",InvoiceController.PaymentSuccess)

// Features Route
router.get("/FeturesList",FeaturesController.FeturesList)
router.get("/Legaldetails/:type",FeaturesController.Legaldetails)

//Create Review
router.post("/CreateReview",AuthMiddleware,ProductController.CreateReview)



module.exports=router;
