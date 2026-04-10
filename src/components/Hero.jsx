import React from 'react';
import logo from '../assets/logo.png';
import product1 from '../assets/product1.jpeg';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <img src={logo} alt="Bakmi Kertanegara" className="hero-logo" />
        <h1 className="hero-title">Cita Rasa Autentik<br /><span>Sejak Generasi Pertama</span></h1>
        <p className="hero-subtitle">
          Bakmi segar dengan kuah kaldu pilihan, disajikan hangat untuk keluarga Anda.
        </p>
        <div className="hero-actions">
          <a href="#menu" className="btn-primary">Lihat Menu</a>
          <a href="#contact" className="btn-secondary">Pesan Sekarang</a>
        </div>
      </div>
      <div className="hero-image">
        <img src={product1} alt="Bakmi Kertanegara" />
      </div>
    </section>
  );
};

export default Hero;
