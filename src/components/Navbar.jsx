import React, { useState } from 'react';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Bakmi Kertanegara Logo" className="navbar-logo" />
      </div>
      <button className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        ☰
      </button>
      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#about">Tentang Kami</a></li>
        <li><a href="#contact">Kontak</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
