import React, { useState, useEffect, useRef } from 'react';
import logo    from '../assets/logo.png';
import p1      from '../assets/product1.jpeg';
import p2      from '../assets/product2.jpeg';
import p4      from '../assets/product4.jpeg';
import p6      from '../assets/product6.jpeg';

const links = [
  { label: 'Home',    href: '#home',    num: '01', preview: p1, sub: 'Selamat datang' },
  { label: 'Menu',    href: '#menu',    num: '02', preview: p2, sub: 'Lihat semua pilihan' },
  { label: 'Gallery', href: '#gallery', num: '03', preview: p4, sub: 'Foto-foto lezat' },
  { label: 'Tentang', href: '#tentang', num: '04', preview: p6, sub: 'Cerita kami' },
  { label: 'Kontak',  href: '#kontak',  num: '05', preview: p1, sub: 'Hubungi kami' },
];

/* ── Hamburger icon: 3 bars → X morph ── */
function HamburgerIcon({ open }) {
  return (
    <div className="w-6 h-5 flex flex-col justify-between cursor-pointer">
      <span className={`block h-0.5 bg-current origin-left transition-all duration-300 ${open ? 'rotate-45 translate-y-px w-full' : 'w-full'}`} />
      <span className={`block h-0.5 bg-current transition-all duration-200 ${open ? 'opacity-0 w-0' : 'w-3/4'}`} />
      <span className={`block h-0.5 bg-current origin-left transition-all duration-300 ${open ? '-rotate-45 -translate-y-px w-full' : 'w-full'}`} />
    </div>
  );
}

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [open,      setOpen]      = useState(false);
  const [hovered,   setHovered]   = useState(null);
  const [visible,   setVisible]   = useState(false); // controls stagger
  const timerRef = useRef(null);

  /* scroll detection */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  /* lock body scroll when open */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) {
      // slight delay so CSS transition starts after mount
      timerRef.current = setTimeout(() => setVisible(true), 30);
    } else {
      setVisible(false);
    }
    return () => clearTimeout(timerRef.current);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      {/* ── Top bar ── */}
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled && !open
          ? 'bg-brown-950/90 backdrop-blur-md border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <img src={logo} alt="Bakmi Kertanegara" className="h-10 object-contain relative z-50" />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a key={l.label} href={l.href}
                className="text-brown-300 hover:text-gold text-sm font-medium tracking-wide transition-colors duration-200">
                {l.label}
              </a>
            ))}
          </nav>

          <a href="#kontak"
            className="hidden md:inline-flex items-center gap-2 border border-gold/50 hover:border-gold text-gold text-sm font-semibold px-5 py-2 rounded-full transition-all hover:bg-gold/10">
            Hubungi Kami
          </a>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden relative z-50 transition-colors duration-300 ${open ? 'text-gold' : 'text-brown-200'}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <HamburgerIcon open={open} />
          </button>
        </div>
      </header>

      {/* ── Full-screen overlay ── */}
      <div className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ${
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>

        {/* Background layers */}
        <div className="absolute inset-0 bg-brown-950" />

        {/* Animated food preview image (right side) */}
        <div className={`absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden transition-all duration-700 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}>
          {links.map((l, i) => (
            <img key={i} src={l.preview} alt=""
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                hovered === i ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            />
          ))}
          {/* Default image when nothing hovered */}
          <img src={p6} alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              hovered === null ? 'opacity-100' : 'opacity-0'
            }`}
          />
          {/* Gradient mask over image */}
          <div className="absolute inset-0 bg-gradient-to-r from-brown-950 via-brown-950/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-brown-950/80 via-transparent to-brown-950/40" />
        </div>

        {/* Gold vertical line accent */}
        <div className={`absolute left-6 top-24 bottom-24 w-px transition-all duration-700 delay-200 ${
          visible ? 'bg-gradient-to-b from-transparent via-gold/40 to-transparent opacity-100' : 'opacity-0'
        }`} />

        {/* Nav links — staggered */}
        <nav className="absolute inset-0 flex flex-col justify-center px-10 pt-20 pb-10">
          <div className="space-y-1">
            {links.map((l, i) => (
              <a
                key={l.label}
                href={l.href}
                onClick={close}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onTouchStart={() => setHovered(i)}
                className={`group flex items-center gap-5 py-4 transition-all duration-500 ${
                  visible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: visible ? `${i * 80 + 100}ms` : '0ms' }}
              >
                {/* Number */}
                <span className={`font-display text-xs font-bold tracking-widest transition-colors duration-300 w-6 ${
                  hovered === i ? 'text-gold' : 'text-brown-700'
                }`}>
                  {l.num}
                </span>

                {/* Animated dash */}
                <span className={`h-px bg-gold transition-all duration-300 ${
                  hovered === i ? 'w-8 opacity-100' : 'w-0 opacity-0'
                }`} />

                {/* Label */}
                <div className="flex flex-col">
                  <span className={`font-display font-black leading-none transition-all duration-300 ${
                    hovered === i
                      ? 'text-gold text-5xl'
                      : 'text-white text-4xl'
                  }`}>
                    {l.label}
                  </span>
                  <span className={`text-xs tracking-widest uppercase transition-all duration-300 mt-1 ${
                    hovered === i ? 'text-gold/70 opacity-100 translate-x-0' : 'text-brown-600 opacity-60 -translate-x-2'
                  }`}>
                    {l.sub}
                  </span>
                </div>

                {/* Arrow */}
                <span className={`ml-auto text-gold text-xl transition-all duration-300 ${
                  hovered === i ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`}>
                  →
                </span>
              </a>
            ))}
          </div>

          {/* Bottom info */}
          <div className={`mt-auto pt-8 border-t border-white/5 flex items-center justify-between transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: visible ? '600ms' : '0ms' }}>
            <div>
              <p className="text-brown-500 text-xs">Jam Buka</p>
              <p className="text-brown-300 text-sm font-medium mt-0.5">10.00 – 22.00 WIB</p>
            </div>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer"
              className="flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold text-xs font-semibold px-4 py-2.5 rounded-full hover:bg-gold/20 transition-colors">
              <span>💬</span> WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
