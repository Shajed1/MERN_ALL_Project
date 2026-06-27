
import ProductStore from "../../store/ProductStore.js";
import BrandsSkeleton from "../../skeleton/Brands-Skeleton.jsx";
import {Link} from "react-router-dom";

const Brands = () => {
    const {BrandList}=ProductStore()
    if(BrandList===null){
        return <BrandsSkeleton/>
    }else{
        return (
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">

                    {/* Heading */}
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900">
                            Our Top Brands
                        </h2>

                        <p className="mt-2 text-gray-500">
                            Explore products from the world's most trusted brands.
                        </p>
                    </div>

                    {/* Brand Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">

                        {BrandList.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col items-center justify-center shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-indigo-500 transition-all duration-300 cursor-pointer group"
                            >
                                <Link to={`/by-brand/${item['_id']}`}>
                                <img
                                    src={item.brandImg}
                                    alt="Brand Image"
                                    className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                                />

                                <h3 className="mt-4 text-sm font-semibold text-gray-700 group-hover:text-indigo-600 transition-colors text-center">
                                    {item.brandName}
                                </h3></Link>
                            </div>
                        ))}

                    </div>

                </div>
            </section>
        );
    }
};

export default Brands;