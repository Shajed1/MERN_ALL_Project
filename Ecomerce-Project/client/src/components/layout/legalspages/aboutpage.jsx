
import MasterLayout from "../MasterLayout.jsx";
import LegalContentPage from "../LegalContentPage.jsx";
import FeaturesStore from "../../../store/FeaturesStore.js";
import {useEffect} from "react";

const Aboutpage = () => {
   const {LegalDetailsRequest}=FeaturesStore()
    useEffect(() => {
        (async ()=>{
           await LegalDetailsRequest('about')
        })()
    },[])
    return (
    <MasterLayout>
        <LegalContentPage />
    </MasterLayout>
    );
};

export default Aboutpage;