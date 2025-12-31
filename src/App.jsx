import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartPage from "./components/CartPage";

export default function App() {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <BrowserRouter>
      <header className="navbar">
        <h2>Paradise Nursery</h2>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart ({totalQuantity})</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}
