import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/header/header";
import Region from "./Components/region/region";
import Hero from "./Components/home/hero";
import Footer from "./Components/foother/footer";
import AboutUs from "./Components/about-us/nosotros";
import Contact from "./Components/contacto/contacto";
import Productos from "./Components/productos/productos";
import Login from "./Components/login/login";
import Perfil from "./Components/perfil/perfil";
import Register from "./Components/register/register";
import Cart from "./Components/cart/cart";
import ScrollToTop from "./Components/scroll/scroll";

function App() {
  return (
    <>
      <BrowserRouter>
        <Region />
        <Header />

        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Productos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element = {<Perfil />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <Footer />

      </BrowserRouter>
    </>
  );
}

export default App;
