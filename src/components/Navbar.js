import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">My App</div>
      <div className={`navbar-links ${isMobile ? 'active' : ''}`}>
        <li><Link to="/" onClick={toggleMobileMenu}>Home</Link></li>
        <li><Link to="/about" onClick={toggleMobileMenu}>About</Link></li>
        <li><Link to="/contact" onClick={toggleMobileMenu}>Contact</Link></li>
      </div>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobile ? '✖' : '☰'} {/* Icon for mobile menu */}
      </div>
    </nav>
  );
};

export default Navbar;
