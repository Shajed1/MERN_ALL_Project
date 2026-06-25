import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const FeaturesSkeleton = () => {
    // ৪টি কার্ডের জন্য ডামি অ্যারে
    const skeletonCards = [1, 2, 3, 4];

    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* হেডিং স্কেলটন */}
                <div className="text-center mb-10">
                    <Skeleton
                        height={40}
                        width={250}
                        className="mx-auto"
                        baseColor="#e0e0e0"
                        highlightColor="#f0f0f0"
                        borderRadius={8}
                    />
                    <div className="mt-2">
                        <Skeleton
                            height={20}
                            width={300}
                            className="mx-auto"
                            baseColor="#e0e0e0"
                            highlightColor="#f0f0f0"
                            borderRadius={8}
                        />
                    </div>
                </div>

                {/* ৪টি কার্ডের গ্রিড */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skeletonCards.map((item) => (
                        <div
                            key={item}
                            className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-100"
                        >
                            {/* আইকন প্লেসহোল্ডার (বৃত্ত) – Lottie-র বদলে */}
                            <div className="flex justify-center mb-4">
                                <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-4xl text-gray-400 animate-pulse">
                                    🛍️
                                </div>
                            </div>

                            {/* টাইটেল স্কেলটন */}
                            <Skeleton
                                height={24}
                                width="70%"
                                className="mx-auto mb-2"
                                baseColor="#e0e0e0"
                                highlightColor="#f0f0f0"
                                borderRadius={8}
                            />

                            {/* বিবরণ স্কেলটন (২ লাইন) */}
                            <div className="space-y-2">
                                <Skeleton
                                    height={14}
                                    width="90%"
                                    className="mx-auto"
                                    baseColor="#e0e0e0"
                                    highlightColor="#f0f0f0"
                                    borderRadius={4}
                                />
                                <Skeleton
                                    height={14}
                                    width="60%"
                                    className="mx-auto"
                                    baseColor="#e0e0e0"
                                    highlightColor="#f0f0f0"
                                    borderRadius={4}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSkeleton;