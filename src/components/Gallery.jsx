import React, { useState, useRef, useEffect } from 'react';
import p1 from '../assets/product1.jpeg';
import p2 from '../assets/product2.jpeg';
import p3 from '../assets/product3.jpeg';
import p4 from '../assets/product4.jpeg';
import p5 from '../assets/product5.jpeg';
import p6 from '../assets/product6.jpeg';

const photos = [
  { src: p1, label: 'Bakmi Ayam Original',  tag: 'Best Seller', span: 'lg:col-span-2 lg:row-span-2' },
  { src: p2, label: 'Bakmi Ayam Spesial',   tag: 'Spesial',     span: 'lg:col-span-1 lg:row-span-1' },
  { src: p3, label: 'Bakmi Kuah Baso',      tag: 'Favorit',     span: 'lg:col-span-1 lg:row-span-1' },
  { src: p4, label: 'Bakmi Goreng',         tag: 'Wok Hei',     span: 'lg:col-span-1 lg:row-span-2' },
  { src: p5, label: 'Pangsit Goreng',       tag: 'Renyah',      span: 'lg:col-span-1 lg:row-span-1' },
  { src: p6, label: 'Bakmi Komplit',        tag: 'Premium',     span: 'lg:col-span-1 lg:row-span-1' },
];

/* ── Tilt card on mouse move ── */
function TiltCard({ children, className, onClick }) {
  const ref  = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [shine, setShine] = useState({ x: 50, y: 50 });

  const onMove = (e) => {
    const el   = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx   = (e.clientX - rect.left) / rect.width  - 0.5;
    const cy   = (e.clientY - rect.top)  / rect.height - 0.5;
    setTilt({ x: cy * -8, y: cx * 8 });
    setShine({ x: (cx + 0.5) * 100, y: (cy + 0.5) * 100 });
  };

  const onLeave = () => {
    setTilt({ x: 0, y: 0 });
    setShine({ x: 50, y: 50 });
  };

  return (
    <div
      ref={ref}
      className={className}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: tilt.x === 0 ? 'transform 0.6s ease' : 'transform 0.1s ease',
        willChange: 'transform',
      }}
    >
      {/* Shine overlay */}
      <div
        className="absolute inset-0 z-20 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(212,160,23,0.12) 0%, transparent 60%)`,
        }}
      />
      {children}
    </div>
  );
}

/* ── Lightbox ── */
function Lightbox({ photos, index, onClose }) {
  const [current, setCurrent] = useState(index);
  const [animDir, setAnimDir] = useState(null); // 'left' | 'right'

  useEffect(() => {
    const fn = (e) => {
      if (e.key === 'Escape')     onClose();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft')  go(-1);
    };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const go = (dir) => {
    setAnimDir(dir > 0 ? 'right' : 'left');
    setTimeout(() => {
      setCurrent((c) => (c + dir + photos.length) % photos.length);
      setAnimDir(null);
    }, 200);
  };

  const p = photos[current];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center"
      onClick={onClose}>

      {/* Backdrop */}
      <div className="absolute inset-0 bg-brown-950/95 backdrop-blur-xl" />

      {/* Counter */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-brown-400 text-xs tracking-widest uppercase z-10">
        {current + 1} / {photos.length}
      </div>

      {/* Close */}
      <button onClick={onClose}
        className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full border border-white/10 hover:border-gold/50 flex items-center justify-center text-brown-300 hover:text-gold transition-all">
        ✕
      </button>

      {/* Prev */}
      <button onClick={(e) => { e.stopPropagation(); go(-1); }}
        className="absolute left-4 md:left-8 z-10 w-12 h-12 rounded-full bg-white/5 hover:bg-gold/20 border border-white/10 hover:border-gold/40 flex items-center justify-center text-white hover:text-gold transition-all text-lg">
        ←
      </button>

      {/* Image */}
      <div className="relative z-10 flex flex-col items-center gap-5 px-20"
        onClick={(e) => e.stopPropagation()}>
        <div className={`transition-all duration-200 ${
          animDir === 'right' ? '-translate-x-8 opacity-0' :
          animDir === 'left'  ? 'translate-x-8 opacity-0' : 'translate-x-0 opacity-100'
        }`}>
          <img src={p.src} alt={p.label}
            className="max-w-2xl w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl" />
        </div>

        {/* Caption */}
        <div className="text-center">
          <span className="text-gold text-[10px] font-semibold tracking-[0.3em] uppercase">{p.tag}</span>
          <p className="font-display text-white text-xl font-bold mt-1">{p.label}</p>
        </div>

        {/* Thumbnail strip */}
        <div className="flex gap-2 mt-2">
          {photos.map((ph, i) => (
            <button key={i} onClick={() => { setAnimDir(i > current ? 'right' : 'left'); setTimeout(() => { setCurrent(i); setAnimDir(null); }, 200); }}
              className={`w-12 h-12 rounded-xl overflow-hidden border-2 transition-all ${
                i === current ? 'border-gold scale-110' : 'border-transparent opacity-50 hover:opacity-80'
              }`}>
              <img src={ph.src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Next */}
      <button onClick={(e) => { e.stopPropagation(); go(1); }}
        className="absolute right-4 md:right-8 z-10 w-12 h-12 rounded-full bg-white/5 hover:bg-gold/20 border border-white/10 hover:border-gold/40 flex items-center justify-center text-white hover:text-gold transition-all text-lg">
        →
      </button>
    </div>
  );
}

/* ── Main Gallery ── */
export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState(null);

  return (
    <section id="gallery" className="py-28 bg-brown-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">Visual</p>
            <h2 className="font-display text-5xl md:text-6xl font-black text-white leading-tight">
              Galeri <span className="text-gold italic">Foto</span>
            </h2>
          </div>
          <p className="text-brown-400 text-sm max-w-xs leading-relaxed">
            Setiap hidangan adalah karya — dibuat dengan bahan terbaik dan penuh cinta.
          </p>
        </div>

        {/* ── Bento grid ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-auto lg:grid-rows-3 gap-3 lg:h-[680px]">
          {photos.map((p, i) => (
            <TiltCard
              key={i}
              onClick={() => setLightboxIdx(i)}
              className={`relative group rounded-2xl overflow-hidden cursor-pointer ${p.span}`}
            >
              {/* Photo */}
              <img src={p.src} alt={p.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ aspectRatio: i < 2 ? undefined : '1/1', height: '100%' }} />

              {/* Dark gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brown-950/90 via-brown-950/20 to-transparent transition-opacity duration-300" />

              {/* Tag pill */}
              <div className={`absolute top-4 left-4 bg-gold/90 backdrop-blur text-brown-950 text-[10px] font-black px-2.5 py-1 rounded-full tracking-widest uppercase transition-all duration-300 ${
                'opacity-100'
              }`}>
                {p.tag}
              </div>

              {/* Zoom icon */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0">
                <span className="text-white text-xs">⤢</span>
              </div>

              {/* Label at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-display text-white font-bold text-base leading-tight">{p.label}</p>
                <p className="text-brown-400 text-[11px] mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-wide">
                  Klik untuk perbesar
                </p>
              </div>

              {/* Gold border on hover */}
              <div className="absolute inset-0 rounded-2xl border border-gold/0 group-hover:border-gold/30 transition-all duration-300 pointer-events-none" />
            </TiltCard>
          ))}
        </div>

        {/* Bottom note */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
          <p className="text-brown-600 text-xs tracking-widest uppercase">Klik foto untuk memperbesar</p>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <Lightbox
          photos={photos}
          index={lightboxIdx}
          onClose={() => setLightboxIdx(null)}
        />
      )}
    </section>
  );
}
