import ProductStore from "../../store/ProductStore.js";
import ProductsSkeleton from "../../skeleton/Products-Skeleton.jsx";
import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";


const ProductList = () => {
    const { ListProduct } = ProductStore();
    return (
        <section className="bg-gradient-to-br from-blue-50 via-indigo-50/30 to-white min-h-screen py-8">
            <div className="container mx-auto px-4">

                {/* 🎯 Page Header */}
                <div className="text-center mb-10">
                    <div className="inline-block bg-blue-600/10 backdrop-blur-sm px-6 py-1.5 rounded-full border border-blue-200/50 mb-4">
                        <span className="text-blue-700 text-sm font-medium tracking-wide">✦ Premium Collection</span>
                    </div>
                    <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-500">
                        Our Products
                    </h1>
                    <p className="text-gray-500 mt-3 text-lg max-w-2xl mx-auto font-light">
                        Discover Our Curated Collection of Premium Products
                    </p>
                </div>

                <div className="flex flex-wrap -mx-3">

                    {/* 📌 Sidebar */}
                    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl shadow-blue-200/30 p-6 border border-blue-100/50 sticky top-6">

                            {/* Brand Filter */}
                            <div className="mb-5">
                                <label className="block text-xs font-semibold text-blue-700 uppercase tracking-wider mb-2">
                                    <span className="inline-block w-1 h-4 bg-blue-500 rounded-full mr-2 align-middle"></span>
                                    Brands
                                </label>
                                <select className="w-full rounded-xl border-blue-200/80 bg-blue-50/50 text-gray-700 text-sm py-3 px-4 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 outline-none shadow-sm hover:shadow-md">
                                    <option value="">Choose Brand</option>
                                    <option value="apple">Apple</option>
                                    <option value="samsung">Samsung</option>
                                    <option value="sony">Sony</option>
                                </select>
                            </div>

                            {/* Category Filter */}
                            <div className="mb-5">
                                <label className="block text-xs font-semibold text-blue-700 uppercase tracking-wider mb-2">
                                    <span className="inline-block w-1 h-4 bg-blue-500 rounded-full mr-2 align-middle"></span>
                                    Categories
                                </label>
                                <select className="w-full rounded-xl border-blue-200/80 bg-blue-50/50 text-gray-700 text-sm py-3 px-4 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 outline-none shadow-sm hover:shadow-md">
                                    <option value="">Choose Category</option>
                                    <option value="electronics">Electronics</option>
                                    <option value="wearables">Wearables</option>
                                    <option value="bags">Bags</option>
                                </select>
                            </div>

                            {/* Price Range */}
                            <div className="mb-4">
                                <label className="block text-xs font-semibold text-blue-700 uppercase tracking-wider mb-2">
                                    <span className="inline-block w-1 h-4 bg-blue-500 rounded-full mr-2 align-middle"></span>
                                    Maximum Price
                                </label>
                                <input
                                    type="range"
                                    min="0"
                                    max="1000000"
                                    step="1000"
                                    className="w-full h-2 bg-blue-200 rounded-full appearance-none cursor-pointer accent-blue-600 mt-1"
                                    style={{ background: "linear-gradient(to right, #3b82f6 0%, #93c5fd 100%)" }}
                                />
                                <div className="flex justify-between text-xs text-gray-400 mt-1">
                                    <span>৳0</span>
                                    <span>৳1,000,000</span>
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block text-xs font-semibold text-blue-700 uppercase tracking-wider mb-2">
                                    <span className="inline-block w-1 h-4 bg-blue-500 rounded-full mr-2 align-middle"></span>
                                    Minimum Price
                                </label>
                                <input
                                    type="range"
                                    min="0"
                                    max="1000000"
                                    step="1000"
                                    className="w-full h-2 bg-blue-200 rounded-full appearance-none cursor-pointer accent-blue-600 mt-1"
                                    style={{ background: "linear-gradient(to right, #3b82f6 0%, #93c5fd 100%)" }}
                                />
                                <div className="flex justify-between text-xs text-gray-400 mt-1">
                                    <span>৳0</span>
                                    <span>৳1,000,000</span>
                                </div>
                            </div>

                            {/* Apply / Reset Buttons */}
                            <div className="flex gap-3 mt-6">
                                <button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-semibold py-3 rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                                    Apply Filters
                                </button>
                                <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-600 text-sm font-semibold py-3 rounded-xl transition-all duration-300 border border-gray-200">
                                    Reset
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* 📦 Product Grid */}
                    <div className="w-full md:w-3/4 px-3">

                        <div className="flex flex-wrap -mx-2">

                            {ListProduct === null ? (
                                <ProductsSkeleton />
                            ) : ListProduct.length===0?(
                                <div className="w-full flex items-center justify-center py-24">
                                    <div className="text-center">
                                        <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center rounded-full bg-blue-100">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-12 h-12 text-blue-600"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9.172 9a4 4 0 015.656 0M15 15l-3 3-3-3"
                                                />
                                            </svg>
                                        </div>

                                        <h2 className="text-3xl font-bold text-gray-800">
                                            No Product Found
                                        </h2>

                                        <p className="mt-2 text-gray-500">
                                            Sorry! We couldn't find any products matching your search.
                                        </p>
                                    </div>
                                </div>
                            ):(
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
                                    {ListProduct.map((item, index) => (
                                        <div
                                            key={index}
                                            className="group bg-white rounded-2xl overflow-hidden border border-blue-100/50 shadow-lg shadow-blue-200/20 hover:shadow-2xl hover:shadow-blue-300/40 hover:-translate-y-2 transition-all duration-500 ease-out"
                                        >
                                            {/* Image Container */}
                                            <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-white h-64 flex items-center justify-center overflow-hidden">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-44 h-44 object-contain group-hover:scale-110 group-hover:rotate-1 transition-all duration-700 ease-out"
                                                />

                                                {/* Badge */}
                                                <span className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-blue-500/30 tracking-wide">
                                                    {item.remark || "New"}
                                                </span>

                                                {/* Wishlist Icon (decorative) */}
                                                <button className="absolute top-4 right-4 w-9 h-9 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white hover:scale-110 transition-all duration-300 border border-blue-100/50">
                                                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                    </svg>
                                                </button>
                                            </div>

                                            {/* Content */}
                                            <div className="p-5 bg-white">
                                                <h2 className="text-base font-bold text-gray-800 line-clamp-2 h-12 leading-tight group-hover:text-blue-700 transition-colors">
                                                    {item['title']}
                                                </h2>

                                                <p className="text-sm text-gray-400 mt-1 flex items-center gap-1">
                                                    <span className="inline-block w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                                                    Premium Quality
                                                </p>

                                                {/* Rating */}
                                                <div className="mt-3 flex items-center gap-2">
                                                    <Rating
                                                        style={{ maxWidth: 100 }}
                                                        value={Number(item.star) || 4}
                                                        readOnly
                                                    />
                                                    <span className="text-xs text-gray-400">({item.star || 4}.0)</span>
                                                </div>

                                                {/* Price */}
                                                <div className="flex items-end gap-3 mt-4">
                                                    <span className="text-2xl font-extrabold text-blue-700">
                                                        ৳{item.price}
                                                    </span>
                                                    <span className="text-sm text-gray-400 line-through">
                                                        ৳{item.discountPrice}
                                                    </span>
                                                    {item.discountPrice && (
                                                        <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                                                            Save {Math.round(((item.discountPrice - item.price) / item.discountPrice) * 100)}%
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Button */}
                                                <Link
                                                    to={`/details/${item._id}`}
                                                    className="mt-5 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 shadow-md shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 group-hover:scale-[1.02]"
                                                >
                                                    <span>View Details</span>
                                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Product Count */}
                        {ListProduct && ListProduct.length > 0 && (
                            <div className="text-center mt-8 text-sm text-gray-400 border-t border-blue-100/50 pt-6">
                                Showing <span className="font-semibold text-blue-700">{ListProduct.length}</span> products
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductList;