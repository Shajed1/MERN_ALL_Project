

import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProductByBrand from "./pages/ProductByBrand.jsx";
import ProductByCategory from "./pages/ProductByCategory.jsx";
import ProductByKeyword from "./pages/ProductByKeyword.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import LegalContentPage from "./components/layout/LegalContentPage.jsx";

import LoginPage from "./pages/LoginPage.jsx";
import OtpPage from "./pages/OtpPage.jsx";

const App = () => {




  return (
           <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/by-brand/:id" element={<ProductByBrand/>} />
                    <Route path="/by-category/:id" element={<ProductByCategory/>} />
                    <Route path="/by-keyword/:keyword" element={<ProductByKeyword/>} />
                    <Route path="/details/:id" element={<ProductDetails/>} />
                    <Route path="/about" element={<LegalContentPage/>} />
                    <Route path="/contact" element={<LegalContentPage/>} />
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/otpverify/:otp" element={<OtpPage/>}/>
                </Routes>
           </BrowserRouter>
  );



};

export default App;