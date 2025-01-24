import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import UpdateProduct from "./components/UpdateProduct";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<><ProductForm /><hr /><ProductList /></>} />
                    <Route path="/products/:id" element={<ProductDetails />} />
                    <Route path="/edit/:id" element={<UpdateProduct />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

