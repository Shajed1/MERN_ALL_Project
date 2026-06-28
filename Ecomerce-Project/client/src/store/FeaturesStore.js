
import axios from 'axios'
import {create} from "zustand";

const FeaturesStore = create ((set)=>({
    FeatureList:null,
        FeatureListRequest:async ()=>{
        let res=await axios.get('/api/FeturesList');
        if(res.data['status'] === 'success'){
            set({FeatureList:res.data['data']})
        }
    },

    LegalDetails:null,
    LegalDetailsRequest:async (type)=>{
        let res=await axios.get(`/api/Legaldetails/${type}`);
        if(res.data['status'] === 'success'){
            set({LegalDetails:res.data['data']})
        }
    }

}))

export default FeaturesStore;