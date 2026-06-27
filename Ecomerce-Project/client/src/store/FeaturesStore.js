
import axios from 'axios'
import {create} from "zustand";

const FeaturesStore = create ((set)=>({
    FeatureList:null,
        FeatureListRequest:async ()=>{
        let res=await axios.get('api/FeturesList');
        if(res.data['status'] === 'success'){
            set({FeatureList:res.data['data']})
        }
    }



}))

export default FeaturesStore;