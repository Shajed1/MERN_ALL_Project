import MasterLayout from "../components/layout/MasterLayout.jsx";
import SlidersSkeleton from "../skeleton/Sliders-Skeleton.jsx";
import FeturesSkeleton from "../skeleton/Fetures-Skeleton.jsx";
import CategorySkeleton from "../skeleton/Category-Skeleton.jsx";
import ProductsSkeleton from "../skeleton/Products-Skeleton.jsx";
import BrandsSkeleton from "../skeleton/Brands-Skeleton.jsx";


const HomePage = () => {
    return (
<>
        <MasterLayout>
            <SlidersSkeleton/>
            <FeturesSkeleton/>
            <CategorySkeleton/>
            <ProductsSkeleton/>
            <BrandsSkeleton/>

        </MasterLayout>

</>
    );
};

export default HomePage;