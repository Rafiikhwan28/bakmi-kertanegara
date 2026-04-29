import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.png';
import p1   from '../assets/Foto/Fotoinn128.jpg';
import p2   from '../assets/Foto/Fotoinn132.jpg';
import p4   from '../assets/Foto/Fotoinn137.jpg';
import p6   from '../assets/Foto/Fotoinn144.jpg';

const links = [
  { label: 'Home',    href: '#home',    num: '01', preview: p1, sub: 'Selamat datang' },
  { label: 'Menu',    href: '#menu',    num: '02', preview: p2, sub: 'Lihat semua pilihan' },
  { label: 'Gallery', href: '#gallery', num: '03', preview: p4, sub: 'Foto-foto lezat' },
  { label: 'Tentang', href: '#tentang', num: '04', preview: p6, sub: 'Cerita kami' },
];

// Split links: 2 left, 2 right (logo in center)
const leftLinks  = links.slice(0, 2);
const rightLinks = links.slice(2, 4);

function HamburgerIcon({ open }) {
  return (
    <div className="w-6 h-5 flex flex-col justify-between cursor-pointer">
      <span className={`block h-0.5 bg-current origin-left transition-all duration-300 ${open ? 'rotate-45 translate-y-px' : ''}`} />
      <span className={`block h-0.5 bg-current transition-all duration-200 ${open ? 'opacity-0 w-0' : 'w-3/4'}`} />
      <span className={`block h-0.5 bg-current origin-left transition-all duration-300 ${open ? '-rotate-45 -translate-y-px' : ''}`} />
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);
  const [hovered,  setHovered]  = useState(null);
  const [visible,  setVisible]  = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) { timerRef.current = setTimeout(() => setVisible(true), 30); }
    else { setVisible(false); }
    return () => clearTimeout(timerRef.current);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      {/* ── DESKTOP ── */}
      <div className="hidden md:flex fixed inset-x-0 top-0 z-50 justify-center pointer-events-none">
        <header
          className="pointer-events-auto will-change-transform"
          style={{
            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            overflow: 'visible',
            ...(scrolled ? {
              marginTop: '14px',
              borderRadius: '999px',
              background: 'rgba(255,255,255,0.92)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: '0 4px 24px rgba(147,51,234,0.10), 0 1px 4px rgba(0,0,0,0.06)',
              border: '1px solid rgba(196,132,252,0.25)',
              padding: '6px 20px',
            } : {
              marginTop: '16px',
              borderRadius: '0px',
              background: 'transparent',
              backdropFilter: 'none',
              WebkitBackdropFilter: 'none',
              boxShadow: 'none',
              border: 'none',
              padding: '0',
              width: '100%',
            })
          }}
        >
          <div
            className="flex items-center"
            style={{
              transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              overflow: 'visible',
              ...(scrolled ? {
                gap: '4px',
              } : {
                maxWidth: '80rem',
                margin: '0 auto',
                padding: '0 2rem',
                justifyContent: 'center',
                gap: '0',
              })
            }}
          >
            {/* Left links */}
            <nav className="flex items-center" style={{
              transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              gap: scrolled ? '2px' : '0.25rem',
              padding: scrolled ? '0' : '1.25rem 0',
            }}>
              {leftLinks.map(l => (
                <a key={l.label} href={l.href}
                  className="relative group whitespace-nowrap font-medium tracking-wide"
                  style={{
                    color: scrolled ? '#475569' : 'rgba(255,255,255,0.90)',
                    transition: 'color 0.3s ease, background 0.2s ease, padding 0.6s cubic-bezier(0.16,1,0.3,1)',
                    fontSize: '0.875rem',
                    padding: scrolled ? '0.5rem 1rem' : '0.35rem 0.75rem',
                    borderRadius: scrolled ? '999px' : '6px',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = scrolled ? '#8f0b47' : '#ffffff';
                    if (scrolled) e.currentTarget.style.background = 'rgba(168,85,247,0.07)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = scrolled ? '#475569' : 'rgba(255,255,255,0.90)';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  {l.label}
                  {!scrolled && (
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-white/60 rounded-full group-hover:w-full transition-all duration-300" />
                  )}
                </a>
              ))}
            </nav>

            {/* Center — Logo bubble menonjol */}
            <a href="#home"
              className="flex items-center justify-center shrink-0 relative"
              style={{
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                margin: '0 12px',
                width:  scrolled ? '72px' : '96px',
                height: scrolled ? '72px' : '96px',
                borderRadius: '50%',
                background: scrolled
                  ? 'rgba(255,255,255,1)'
                  : 'rgba(0,0,0,0.30)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                marginTop:    scrolled ? '-14px' : '-22px',
                marginBottom: scrolled ? '-14px' : '-22px',
                zIndex: 10,
              }}
            >
              <img
                src={logo}
                alt="Bakmi Kertanegara"
                className="object-contain"
                style={{
                  transition: 'width 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  width:  scrolled ? '48px' : '68px',
                  height: scrolled ? '48px' : '68px',
                }}
              />
            </a>

            {/* Right links — no button */}
            <div className="flex items-center" style={{
              transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              gap: scrolled ? '2px' : '0.25rem',
              padding: scrolled ? '0' : '1.25rem 0',
            }}>
              {rightLinks.map(l => (
                <a key={l.label} href={l.href}
                  className="relative group whitespace-nowrap font-medium tracking-wide"
                  style={{
                    color: scrolled ? '#475569' : 'rgba(255,255,255,0.90)',
                    transition: 'color 0.3s ease, background 0.2s ease, padding 0.6s cubic-bezier(0.16,1,0.3,1)',
                    fontSize: '0.875rem',
                    padding: scrolled ? '0.5rem 1rem' : '0.35rem 0.75rem',
                    borderRadius: scrolled ? '999px' : '6px',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = scrolled ? '#8f0b47' : '#ffffff';
                    if (scrolled) e.currentTarget.style.background = 'rgba(168,85,247,0.07)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = scrolled ? '#475569' : 'rgba(255,255,255,0.90)';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  {l.label}
                  {!scrolled && (
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-white/60 rounded-full group-hover:w-full transition-all duration-300" />
                  )}
                </a>
              ))}
            </div>
          </div>
        </header>
      </div>

      {/* ── MOBILE ── */}
      <div className="md:hidden fixed inset-x-0 top-0 z-50">

        {/* Logo besar di tengah — hanya saat belum scroll */}
        <div
          className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-auto"
          style={{
            top: scrolled || open ? '-100px' : '48px',
            opacity: scrolled || open ? 0 : 1,
            transition: 'top 0.5s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease',
            zIndex: 60,
          }}
        >
          <div style={{
            background: 'rgba(0,0,0,0.25)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderRadius: '50%',
            width: '80px',
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1.5px solid rgba(255,255,255,0.2)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
          }}>
            <img src={logo} alt="Bakmi Kertanegara"
              className="object-contain"
              style={{ width: '58px', height: '58px' }} />
          </div>
        </div>

        <header className={`transition-all duration-500 ${
          scrolled && !open ? 'bg-white/95 backdrop-blur-md shadow-soft' : 'bg-transparent'
        }`}>
          <div className="flex items-center justify-between px-5 py-3.5">

            {/* Logo kecil di navbar — hanya saat scroll */}
            <a href="#home" className="relative z-50"
              style={{
                opacity: scrolled || open ? 1 : 0,
                transform: scrolled || open ? 'translateX(0)' : 'translateX(-8px)',
                transition: 'opacity 0.4s ease, transform 0.4s cubic-bezier(0.16,1,0.3,1)',
                pointerEvents: scrolled || open ? 'auto' : 'none',
              }}>
              <img src={logo} alt="Bakmi Kertanegara"
                className="object-contain"
                style={{ height: '36px' }} />
            </a>

            {/* Spacer saat belum scroll agar hamburger tetap di kanan */}
            {!scrolled && !open && <div className="flex-1" />}

            <button
              className={`relative z-50 transition-colors duration-300 ${open ? 'text-accent-600' : scrolled ? 'text-slate-700' : 'text-white'}`}
              onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
              <HamburgerIcon open={open} />
            </button>
          </div>
        </header>
      </div>

      {/* Full-screen mobile overlay */}
      <div className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ${
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-white" />

        {/* Right photo panel */}
        <div className={`absolute right-0 top-0 bottom-0 w-2/5 overflow-hidden transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          {links.map((l, i) => (
            <img key={i} src={l.preview} alt=""
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered === i ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`} />
          ))}
          <img src={p6} alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered === null ? 'opacity-100' : 'opacity-0'}`} />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
        </div>

        {/* Accent vertical line */}
        <div className={`absolute left-6 top-24 bottom-24 w-px transition-all duration-700 delay-200 ${
          visible ? 'bg-gradient-to-b from-transparent via-accent-400/60 to-transparent opacity-100' : 'opacity-0'
        }`} />

        <nav className="absolute inset-0 flex flex-col justify-center px-10 pt-20 pb-10">
          <div className="space-y-1">
            {links.map((l, i) => (
              <a key={l.label} href={l.href} onClick={close}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onTouchStart={() => setHovered(i)}
                className={`group flex items-center gap-5 py-4 transition-all duration-500 ${
                  visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: visible ? `${i * 80 + 100}ms` : '0ms' }}>
                <span className={`font-display text-xs font-bold tracking-widest transition-colors duration-300 w-6 ${hovered === i ? 'text-accent-500' : 'text-slate-300'}`}>
                  {l.num}
                </span>
                <span className={`h-px bg-accent-500 transition-all duration-300 ${hovered === i ? 'w-8 opacity-100' : 'w-0 opacity-0'}`} />
                <div className="flex flex-col">
                  <span className={`font-display font-black leading-none transition-all duration-300 ${
                    hovered === i ? 'text-accent-600 text-5xl' : 'text-slate-800 text-4xl'
                  }`}>{l.label}</span>
                  <span className={`text-xs tracking-widest uppercase transition-all duration-300 mt-1 ${
                    hovered === i ? 'text-accent-400 opacity-100 translate-x-0' : 'text-slate-400 opacity-60 -translate-x-2'
                  }`}>{l.sub}</span>
                </div>
                <span className={`ml-auto text-accent-500 text-xl transition-all duration-300 ${hovered === i ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>→</span>
              </a>
            ))}
          </div>

          <div className={`mt-auto pt-8 border-t border-slate-100 flex items-center justify-between transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: visible ? '600ms' : '0ms' }}>
            <div>
              <p className="text-slate-400 text-xs">Jam Buka</p>
              <p className="text-slate-700 text-sm font-medium mt-0.5">10.00 – 22.00 WIB</p>
            </div>
            <a href="https://wa.me/628211046212" target="_blank" rel="noreferrer"
              className="flex items-center gap-2 bg-accent-600 text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-glow">
              <span>💬</span> WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
