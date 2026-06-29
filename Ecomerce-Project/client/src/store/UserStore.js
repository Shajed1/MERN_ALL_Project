
import axios from 'axios'
import {create} from "zustand";
import {getEmail, setEmail} from "../utility/ValidationHelper.js";
import Cookies from "js-cookie";
import {unauthorized} from "../utility/utility.js";

const UserStore = create ((set)=>({

    isLogin:()=>{
        return !!Cookies.get('token')
        },


    UserLogoutRequest:async ()=>{
        set({IsFormSubmit: true})
        let res=await axios.get(`/api/UserLogout`);
        set({IsFormSubmit: false})
        if(res.data['status'] === 'success'){
            return true
        }else{
            return false
        }
    },


    LoginFormdata:{email:""},
    LoginFormOnchange:(name,value)=>{
        set((state)=>({
            LoginFormdata:{
                ...state.LoginFormdata,
                [name]:value
            }
        }))
    },

    OtpFormdata:{otp:""},
    OtpFormOnchange:(name,value)=>{
        set((state)=>({
            OtpFormdata:{
                ...state.OtpFormdata,
                [name]:value
            }
        }))
    },

    IsFormSubmit:false,
    UserLoginRequest:async (email)=>{
        set({IsFormSubmit: true})
        let res=await axios.get(`/api/UserOTP/${email}`);
        console.log(res.data)
        set({IsFormSubmit: false})
        if(res.data['status'] === 'success'){
            setEmail(email)
            return true
        }else{
            return false
        }
    },
    UserOtpRequest:async (otp)=>{
        set({IsFormSubmit: true})
        let email=getEmail()
        let res=await axios.get(`/api/VerifyOTP/${email}/${otp}`);
        set({IsFormSubmit: false})
        if(res.data['status'] === 'success'){
            return true
        }else{
            return false
        }
    },
    ProfileForm: {
        cus_name: "",
        cus_phone: "",
        cus_add: "",
        cus_city: "",
        cus_state: "",
        cus_postcode: "",
        cus_country: "",
        cus_fax: "",

        ship_name: "",
        ship_phone: "",
        ship_add: "",
        ship_city: "",
        ship_state: "",
        ship_postcode: "",
        ship_country: ""
    },

    ProfileFormOnchange: (name, value) => {
        set((state) => ({
            ProfileForm: {
                ...state.ProfileForm,
                [name]: value
            }
        }));
    },
    ProfileDetails:null,
    ProfileDetailsRequest:async ()=>{
       try{
           let res=await axios.get(`/api/ReadProfile`);
           if(res.data['data'].length>0){
               set({ProfileDetails:res.data['data'][0]});
               set({ProfileForm:res.data['data'][0]});
               console.log(res.data);
           }else{
               set({ProfileDetails:[]})
           }
       }catch(err){
           unauthorized(err.response.status)
       }

    },
    ProfileSaveRequest:async (reqbody)=>{
        try{
            let res=await axios.post(`/api/CreateuserProfile`,reqbody);
            if(res.data['status'] === 'success'){
                return true
            }else{
                return false
            }
        }catch(err){
            unauthorized(err.response.status)
        }

    },


}))

export default UserStore;