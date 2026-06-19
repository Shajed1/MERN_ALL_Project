
import HomePage from './pages/readpage.jsx';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import CreatePage from "./pages/CreatePage.jsx";
import Update from "./components/Update.jsx";
import UpdatePage from "./pages/UpdatePage.jsx";

const App = () => {
  return (
           <BrowserRouter>
                <Routes>
                     <Route path="/" element={<HomePage/>} />
                    <Route path="/create" element={<CreatePage/>} />
                    <Route path="/update/:id" element={<UpdatePage/>} />


                </Routes>
           </BrowserRouter>
  );
};

export default App;