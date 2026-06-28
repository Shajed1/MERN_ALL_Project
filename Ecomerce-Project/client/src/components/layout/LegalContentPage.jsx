import FeaturesStore from "../../store/FeaturesStore.js";
import parse from 'html-react-parser';

const LegalContentPage = () => {
    const {LegalDetails}=FeaturesStore()
    return (
        <div>
            {
                parse(LegalDetails[0]['description'])
            }
        </div>
    );
};

export default LegalContentPage;