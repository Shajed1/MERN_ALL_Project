import ProductStore from "../store/ProductStore.js";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import MasterLayout from "../components/layout/MasterLayout.jsx";
import ProductList from "../components/product/ProductList.jsx";


const ProductByBrand = () => {

const {ListByBrandRequest}=ProductStore()
    const {id}=useParams()
    useEffect( ()=>{
        (async ()=>{
            await ListByBrandRequest(id)
        })()
    },[id]);
    return (
      <MasterLayout>
       <ProductList/>
      </MasterLayout>
    );
};

export default ProductByBrand;