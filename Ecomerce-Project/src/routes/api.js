const express = require('express');
const ProductController=require("../controllers/ProductController")

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


// router.get("/insert/:userID",ProductController.insert)


module.exports=router;
