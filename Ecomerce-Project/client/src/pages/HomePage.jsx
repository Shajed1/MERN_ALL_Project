import MasterLayout from "../components/layout/MasterLayout.jsx";
import Brands from "../components/product/Brands.jsx";
import ProductStore from "../store/ProductStore.js";
import FeaturesStore from "../store/FeaturesStore.js";
import {useEffect} from "react";
import Slider from "../components/product/Slider.jsx";
import Features from "../components/features/Features.jsx";
import Category from "../components/product/Category.jsx";
import Products from "../components/product/Products.jsx";



const HomePage = () => {
   const {BrandListRequest,CategoryListRequest,SliderListRequest,ListByProductRemarkRequest}=ProductStore();
    const {FeatureListRequest}=FeaturesStore();

    useEffect(() => {
        console.log("HomePage useEffect");
        (async () => {
            await SliderListRequest();
            await FeatureListRequest();
            await CategoryListRequest();
            await BrandListRequest();
            await ListByProductRemarkRequest("new");
        })();
    }, []);

    return (
<>
        <MasterLayout>
            <Slider/>
            <Brands/>
            <Category/>
            <Products/>
            <Features/>
        </MasterLayout>

</>
    );
};

export default HomePage;