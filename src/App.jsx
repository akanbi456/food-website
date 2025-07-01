import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Dishes from "./pages/Dishes";
import About from "./pages/About";
import { CartProvider } from "./content/CartContext";

import Order from './component/Order'
import Contact from "./pages/Contact";
import OrderDetail from "./component/OrderDetail";
import PaymentPage from "./component/Payment";
import Section from "./component/Section";
function App() {
  return (
    <>
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/dishes" element={<Dishes />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/order" element={<Order />} />
           <Route path="/order/:each" element={<OrderDetail />} />
           <Route path="/single/:each" element={<OrderDetail />} />
           <Route path="/payment" element={<PaymentPage />} />
           <Route path="/section" element={<Section />} />

        </Routes>
      </Router>
    </CartProvider>
    </>
  );
}

export default App;
