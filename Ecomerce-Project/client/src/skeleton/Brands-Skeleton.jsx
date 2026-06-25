import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BrandsSkeleton = () => {
    // ১৬টি ব্র্যান্ড কার্ডের জন্য ডামি অ্যারে
    const brandItems = Array.from({ length: 16 }, (_, i) => i + 1);

    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Our Trusted Brands
                    </h2>
                    <p className="text-gray-600 mt-2 text-lg">
                        Explore a World of Choices Across Our Most Popular Shopping Categories
                    </p>
                </div>


                {/* ব্র্যান্ড গ্রিড (১৬টি কার্ড) */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 md:gap-6">
                    {brandItems.map((item) => (
                        <div
                            key={item}
                            className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100 hover:shadow-md transition flex flex-col items-center justify-center h-28"
                        >
                            {/* ব্র্যান্ড লোগো প্লেসহোল্ডার (বৃত্ত বা আয়ত) */}
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-200 flex items-center justify-center text-3xl md:text-4xl text-gray-400 animate-pulse mb-2">
                                🏢
                            </div>

                            {/* ব্র্যান্ড নামের স্কেলটন */}
                            <Skeleton
                                height={14}
                                width="60%"
                                className="mx-auto"
                                baseColor="#e0e0e0"
                                highlightColor="#f0f0f0"
                                borderRadius={4}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandsSkeleton;