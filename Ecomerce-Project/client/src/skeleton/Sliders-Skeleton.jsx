import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SlidersSkeleton = () => {
    return (

        <div className="relative bg-gradient-to-r from-indigo-500 to-purple-600 min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

                    {/* বাম পাশে – টেক্সট স্কেলটন */}
                    <div className="space-y-4 text-white">
                        <Skeleton
                            height={50}
                            width="70%"
                            baseColor="#ffffff33"
                            highlightColor="#ffffff55"
                            borderRadius={8}
                        />
                        <Skeleton
                            height={30}
                            width="50%"
                            baseColor="#ffffff33"
                            highlightColor="#ffffff55"
                            borderRadius={8}
                        />
                        <div className="space-y-2">
                            <Skeleton
                                height={16}
                                width="100%"
                                baseColor="#ffffff33"
                                highlightColor="#ffffff55"
                                borderRadius={4}
                            />
                            <Skeleton
                                height={16}
                                width="90%"
                                baseColor="#ffffff33"
                                highlightColor="#ffffff55"
                                borderRadius={4}
                            />
                            <Skeleton
                                height={16}
                                width="80%"
                                baseColor="#ffffff33"
                                highlightColor="#ffffff55"
                                borderRadius={4}
                            />
                        </div>
                        <Skeleton
                            height={50}
                            width="150px"
                            borderRadius={25}
                            baseColor="#ffffff33"
                            highlightColor="#ffffff55"
                        />
                    </div>

                    {/* ডান পাশে – সিম্পল প্লেসহোল্ডার (Lottie বাদ) */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-white/20 rounded-full flex items-center justify-center text-6xl md:text-7xl lg:text-8xl text-white animate-bounce">
                            🛍️
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SlidersSkeleton;