import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";
import Category from "../pages/Category";

const MainRoutes = () => {
    return (
   <BrowserRouter>
   <NavBarComponent />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/category/:categoryId" element={<Category />} />
   </Routes>
   </BrowserRouter>
    );
};
export default MainRoutes;