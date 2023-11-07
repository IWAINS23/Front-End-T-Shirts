import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header-section">
      <div className="container-lg">
        <div className="header-bg">
          <img
            src="https://images.unsplash.com/photo-1529720317453-c8da503f2051?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Unsplash Background"
            className="img-fluid header-image"
          />
          <div className="header-content">
            <h1 className="display-3 text-white fw-bold">Code & Threads</h1>
            <p className="lead text-white">Dive into a curated collection where fashion meets function. At the intersection of cutting-edge style and innovative coding, we bring a unique shopping experience for those who code with elegance and dress with precision.</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
