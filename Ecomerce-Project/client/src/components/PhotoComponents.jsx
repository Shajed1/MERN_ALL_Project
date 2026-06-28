import {useEffect} from "react";
import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/image-gallery.css'
import ProductStore from "../store/ProductStore.js";

const PhotoComponents = () => {
    const {ProductDetails}=ProductStore()
    let images=[
        {original: ProductDetails[0]['details']['img1']},
        {original: ProductDetails[0]['details']['img2']},
        {original: ProductDetails[0]['details']['img3']},
        {original: ProductDetails[0]['details']['img4']},
        {original: ProductDetails[0]['details']['img5']},
        {original: ProductDetails[0]['details']['img6']},
        {original: ProductDetails[0]['details']['img7']},
        {original: ProductDetails[0]['details']['img8']},
    ]
   useEffect(()=>{
       (()=>{

       })()
   },[])
    return (
        <div>
             <ImageGallery autoPlay={false} showPlayButton={false} items={images}/>
        </div>
    );
};

export default PhotoComponents;