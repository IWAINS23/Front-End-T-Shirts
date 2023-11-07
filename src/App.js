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

const wrapper = document.getElementById("tiles");

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

export default App;


