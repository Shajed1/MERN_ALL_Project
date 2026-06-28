import PhotoComponents from "../PhotoComponents.jsx";
import ProductStore from "../../store/ProductStore.js";
import ProductDetailsSkeleton from "../../skeleton/ProductDetailsSkeleton.jsx";
import {useState} from "react";
import parse from "html-react-parser";

const Deatils = () => {
    const {ProductDetails,ProductReviewList}=ProductStore()
    const [Quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState("configuration");
    const QuantityIncriment = () => {
        setQuantity(Quantity+1)
    }
    const QuantityDicriment = () => {
        if (Quantity > 1) {
            setQuantity(Quantity - 1);
        }
    };

    if(ProductDetails===null){
        return <ProductDetailsSkeleton/>
    }else{
        return (
            <div className="max-w-7xl mx-auto px-4 py-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Left Side (Image Section) */}
                    <div className="w-full">
                        <PhotoComponents/>

                    </div>

                    {/* Right Side (Product Details) */}
                    <div className="w-full">

                        {/* Product Title */}
                        <h1 className="text-4xl font-bold text-gray-900">
                            {ProductDetails[0]['title']}
                        </h1>

                        {/* Category */}
                        <p className="mt-5 text-lg text-gray-600">
                <span className="font-semibold text-gray-800">
                    Category Name :
                </span>{" "}
                            {ProductDetails[0]['categories']['categoryName']}
                        </p>

                        {/* Description */}
                        <p className="mt-6 text-gray-500 leading-8">
                            {ProductDetails[0]['shortDes']}
                        </p>

                        {/* Price */}
                        <div className="flex items-center gap-4 mt-8">

                <span className="text-3xl text-gray-400 line-through">
                    {ProductDetails[0]['price']}
                </span>

                            <span className="text-4xl font-bold text-green-600">
                    {ProductDetails[0]['discountPrice']}
                </span>

                        </div>

                        {/* Options */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

                            {/* Size */}
                            <div>
                                <label className="block mb-2 font-medium">
                                    Size
                                </label>

                                <select className="w-full h-12 border rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-green-500">
                                    <option>Select Size</option>
                                    {
                                        ProductDetails[0]['details']['size'].split(",").map((item,index)=>{
                                            return <option value={item}>{item}</option>
                                        })
                                    }
                                </select>
                            </div>

                            {/* Color */}
                            <div>
                                <label className="block mb-2 font-medium">
                                    Color
                                </label>

                                <select className="w-full h-12 border rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-green-500">
                                    <option>Select Color</option>
                                    {
                                        ProductDetails[0]['details']['color'].split(",").map((item,index)=>{
                                           return <option value={item}>{item}</option>
                                        })
                                    }
                                </select>
                            </div>

                            {/* Quantity */}
                            <div>
                                <label className="block mb-2 font-medium">
                                    Quantity
                                </label>

                                <div className="flex h-12 border rounded-lg overflow-hidden">

                                    <button onClick={QuantityDicriment} className="w-12 border-r hover:bg-gray-100 text-xl"> - </button>

                                    <div className="flex-1 flex items-center justify-center font-semibold" >{Quantity}</div>

                                    <button onClick={QuantityIncriment} className="w-12 border-l hover:bg-gray-100 text-xl">+</button>

                                </div>
                            </div>

                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-5 mt-10">

                            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-10 py-3 rounded-lg">
                                Add To Cart
                            </button>

                            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-10 py-3 rounded-lg">
                                Add To Wish
                            </button>


                        </div>

                    </div>

                    <button
                        onClick={() => setActiveTab("configuration")}
                        className={`px-8 py-4 text-lg font-semibold transition-all duration-300 border-b-2 ${
                            activeTab === "configuration"
                                ? "border-green-500 text-green-600"
                                : "border-transparent text-gray-500 hover:text-green-600"
                        }`}
                    >
                        Configuration
                    </button>

                    {/* Review */}
                    <button
                        onClick={() => setActiveTab("review")}
                        className={`px-8 py-4 text-lg font-semibold transition-all duration-300 border-b-2 ${
                            activeTab === "review"
                                ? "border-green-500 text-green-600"
                                : "border-transparent text-gray-500 hover:text-green-600"
                        }`}
                    >
                        Reviews
                    </button>

                </div>

                {/* Tab Body */}
                <div className="mt-8">

                    {/* Configuration */}
                    {activeTab === "configuration" && (
                        parse(ProductDetails[0]['details']['des'])

                    )}

                    {/* Reviews */}
                    {activeTab === "review" && (
                        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">

                            {/* Heading */}
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-3xl font-bold text-gray-800">
                                    Customer Reviews
                                </h2>

                                <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold text-sm">
                {ProductReviewList.length} Reviews
            </span>
                            </div>

                            <div className="space-y-6">
                                {ProductReviewList.map((review, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-50 hover:bg-white border border-gray-200 hover:border-green-400 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg"
                                    >

                                        {/* Header */}
                                        <div className="flex justify-between items-start">

                                            {/* Avatar + Name */}
                                            <div className="flex items-center gap-4">

                                                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-xl uppercase">
                                                    {review.profile?.[0]?.cus_name?.charAt(0)}
                                                </div>

                                                <div>
                                                    <h4 className="font-semibold text-lg text-gray-800">
                                                        {review.profile?.[0]?.cus_name || "Anonymous"}
                                                    </h4>

                                                    <p className="text-sm text-gray-500">
                                                        Verified Purchase
                                                    </p>
                                                </div>

                                            </div>

                                            {/* Rating */}
                                            <div className="text-right">

                                                <div className="flex justify-end gap-1">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <span
                                                            key={star}
                                                            className={`text-xl ${
                                                                star <= Number(review.rating)
                                                                    ? "text-yellow-400"
                                                                    : "text-gray-300"
                                                            }`}
                                                        >
                                        ★
                                    </span>
                                                    ))}
                                                </div>

                                                <p className="text-sm text-gray-500 mt-1">
                                                    {review.rating}/5 Rating
                                                </p>

                                            </div>

                                        </div>

                                        {/* Review */}
                                        <p className="mt-5 text-gray-600 leading-8">
                                            {review.des}
                                        </p>

                                    </div>
                                ))}

                            </div>
                        </div>
                    )}

                </div>

            </div>



        );
    }

};

export default Deatils;