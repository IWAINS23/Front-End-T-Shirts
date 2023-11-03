import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css"; 

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div>
      <Link to="/" className="navbar-brand">
          <img
            src="/logo.png" 
            width="265"
            height="80"
            className="d-inline-block align-top"
            alt="Your Logo"
          />
        
        </Link>
      </div>
      <div className="container">
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                <ShoppingCart size={32} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  );
};
