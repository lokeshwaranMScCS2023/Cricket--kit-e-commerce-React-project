import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Products from "./component/Products";
import Reviews from "./component/Reviews";
import Contact from "./component/Contact";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
