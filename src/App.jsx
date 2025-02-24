import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router";
import ProductDetails from "./pages/ProductDetails";
import { ToastContainer} from 'react-toastify';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails/>} />
      </Routes>
      <ToastContainer position="top-center"/>
    </>
  );
}

export default App;
