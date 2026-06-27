import ProductStore from "../../store/ProductStore.js";
import CategorySkeleton from "../../skeleton/Category-Skeleton.jsx";
import {Link} from "react-router-dom";
const Category = () => {
    const {CategoryList}=ProductStore()
    if(CategoryList===null){
        return <CategorySkeleton/>
    }else{
        return (
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">

                    {/* Heading */}
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900">
                            Our Categories
                        </h2>

                        <p className="mt-2 text-gray-500">
                            Explore a World of Choices Across Our Most Popular Shopping Categories
                        </p>
                    </div>

                    {/* Brand Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">

                        {CategoryList.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col items-center justify-center shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-indigo-500 transition-all duration-300 cursor-pointer group"
                            >
                                <Link to={`/by-category/${item['_id']}`}>
                                <img
                                    src={item.categoryImg}
                                    alt="Category Image"
                                    className="w-30 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                                />

                                <h3 className="mt-4 text-sm font-semibold text-gray-700 group-hover:text-indigo-600 transition-colors text-center">
                                    {item.categoryName}
                                </h3></Link>
                            </div>
                        ))}

                    </div>

                </div>
            </section>
        );
    }
};

export default Category;