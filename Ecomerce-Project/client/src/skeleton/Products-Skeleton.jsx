import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductsSkeleton = () => {
    // ৮টি কার্ডের জন্য ডামি অ্যারে
    const productCards = Array.from({ length: 8 }, (_, i) => i + 1);

    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* প্রোডাক্ট গ্রিড (৮টি কার্ড) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {productCards.map((item) => (
                        <div
                            key={item}
                            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition"
                        >
                            {/* ইমেজ প্লেসহোল্ডার */}
                            <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-5xl text-gray-400 animate-pulse">
                                🖼️
                            </div>

                            {/* কার্ড বডি */}
                            <div className="p-4 space-y-3">
                                {/* টাইটেল স্কেলটন (২ লাইন) */}
                                <div className="space-y-1">
                                    <Skeleton height={18} width="100%" baseColor="#e0e0e0" highlightColor="#f0f0f0" borderRadius={4}/>
                                    <Skeleton height={18} width="80%" baseColor="#e0e0e0" highlightColor="#f0f0f0" borderRadius={4}/>
                                </div>

                                {/* রেটিং স্কেলটন (স্টার) */}
                                <div className="flex items-center gap-1">
                                    <Skeleton height={16} width={80} baseColor="#e0e0e0" highlightColor="#f0f0f0" borderRadius={4}/>
                                    <Skeleton height={14} width={30} baseColor="#e0e0e0" highlightColor="#f0f0f0" borderRadius={4}/>
                                </div>

                                {/* প্রাইস স্কেলটন */}
                                <div className="flex items-center justify-between">
                                    <Skeleton height={24} width={80} baseColor="#e0e0e0" highlightColor="#f0f0f0" borderRadius={4}/>
                                    <Skeleton height={36} width={36} circle={true} baseColor="#e0e0e0" highlightColor="#f0f0f0"/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsSkeleton;