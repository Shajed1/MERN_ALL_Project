import UserStore from "../../store/UserStore.js";
import {useEffect} from "react";
import ProfileDetailsSkeleton from "../../skeleton/ProfileDetailsSkeleton.jsx";

const UserProfile = () => {

  const {ProfileForm,ProfileFormOnchange,ProfileDetails,ProfileDetailsRequest,ProfileSaveRequest}=UserStore()

    useEffect(()=>{
        (async ()=>{
           await ProfileDetailsRequest()
            console.log(ProfileDetails);
        })()
    },[])

    if(ProfileDetails===null){
        return <ProfileDetailsSkeleton/>
    }else{
        return (

            <div className="grid lg:grid-cols-2 gap-8">

                {/* Customer Information */}
                <div className="bg-white rounded-3xl shadow-lg p-8">

                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        Customer Information
                    </h2>

                    <div className="space-y-5">

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <input
                                value={ProfileForm.cus_name}
                                type="text"
                                placeholder="Enter Full Name"
                                className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Phone
                            </label>
                            <input
                                value={ProfileForm.cus_phone}
                                type="text"
                                placeholder="Enter Phone Number"
                                className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Address
                            </label>
                            <textarea
                                value={ProfileForm.cus_add}
                                rows="3"
                                placeholder="Enter Address"
                                className="w-full p-4 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none resize-none"
                            ></textarea>
                        </div>

                        <div className="grid grid-cols-2 gap-4">

                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-700">
                                    City
                                </label>
                                <input
                                    value={ProfileForm.cus_city}
                                    type="text"
                                    placeholder="City"
                                    className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-700">
                                    State
                                </label>
                                <input
                                    value={ProfileForm.cus_state}
                                    type="text"
                                    placeholder="State"
                                    className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-700">
                                    Post Code
                                </label>
                                <input
                                    value={ProfileForm.cus_postcode}
                                    type="text"
                                    placeholder="Post Code"
                                    className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-700">
                                    Country
                                </label>
                                <input
                                    value={ProfileForm.cus_country}
                                    type="text"
                                    placeholder="Country"
                                    className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none"
                                />
                            </div>

                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Fax
                            </label>
                            <input
                                value={ProfileForm.cus_fax}
                                type="text"
                                placeholder="Fax (Optional)"
                                className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none"
                            />
                        </div>

                    </div>

                </div>

                {/* Shipping Information */}
                <div className="bg-white rounded-3xl shadow-lg p-8">

                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        Shipping Information
                    </h2>

                    <div className="space-y-5">

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Receiver Name
                            </label>
                            <input
                                value={ProfileForm.ship_name}
                                type="text"
                                placeholder="Receiver Name"
                                className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Phone
                            </label>
                            <input
                                value={ProfileForm.ship_phone}
                                type="text"
                                placeholder="Receiver Phone"
                                className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Address
                            </label>
                            <textarea
                                value={ProfileForm.ship_add}
                                rows="3"
                                placeholder="Shipping Address"
                                className="w-full p-4 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none resize-none"
                            ></textarea>
                        </div>

                        <div className="grid grid-cols-2 gap-4">

                            <input
                                value={ProfileForm.ship_city}
                                type="text"
                                placeholder="City"
                                className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none"
                            />

                            <input
                                value={ProfileForm.ship_state}
                                type="text"
                                placeholder="State"
                                className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none"
                            />

                            <input
                                value={ProfileForm.ship_postcode}
                                type="text"
                                placeholder="Post Code"
                                className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none"
                            />

                            <input
                                value={ProfileForm.ship_country}
                                type="text"
                                placeholder="Country"
                                className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none"
                            />

                        </div>

                    </div>
                    <div className="flex justify-end mt-8">
                        <button
                            className="px-8 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg"
                        >
                            Save Changes
                        </button>
                    </div>

                </div>
            </div>


            )}
};

export default UserProfile;