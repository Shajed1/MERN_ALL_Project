
import AppNavbar from "./AppNavbar.jsx";
import Footer from "./Footer.jsx";
import {Toaster} from "react-hot-toast";
const MasterLayout = (props) => {
    return (
<>
<AppNavbar/>
    {props.children}
    <Toaster
        position="bottom-center"
        reverseOrder={false}
        gutter={10}
        toastOptions={{
            duration: 3000,
            style: {background: "#1f2937", color: "#fff", borderRadius: "12px", padding: "16px",},
            success: {
                iconTheme: {primary: "#22c55e", secondary: "#fff",
                },},
            error: {
                iconTheme: {primary: "#ef4444", secondary: "#fff",
                },},}}
    />
<Footer/>
</>
    );
};

export default MasterLayout;