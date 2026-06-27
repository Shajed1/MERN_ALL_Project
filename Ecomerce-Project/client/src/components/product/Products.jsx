import { useState } from "react";
import ProductStore from "../../store/ProductStore.js";
import ProductsSkeleton from "../../skeleton/Products-Skeleton.jsx";
import {Link} from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Products = () => {
    const [tab, setTab] = useState("new");
   const {ListByProductRemark,ListByProductRemarkRequest}=ProductStore()

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-gray-800">
                        Our Products
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Explore Our Latest Collection
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex justify-center gap-4 flex-wrap mb-10">

                    <button
                        onClick={() => {
                            ListByProductRemarkRequest("new");
                            setTab("new");
                        }}
                        className={`px-6 py-2 rounded-full font-medium transition ${
                            tab === "new"
                                ? "bg-green-500 text-white"
                                : "bg-white border hover:bg-green-500 hover:text-white"
                        }`}
                    >
                        New
                    </button>

                    <button
                        onClick={() => {
                            ListByProductRemarkRequest("trending");
                            setTab("trending");
                        }}
                        className={`px-6 py-2 rounded-full font-medium transition ${
                            tab === "trending"
                                ? "bg-green-500 text-white"
                                : "bg-white border hover:bg-green-500 hover:text-white"
                        }`}
                    >
                        Trending
                    </button>

                    <button
                        onClick={() => {
                            ListByProductRemarkRequest("popular");
                            setTab("popular");
                        }}
                        className={`px-6 py-2 rounded-full font-medium transition ${
                            tab === "popular"
                                ? "bg-green-500 text-white"
                                : "bg-white border hover:bg-green-500 hover:text-white"
                        }`}
                    >
                        Popular
                    </button>

                    <button
                        onClick={() => {
                            ListByProductRemarkRequest("top");
                            setTab("top");
                        }}
                        className={`px-6 py-2 rounded-full font-medium transition ${
                            tab === "top"
                                ? "bg-green-500 text-white"
                                : "bg-white border hover:bg-green-500 hover:text-white"
                        }`}
                    >
                        Top
                    </button>

                    <button
                        onClick={() => {
                            ListByProductRemarkRequest("flash");
                            setTab("flash");
                        }}
                        className={`px-6 py-2 rounded-full font-medium transition ${
                            tab === "flash"
                                ? "bg-green-500 text-white"
                                : "bg-white border hover:bg-green-500 hover:text-white"
                        }`}
                    >
                        Flash
                    </button>

                </div>

                {/* Product */}
                {
                    ListByProductRemark === null ? (
                        <ProductsSkeleton />
                    ) : (
                        tab === "new" && (
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                                {ListByProductRemark.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
                                    >
                                        {/* Product Image */}
                                        <div className="bg-gray-100 h-52 flex items-center justify-center overflow-hidden">
                                            <img
                                                src={item["image"]}
                                                alt="Product Image"
                                                className="w-40 h-40 object-contain group-hover:scale-105 transition duration-300"
                                            />
                                        </div>

                                        {/* Product Details */}
                                        <div className="p-4">
                                            <h2 className="font-semibold text-lg text-gray-800 truncate">
                                                {item["title"]}
                                            </h2>

                                            <p className="text-sm text-gray-500 mt-1">
                                                {item["remark"]}
                                            </p>

                                            <Rating
                                                style={{ maxWidth: 100 }}
                                                value={Number(item["star"])}
                                                readOnly
                                            />


                                            <div className="flex items-center justify-between mt-5">
                                                <div>
                                                    <h3 className="text-xl font-bold text-green-600">
                                                        {item['price']} BDT
                                                    </h3>

                                                    <p className="text-sm text-gray-400 line-through">
                                                        {item['discountPrice']} BDT
                                                    </p>
                                                </div>

                                                <Link to={`/details/${item['_id']}`} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition">
                                                    Details
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )
                    )
                }

                {
                    ListByProductRemark === null ? (
                        <ProductsSkeleton />
                    ) : (
                        tab === "trending" && (
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                                {ListByProductRemark.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
                                    >
                                        {/* Product Image */}
                                        <div className="bg-gray-100 h-52 flex items-center justify-center overflow-hidden">
                                            <img
                                                src={item["image"]}
                                                alt="Product Image"
                                                className="w-40 h-40 object-contain group-hover:scale-105 transition duration-300"
                                            />
                                        </div>

                                        {/* Product Details */}
                                        <div className="p-4">
                                            <h2 className="font-semibold text-lg text-gray-800 truncate">
                                                {item["title"]}
                                            </h2>

                                            <p className="text-sm text-gray-500 mt-1">
                                                {item["remark"]}
                                            </p>

                                            <Rating
                                                style={{ maxWidth: 100 }}
                                                value={Number(item["star"])}
                                                readOnly
                                            />

                                            <div className="flex items-center justify-between mt-5">
                                                <div>
                                                    <h3 className="text-xl font-bold text-green-600">
                                                        {item.price} BDT
                                                    </h3>

                                                    <p className="text-sm text-gray-400 line-through">
                                                        {item.discountPrice} BDT
                                                    </p>
                                                </div>

                                                <Link to={`/details/${item['_id']}`} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition">
                                                    Details
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )
                    )
                }

                {
                    ListByProductRemark === null ? (
                        <ProductsSkeleton />
                    ) : (
                        tab === "popular" && (
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                                {ListByProductRemark.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
                                    >
                                        {/* Product Image */}
                                        <div className="bg-gray-100 h-52 flex items-center justify-center overflow-hidden">
                                            <img
                                                src={item["image"]}
                                                alt="Product Image"
                                                className="w-40 h-40 object-contain group-hover:scale-105 transition duration-300"
                                            />
                                        </div>

                                        {/* Product Details */}
                                        <div className="p-4">
                                            <h2 className="font-semibold text-lg text-gray-800 truncate">
                                                {item["title"]}
                                            </h2>

                                            <p className="text-sm text-gray-500 mt-1">
                                                {item["remark"]}
                                            </p>

                                            <Rating
                                                style={{ maxWidth: 100 }}
                                                value={Number(item["star"])}
                                                readOnly
                                            />

                                            <div className="flex items-center justify-between mt-5">
                                                <div>
                                                    <h3 className="text-xl font-bold text-green-600">
                                                        {item.price} BDT
                                                    </h3>

                                                    <p className="text-sm text-gray-400 line-through">
                                                        {item.discountPrice} BDT
                                                    </p>
                                                </div>

                                                <Link to={`/details/${item['_id']}`} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition">
                                                    Details
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )
                    )
                }

                {
                    ListByProductRemark === null ? (
                        <ProductsSkeleton />
                    ) : (
                        tab === "top" && (
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                                {ListByProductRemark.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
                                    >
                                        {/* Product Image */}
                                        <div className="bg-gray-100 h-52 flex items-center justify-center overflow-hidden">
                                            <img
                                                src={item["image"]}
                                                alt="Product Image"
                                                className="w-40 h-40 object-contain group-hover:scale-105 transition duration-300"
                                            />
                                        </div>

                                        {/* Product Details */}
                                        <div className="p-4">
                                            <h2 className="font-semibold text-lg text-gray-800 truncate">
                                                {item["title"]}
                                            </h2>

                                            <p className="text-sm text-gray-500 mt-1">
                                                {item["remark"]}
                                            </p>

                                            <Rating
                                                style={{ maxWidth: 100 }}
                                                value={Number(item["star"])}
                                                readOnly
                                            />

                                            <div className="flex items-center justify-between mt-5">
                                                <div>
                                                    <h3 className="text-xl font-bold text-green-600">
                                                        {item.price} BDT
                                                    </h3>

                                                    <p className="text-sm text-gray-400 line-through">
                                                        {item.discountPrice} BDT
                                                    </p>
                                                </div>

                                                <Link to={`/details/${item['_id']}`} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition">
                                                    Details
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )
                    )
                }

                {
                    ListByProductRemark === null ? (
                        <ProductsSkeleton />
                    ) : (
                        tab === "flash" && (
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                                {ListByProductRemark.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
                                    >
                                        {/* Product Image */}
                                        <div className="bg-gray-100 h-52 flex items-center justify-center overflow-hidden">
                                            <img
                                                src={item["image"]}
                                                alt="Product Image"
                                                className="w-40 h-40 object-contain group-hover:scale-105 transition duration-300"
                                            />
                                        </div>

                                        {/* Product Details */}
                                        <div className="p-4">
                                            <h2 className="font-semibold text-lg text-gray-800 truncate">
                                                {item["title"]}
                                            </h2>

                                            <p className="text-sm text-gray-500 mt-1">
                                                {item["remark"]}
                                            </p>

                                            <Rating
                                                style={{ maxWidth: 100 }}
                                                value={Number(item["star"])}
                                                readOnly
                                            />

                                            <div className="flex items-center justify-between mt-5">
                                                <div>
                                                    <h3 className="text-xl font-bold text-green-600">
                                                        {item.price} BDT
                                                    </h3>

                                                    <p className="text-sm text-gray-400 line-through">
                                                        {item.discountPrice} BDT
                                                    </p>
                                                </div>

                                                <Link to={`/details/${item['_id']}`} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition">
                                                    Details
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )
                    )
                }



            </div>
        </section>
    );
};

export default Products;