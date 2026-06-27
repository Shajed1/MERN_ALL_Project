import ProductStore from "../store/ProductStore.js";
import {useEffect} from "react";
import MasterLayout from "../components/layout/MasterLayout.jsx";
import {useParams} from "react-router-dom";
import ProductList from "../components/product/ProductList.jsx";


const ProductByCategory = () => {
    const { ListByCategoryRequest } = ProductStore();
    const {id}=useParams()
    useEffect(()=>{
        (async ()=>{
            await ListByCategoryRequest(id)
        })()
    },[id])
    return (
   <MasterLayout>
       <ProductList/>
   </MasterLayout>
    );
};

export default ProductByCategory;