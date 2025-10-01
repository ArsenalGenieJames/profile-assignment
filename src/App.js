import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import SideBar from "./components/sidebar";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex flex-1">
            <SideBar />
            <Routes>
              <Route path="/" element={<ProductListing />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
