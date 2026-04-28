import React, { useEffect, useState } from 'react';
import p1 from '../assets/Foto/Fotoinn141.jpg';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const reveal = (delay = 0) => ({
    opacity:    loaded ? 1 : 0,
    transform:  loaded ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
  });

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

      {/* Background photo */}
      <img src={p1} alt="Bakmi Kertanegara"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{
          transition: 'transform 8s ease-out',
          transform: loaded ? 'scale(1)' : 'scale(1.06)',
        }}
      />

      {/* Overlay — tipis agar foto terlihat jelas */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/15" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-5" style={reveal(0)}>
          <div className="h-px w-10 bg-white/60" />
          <span className="text-white text-[10px] font-bold tracking-[0.5em] uppercase">
            Since 2026 · Depok
          </span>
          <div className="h-px w-10 bg-white/60" />
        </div>

        <h1 className="font-display mb-4" style={reveal(100)}>
          <span className="block text-white font-bold"
            style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', letterSpacing: '-0.02em', lineHeight: 1.0, textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}>
            Bakmi
          </span>
          <span className="block font-bold italic"
            style={{
              fontSize: 'clamp(4rem, 10vw, 8rem)',
              letterSpacing: '-0.02em',
              lineHeight: 1.0,
              color: '#c084fc',
              textShadow: '0 2px 20px rgba(0,0,0,0.4)',
            }}>
            Kertanegara
          </span>
        </h1>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-5" style={reveal(180)}>
          <div className="h-px w-12 bg-white/35" />
          <span className="text-white/65 text-[9px] tracking-[0.45em] uppercase font-medium">
            Authentic Noodle House
          </span>
          <div className="h-px w-12 bg-white/35" />
        </div>

        {/* Description */}
        <p className="text-white/85 text-sm md:text-base leading-relaxed mb-8 max-w-sm font-light"
          style={reveal(250)}>
          "Kadang, kebahagiaan itu sesederhana duduk tenang dan menikmati semangkuk bakmie hangat."
        </p>

        {/* CTA */}
        <div className="flex items-center gap-3 flex-wrap justify-center mb-10" style={reveal(320)}>
          <a href="#menu"
            className="bg-white/20 hover:bg-white/30 backdrop-blur border border-white/40 hover:border-white/70 text-white font-semibold px-8 py-3 rounded-full text-sm tracking-wide transition-all hover:scale-105 shadow-md">
            Lihat Menu
          </a>
          <a href="#tentang"
            className="text-white/70 hover:text-white font-medium text-sm transition-colors flex items-center gap-2 group">
            <span className="w-7 h-7 rounded-full border border-white/30 group-hover:border-white/60 flex items-center justify-center text-[10px] transition-all">▶</span>
            Tentang Kami
          </a>
        </div>


      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={reveal(550)}>
        <span className="text-white/40 text-[8px] tracking-[0.4em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}
