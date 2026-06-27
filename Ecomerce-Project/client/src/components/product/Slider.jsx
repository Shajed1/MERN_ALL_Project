import SlidersSkeleton from "../../skeleton/Sliders-Skeleton.jsx";
import {useState} from "react";
import ProductStore from "../../store/ProductStore.js";


const Slider = () => {

    const { SliderList } = ProductStore();

    const [current, setCurrent] = useState(0);

    if (!SliderList || SliderList.length === 0) {
        return <SlidersSkeleton />;
    }

    const item = SliderList[current];

    const nextSlide = () => {
        setCurrent(prev =>
            prev === SliderList.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrent(prev =>
            prev === 0 ? SliderList.length - 1 : prev - 1
        );
    };

    return (
        <section className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-6 relative">

                {/* Slider */}
                <div className="grid md:grid-cols-2 items-center gap-10">

                    {/* Left */}
                    <div>
                        <h1 className="text-5xl font-bold text-gray-900">
                            {item["title"]}
                        </h1>

                        <p className="text-gray-600 mt-5 leading-7">
                            {item["des"]}
                        </p>

                        <h2 className="text-3xl font-bold text-indigo-600 mt-6">
                            {item['price']}
                        </h2>

                        <button
                            className="mt-8 px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                            Buy Now
                        </button>
                    </div>

                    {/* Right */}
                    <div className="flex justify-center">
                        <img
                            src={item['image']}
                            alt="Slider Image"
                            className="w-[420px] object-contain"
                        />
                    </div>

                </div>

                {/* Indicators */}
                <div className="flex justify-center mt-10 gap-3">
                    {SliderList.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-3 h-3 rounded-full transition ${
                                current === index
                                    ? "bg-indigo-600"
                                    : "bg-gray-300"
                            }`}
                        />
                    ))}
                </div>

                {/* Prev */}
                <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg hover:bg-indigo-600 hover:text-white transition"
                >
                    ❮
                </button>

                {/* Next */}
                <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg hover:bg-indigo-600 hover:text-white transition"
                >
                    ❯
                </button>

            </div>
        </section>
    );
};
export default Slider;