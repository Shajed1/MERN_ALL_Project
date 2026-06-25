
import AppNavbar from "./AppNavbar.jsx";
import Footer from "./Footer.jsx";

const MasterLayout = (props) => {
    return (
<>
<AppNavbar/>
    {props.children}
<Footer/>
</>
    );
};

export default MasterLayout;