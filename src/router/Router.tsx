import { Route, Routes } from "react-router-dom";
import CreateProductForm from "../CreactPost";

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<CreateProductForm />} />
            <Route path="/about" element={<About />} />
            </Routes>
    );
  };