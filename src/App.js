<<<<<<< Updated upstream
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Shop } from './pages/shop/shop';
import { Contact } from './pages/contact';
import { Cart } from './pages/cart/cart';
import { ShopContextProvider } from './context/shop-context';
import PaymentIcons from './components/icons/icons';
import Header from './components/Header'; 
=======
import "./App.css";
import "./pages/shop/shop.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import anime from 'animejs/lib/anime.es.js';

const wrapper = document.getElementById("tiles");
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Header /> {}
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <PaymentIcons />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

// anime({
//   targets: '.background-grid',
//   scale: [
//     {value: .1, easing: 'easeOutSine', duration: 500},
//     {value: 1, easing: 'easeInOutQuad', duration: 1200}
//   ],
//   delay: anime.stagger(200, {grid: [14, 5], from: 'center'})
// });

// anime({
//   targets: '.addToCartBttn',
//   translateX: 250,
//   scale: 2,
//   rotate: '1turn'
// });

export default App;


