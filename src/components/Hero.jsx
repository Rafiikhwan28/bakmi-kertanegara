import React from 'react';
import heroBg from '../assets/product1.jpeg';
import logo    from '../assets/logo.png';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">

      {/* Full-screen background */}
      <img src={heroBg} alt="hero" className="absolute inset-0 w-full h-full object-cover scale-105" />

      {/* Layered overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-brown-950/70 via-brown-950/50 to-brown-950" />
      <div className="absolute inset-0 bg-gradient-to-r from-brown-950/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fadeUp">
        <img src={logo} alt="logo" className="h-20 mx-auto mb-8 object-contain animate-float" />

        <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
          Autentik · Segar · Lezat
        </p>

        <h1 className="font-display text-6xl md:text-8xl font-black text-white leading-none mb-6">
          Bakmi<br />
          <span className="text-gold italic">Kertanegara</span>
        </h1>

        <p className="text-brown-300 text-lg md:text-xl font-light max-w-xl mx-auto leading-relaxed mb-10">
          Cita rasa bakmi autentik dengan kuah kaldu pilihan,<br className="hidden md:block" />
          diracik dari resep turun-temurun sejak generasi pertama.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a href="#menu"
            className="bg-gold hover:bg-gold-light text-brown-950 font-bold px-10 py-4 rounded-full transition-all hover:scale-105 shadow-2xl shadow-gold/30 text-sm tracking-wide">
            Lihat Menu
          </a>
          <a href="#gallery"
            className="border border-white/30 hover:border-gold text-white hover:text-gold font-medium px-10 py-4 rounded-full transition-all text-sm tracking-wide">
            Galeri Foto
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brown-400">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
