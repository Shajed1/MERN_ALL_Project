import MasterLayout from "../components/layout/MasterLayout.jsx";
import Deatils from "../components/product/Deatils.jsx";
import Brands from "../components/product/Brands.jsx";
import ProductStore from "../store/ProductStore.js";
import {useEffect} from "react";
import {useParams} from "react-router-dom";


const ProductDetails = () => {
    const {ProductReviewListRequest,ProductDetailsRequest,BrandListRequest}=ProductStore()
    const {id}=useParams();
    useEffect(() => {
        (async ()=>{
            await ProductReviewListRequest(id);
            await ProductDetailsRequest(id)
            BrandListRequest===null?await BrandListRequest():null

        })()
    },[])
    return (
    <MasterLayout>
        <Deatils/>
    </MasterLayout>
    );
};

export default ProductDetails;