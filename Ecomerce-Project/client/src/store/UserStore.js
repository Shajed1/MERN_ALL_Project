
import axios from 'axios'
import {create} from "zustand";
import {getEmail, setEmail} from "../utility/ValidationHelper.js";

const UserStore = create ((set)=>({

    LoginFormValue:{email:""},

    IsFormSubmit:true,
    UserLoginRequest:async (email)=>{
        let res=await axios.get(`/api/UserOTP/${email}`);
        setEmail(email)
        set({IsFormSubmit: false})
        if(res.data['status'] === 'success'){
            return true
        }else{
            return false
        }
    },
    UserOtpRequest:async (otp)=>{
        set({IsFormSubmit: true})
        let email=getEmail()
        let res=await axios.get(`/api/VerifyOTP/${email}/${otp}`);
        setEmail(email)
        if(res.data['status'] === 'success'){
            return true
        }else{
            return false
        }
    }

}))

export default UserStore;