import FeaturesStore from "../../store/FeaturesStore.js";
import FeaturesSkeleton from "../../skeleton/Fetures-Skeleton.jsx";
import {Link} from "react-router-dom";


const Features = () => {
    const {FeatureList}=FeaturesStore()
    if(FeatureList===null){
        return <FeaturesSkeleton/>
    }else{
        return (
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4">

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        {FeatureList.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
                            >
                                <Link to={`/by-Fetures/${item['_id']}`}>
                                {/* Name */}
                                <h3 className="text-xl font-bold text-gray-800">
                                    {item["name"]}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-gray-500 mt-3 leading-6">
                                    {item["description"]}
                                </p>

                                {/* Image / Logo */}
                                <img
                                    src={item["img"]}
                                    alt="Feature Image"
                                    className="w-14 h-14 object-contain mx-auto mt-5"
                                /></Link>
                            </div>
                        ))}

                    </div>

                </div>
            </section>
        );
    }
};

export default Features;