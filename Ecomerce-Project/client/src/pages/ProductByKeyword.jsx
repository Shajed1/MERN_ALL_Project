import ProductStore from "../store/ProductStore.js";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import MasterLayout from "../components/layout/MasterLayout.jsx";
import ProductList from "../components/product/ProductList.jsx";


const ProductByKeyword = () => {
    const { ListByKeywordRequest } = ProductStore();
    const {keyword}=useParams()
    useEffect(()=>{
        (async ()=>{
            await ListByKeywordRequest(keyword)
        })()
    },[keyword])
    return (
        <MasterLayout>
            <ProductList/>
        </MasterLayout>
    );
};

export default ProductByKeyword;