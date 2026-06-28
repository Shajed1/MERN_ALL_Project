const ProductDetailsSkeleton = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-10 animate-pulse">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Left Side Image Skeleton */}
                <div>

                    {/* Main Image */}
                    <div className="w-full h-[550px] rounded-xl bg-gray-200"></div>

                    {/* Thumbnail */}
                    <div className="flex gap-3 mt-4">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div
                                key={item}
                                className="w-24 h-20 rounded-lg bg-gray-200"
                            ></div>
                        ))}
                    </div>

                </div>

                {/* Right Side */}
                <div>

                    {/* Title */}
                    <div className="h-10 w-3/4 rounded bg-gray-200"></div>

                    {/* Category */}
                    <div className="h-5 w-40 rounded bg-gray-200 mt-6"></div>

                    {/* Description */}
                    <div className="space-y-3 mt-8">
                        <div className="h-4 w-full rounded bg-gray-200"></div>
                        <div className="h-4 w-full rounded bg-gray-200"></div>
                        <div className="h-4 w-5/6 rounded bg-gray-200"></div>
                    </div>

                    {/* Price */}
                    <div className="flex gap-4 mt-8">
                        <div className="h-8 w-24 rounded bg-gray-200"></div>
                        <div className="h-10 w-20 rounded bg-gray-200"></div>
                    </div>

                    {/* Size Color Quantity */}
                    <div className="grid grid-cols-3 gap-5 mt-10">

                        <div>
                            <div className="h-4 w-16 rounded bg-gray-200 mb-3"></div>
                            <div className="h-12 rounded-lg bg-gray-200"></div>
                        </div>

                        <div>
                            <div className="h-4 w-16 rounded bg-gray-200 mb-3"></div>
                            <div className="h-12 rounded-lg bg-gray-200"></div>
                        </div>

                        <div>
                            <div className="h-4 w-20 rounded bg-gray-200 mb-3"></div>
                            <div className="h-12 rounded-lg bg-gray-200"></div>
                        </div>

                    </div>

                    {/* Buttons */}
                    <div className="flex gap-5 mt-10">

                        <div className="h-12 w-44 rounded-lg bg-gray-200"></div>

                        <div className="h-12 w-44 rounded-lg bg-gray-200"></div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default ProductDetailsSkeleton;