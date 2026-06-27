
import axios from 'axios'
import {create} from "zustand";

const ProductStore = create ((set)=>({
    BrandList:null,
    BrandListRequest:async ()=>{
        let res=await axios.get('/api/productbrandlist');
        if(res.data['status'] === 'success'){
            set({BrandList:res.data['data']})
        }
    },
    CategoryList:null,
    CategoryListRequest:async ()=>{
        let res=await axios.get('/api/ProductCategoryList');
        if(res.data['status'] === 'success'){
            set({CategoryList:res.data['data']})
        }
    },
    SliderList:null,
    SliderListRequest:async ()=>{
        let res=await axios.get('/api/ProductSliderList');
        if(res.data['status'] === 'success'){
            set({SliderList:res.data['data']})
        }
    },
    ListByProductRemark:null,
    ListByProductRemarkRequest:async (Remark)=>{
        set({ListByProductRemark: null})
        let res=await axios.get(`/api/ProductListByRemark/${Remark}`);
        if(res.data['status'] === 'success'){
            set({ListByProductRemark:res.data['data']})
        }
    },

    ListProduct:null,
    ListByBrandRequest:async (BrandID)=>{
        set({ListProduct: null})
        let res=await axios.get(`/api/ProductListByBrand/${BrandID}`);
        console.log(res.data);
        if(res.data['status'] === 'success'){
            set({ListProduct:res.data['data']})
        }
    },

    ListByCategoryRequest:async (CategoryID)=>{
        set({ListProduct: null})
        let res=await axios.get(`/api/ProductListByCategory/${CategoryID}`);
        if(res.data['status'] === 'success'){
            set({ListProduct:res.data['data']})
        }
    },
    ListByKeywordRequest:async (Keyword)=>{
        set({ListProduct: null})
        let res=await axios.get(`/api/ProductListByKeyword/${Keyword}`);
        if(res.data['status'] === 'success'){
            set({ListProduct:res.data['data']})
        }
    },
    SearchKeyword:"",
    SetSearchKeyword:async (keyword)=>{
        set({SearchKeyword:keyword});
    }

}))

export default ProductStore;