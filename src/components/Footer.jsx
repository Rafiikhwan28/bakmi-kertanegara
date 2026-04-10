import React from 'react';
import logo from '../assets/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-top">
        <div className="footer-brand">
          <img src={logo} alt="Bakmi Kertanegara" className="footer-logo" />
          <p>Cita rasa autentik bakmi yang menghangatkan hati sejak generasi pertama.</p>
        </div>
        <div className="footer-links">
          <h4>Navigasi</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">Tentang Kami</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Kontak</h4>
          <p>Jl. Kertanegara No. 1, Jakarta</p>
          <p>+62 812-3456-7890</p>
          <p>info@bakmikertanegara.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Bakmi Kertanegara. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
