import { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiUser, FiLogOut, FiHome, FiPhone, FiMail } from "react-icons/fi";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import ProductStore from "../../store/ProductStore.js";
import { useNavigate } from "react-router-dom";

const AppNavbar = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
     const {SetSearchKeyword,SearchKeyword}=ProductStore()
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            {/* টপ বার – কন্টাক্ট ইনফো */}
            <div className="bg-indigo-600 text-white text-sm py-2">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1">
              <FiMail className="w-4 h-4" />
              shajedshohan11@gmail.com
            </span>
                        <span className="flex items-center gap-1">
              <FiPhone className="w-4 h-4" />
              01736360237
            </span>
                    </div>
                    <div className="hidden sm:block text-xs opacity-80">
                        Mon-Sat: 9AM – 9PM
                    </div>
                </div>
            </div>

            {/* প্রধান নেভবার */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* ব্র্যান্ড নাম */}
                    <div className="flex-shrink-0 flex items-center">
                        <span className="text-2xl font-bold text-indigo-600">ShopVerse</span>
                    </div>

                    {/* ডেস্কটপ মেনু */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="flex items-center gap-1 text-gray-700 hover:text-indigo-600 text-sm font-medium">
                            <FiHome className="w-4 h-4" /> Home
                        </Link>

                        {/* সার্চ বার */}
                        <div className="relative">
                            <div className="flex w-full max-w-xl mx-auto">

                                {/* Search Input */}
                                <div className="relative flex-1">
                                    <input
                                        type="text"
                                        value={SearchKeyword}
                                        onChange={(e) => SetSearchKeyword(e.target.value)}
                                        placeholder="Search for products..."
                                        className="w-full h-14 pl-12 pr-4 rounded-l-2xl border border-r-0 border-gray-300 bg-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                                    />

                                </div>

                                {/* Search Button */}
                                <button
                                    onClick={() => {
                                        SearchKeyword.length > 0
                                            ? navigate(`/by-keyword/${SearchKeyword}`)
                                            : navigate("/");
                                    }}
                                    className="h-14 px-8 rounded-r-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-blue-300 transition-all duration-300"
                                >
                                    Search
                                </button>

                            </div>
                        </div>

                        <Link to="/profile" className="flex items-center gap-1 text-gray-700 hover:text-indigo-600 text-sm font-medium">
                            <FiUser className="w-4 h-4" /> Profile
                        </Link>

                        <button className="flex items-center gap-1 text-red-500 hover:text-red-700 text-sm font-medium">
                            <FiLogOut className="w-4 h-4" /> Logout
                        </button>
                    </div>

                    {/* মোবাইল হ্যামবার্গার */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-600 hover:text-gray-900 focus:outline-none"
                        >
                            {isMenuOpen ? <HiOutlineX className="w-6 h-6" /> : <HiOutlineMenuAlt3 className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* মোবাইল মেনু (ড্রপডাউন) */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-gray-200 bg-white">
                    <div className="px-4 pt-2 pb-4 space-y-2">
                        <Link
                            to="/"
                            className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <FiHome className="w-5 h-5" /> Home
                        </Link>
                        <div className="relative px-3">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            />
                            <FiSearch className="w-5 h-5 absolute right-5 top-3 text-gray-400" />
                        </div>
                        <Link
                            to="/profile"
                            className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <FiUser className="w-5 h-5" /> Profile
                        </Link>
                        <button
                            className="flex items-center gap-3 px-3 py-2 w-full text-left rounded-md text-red-500 hover:text-red-700 hover:bg-red-50"
                            onClick={() => {
                                setIsMenuOpen(false);
                                // লগআউট ফাংশন এখানে যুক্ত করবেন
                            }}
                        >
                            <FiLogOut className="w-5 h-5" /> Logout
                        </button>

                        {/* মোবাইলে কন্টাক্ট ইনফো */}
                        <div className="mt-4 pt-4 border-t border-gray-200 px-3 text-sm text-gray-500 space-y-1">
                            <p className="flex items-center gap-2"><FiMail className="w-4 h-4" /> Support@PlanB.com</p>
                            <p className="flex items-center gap-2"><FiPhone className="w-4 h-4" /> 01774688159</p>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default AppNavbar;