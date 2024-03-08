import { Route, Routes } from "react-router-dom";
import CreateProductForm from "../CreactPost";
import ProductAddedConfirmation from "../ProductAddedConfirmation";
import ProductList from "../ProductList";
import List from "../List";

const RouterApp: React.FC = () => {
    return (
        <Routes>
            <Route path="/CreateProductForm" element={<CreateProductForm />} />
            <Route path="/ProductAddedConfirmation" element={<ProductAddedConfirmation />} />
            <Route path="/List" element={<List />} />

            
            </Routes>
    );
  };


  export default RouterApp;