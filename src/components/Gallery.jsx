import React, { useState, useRef, useCallback } from 'react';
import useReveal from '../hooks/useReveal';
import p1    from '../assets/Foto/Fotoinn128.jpg';
import p2    from '../assets/Foto/Fotoinn132.jpg';
import p3    from '../assets/Foto/Fotoinn135.jpg';
import p4    from '../assets/Foto/Fotoinn137.jpg';
import p5    from '../assets/Foto/Fotoinn141.jpg';
import p6    from '../assets/Foto/Fotoinn144.jpg';
import p7    from '../assets/Foto/Fotoinn149.jpg';
import p8    from '../assets/Foto/Fotoinn151.jpg';
import p9    from '../assets/Foto/Fotoinn156.jpg';
import p10   from '../assets/Foto/Fotoinn157.jpg';
import steak from '../assets/Foto/steakLadahitam.jpeg';

const photos = [
  { src: p1,    label: 'Bakmi Ayam Kertanegara',     tag: 'Best Seller', span: 'lg:col-span-2 lg:row-span-2' },
  { src: steak, label: 'Bakmi Steak Lada Hitam',     tag: 'Favorit',     span: 'lg:col-span-1 lg:row-span-1' },
  { src: p2,    label: 'Bakmi Ayam Jamur',           tag: 'Best Seller', span: 'lg:col-span-1 lg:row-span-1' },
  { src: p3,    label: 'Bakmi Ayam Lada Hitam',      tag: 'Menu Utama',  span: 'lg:col-span-1 lg:row-span-2' },
  { src: p4,    label: 'Bakmi Ayam Steak Lada Hitam',tag: 'Best Seller', span: 'lg:col-span-1 lg:row-span-1' },
  { src: p5,    label: 'Pangsit Goreng / Rebus',     tag: 'Side Dish',   span: 'lg:col-span-1 lg:row-span-1' },
  { src: p6,    label: 'Paket Bakmi Ayam',           tag: 'Paket',       span: 'lg:col-span-1 lg:row-span-1' },
  { src: p7,    label: 'Paket Bakmi Ayam Jamur',     tag: 'Paket',       span: 'lg:col-span-1 lg:row-span-1' },
  { src: p8,    label: 'Paket Bakmi Lada Hitam',     tag: 'Paket',       span: 'lg:col-span-1 lg:row-span-1' },
  { src: p9,    label: 'Paket Romantis Berdua',      tag: 'Best Seller', span: 'lg:col-span-1 lg:row-span-1' },
  { src: p10,   label: 'Paket Keluarga',             tag: 'Paket',       span: 'lg:col-span-1 lg:row-span-1' },
];

/* ── Infinite focus carousel untuk mobile ── */
function MobileCarousel({ photos, onOpen }) {
  const [active, setActive]   = useState(0);
  const [dir,    setDir]      = useState(0); // -1 = prev, 1 = next
  const [anim,   setAnim]     = useState(false);
  const startX  = useRef(0);
  const startY  = useRef(0);
  const isDrag  = useRef(false);

  const go = useCallback((direction) => {
    setDir(direction);
    setAnim(true);
    setTimeout(() => {
      setActive(a => (a + direction + photos.length) % photos.length);
      setAnim(false);
    }, 320);
  }, [photos.length]);

  const prev = useCallback(() => go(-1), [go]);
  const next = useCallback(() => go(1),  [go]);

  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
    isDrag.current = false;
  };
  const onTouchMove = (e) => {
    const dx = Math.abs(e.touches[0].clientX - startX.current);
    const dy = Math.abs(e.touches[0].clientY - startY.current);
    if (dx > dy && dx > 10) isDrag.current = true;
  };
  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - startX.current;
    if (isDrag.current && Math.abs(dx) > 45) {
      // Geser kanan = foto sebelumnya (prev), geser kiri = foto berikutnya (next)
      dx > 0 ? prev() : next();
    }
    // Tap (buka lightbox) hanya jika TIDAK ada drag sama sekali
    // isDrag tetap false = jari tidak bergerak horizontal
  };

  const indices = [
    (active - 1 + photos.length) % photos.length,
    active,
    (active + 1) % photos.length,
  ];

  return (
    <div
      className="relative w-full overflow-hidden py-4 select-none"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Cards row */}
      <div className="flex items-center justify-center gap-3 px-4">
        {indices.map((idx, pos) => {
          const isActive = pos === 1;
          const p = photos[idx];

          /* Slide direction: active card slides in from opposite of swipe */
          const slideX = anim && isActive
            ? dir > 0 ? '100%' : '-100%'   // entering from right or left
            : '0%';

          return (
            <div
              key={`${idx}-${pos}`}
              className="relative rounded-2xl overflow-hidden shrink-0"
              onClick={() => { if (isActive && !isDrag.current) onOpen(idx); }}
              style={{
                width:    isActive ? '78vw' : '24vw',
                maxWidth: isActive ? '320px' : '96px',
                height:   isActive ? '260px' : '160px',
                opacity:  anim && isActive ? 0 : isActive ? 1 : 0.65,
                filter:   isActive ? 'none' : 'blur(1px)',
                transform: isActive
                  ? `scale(1) translateX(${slideX})`
                  : 'scale(0.93)',
                transition: anim && isActive
                  ? 'opacity 0.32s ease, transform 0.32s cubic-bezier(0.16,1,0.3,1)'
                  : 'all 0.45s cubic-bezier(0.16,1,0.3,1)',
                boxShadow: isActive ? '0 20px 50px rgba(0,0,0,0.25)' : '0 4px 12px rgba(0,0,0,0.1)',
              }}
            >
              <img src={p.src} alt="" className="w-full h-full object-cover" />
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              )}
            </div>
          );
        })}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-1.5 mt-4">
        {photos.map((_, i) => (
          <button key={i} onClick={() => { const d = i > active ? 1 : -1; setActive(i); setDir(d); }}
            className="transition-all duration-300 rounded-full"
            style={{
              width:  i === active ? '20px' : '6px',
              height: '6px',
              background: i === active ? '#8f0b47' : '#e2e8f0',
            }}
          />
        ))}
      </div>
    </div>
  );
}

function TiltCard({ children, className, onClick, style }) {
  const ref = useRef(null);
  const [tilt,  setTilt]  = useState({ x:0, y:0 });
  const [shine, setShine] = useState({ x:50, y:50 });

  const onMove = (e) => {
    const el = ref.current; if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = (e.clientX - rect.left) / rect.width  - 0.5;
    const cy = (e.clientY - rect.top)  / rect.height - 0.5;
    setTilt({ x: cy * -6, y: cx * 6 });
    setShine({ x: (cx + 0.5) * 100, y: (cy + 0.5) * 100 });
  };
  const onLeave = () => { setTilt({ x:0, y:0 }); setShine({ x:50, y:50 }); };

  return (
    <div ref={ref} className={className} onClick={onClick} onMouseMove={onMove} onMouseLeave={onLeave}
      style={{
        ...style,
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: tilt.x === 0 ? 'transform 0.6s ease, opacity 0.8s cubic-bezier(0.16,1,0.3,1)' : 'transform 0.1s ease',
        willChange: 'transform',
      }}>
      <div className="absolute inset-0 z-20 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(168,85,247,0.15) 0%, transparent 60%)` }} />
      {children}
    </div>
  );
}

function Lightbox({ photos, index, onClose }) {
  const [current, setCurrent] = useState(index);
  const [animDir, setAnimDir] = useState(null);

  const go = (dir) => {
    setAnimDir(dir > 0 ? 'right' : 'left');
    setTimeout(() => { setCurrent(c => (c + dir + photos.length) % photos.length); setAnimDir(null); }, 200);
  };

  const p = photos[current];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center" onClick={onClose}>
      <div className="absolute inset-0 bg-white/95 backdrop-blur-xl" />

      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-slate-400 text-xs tracking-widest uppercase z-10">
        {current + 1} / {photos.length}
      </div>
      <button onClick={onClose}
        className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-slate-100 hover:bg-accent-100 flex items-center justify-center text-slate-400 hover:text-accent-600 transition-all">
        ✕
      </button>
      <button onClick={(e) => { e.stopPropagation(); go(-1); }}
        className="absolute left-4 md:left-8 z-10 w-12 h-12 rounded-full bg-white border border-slate-200 hover:border-accent-300 hover:bg-accent-50 flex items-center justify-center text-slate-600 hover:text-accent-600 transition-all shadow-soft text-lg">
        ←
      </button>

      <div className="relative z-10 flex flex-col items-center gap-5 px-20" onClick={(e) => e.stopPropagation()}>
        <div className={`transition-all duration-200 ${
          animDir === 'right' ? '-translate-x-8 opacity-0' :
          animDir === 'left'  ? 'translate-x-8 opacity-0' : 'translate-x-0 opacity-100'
        }`}>
          <img src={p.src} alt={p.label}
            className="max-w-2xl w-full max-h-[65vh] object-contain rounded-3xl shadow-card" />
        </div>
        <div className="text-center">
          <span className="bg-accent-100 text-accent-700 text-[10px] font-semibold tracking-[0.3em] uppercase px-3 py-1 rounded-full">{p.tag}</span>
        </div>
        <div className="flex gap-2 mt-1">
          {photos.map((ph, i) => (
            <button key={i}
              onClick={() => { setAnimDir(i > current ? 'right' : 'left'); setTimeout(() => { setCurrent(i); setAnimDir(null); }, 200); }}
              className={`w-12 h-12 rounded-xl overflow-hidden border-2 transition-all ${
                i === current ? 'border-accent-500 scale-110 shadow-glow' : 'border-transparent opacity-50 hover:opacity-80'
              }`}>
              <img src={ph.src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      <button onClick={(e) => { e.stopPropagation(); go(1); }}
        className="absolute right-4 md:right-8 z-10 w-12 h-12 rounded-full bg-white border border-slate-200 hover:border-accent-300 hover:bg-accent-50 flex items-center justify-center text-slate-600 hover:text-accent-600 transition-all shadow-soft text-lg">
        →
      </button>
    </div>
  );
}

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const [headerRef, headerVisible] = useReveal(0.1);
  const [gridRef,   gridVisible]   = useReveal(0.05);

  return (
    <section id="gallery" className="py-14 md:py-28 bg-gradient-to-b from-white to-accent-50 overflow-hidden" style={{ scrollMarginTop: '64px' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div ref={headerRef} className={`flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 reveal ${headerVisible ? 'visible' : ''}`}>
          <div>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
              Galeri <span className="text-accent-600 italic">Foto</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
            Setiap hidangan adalah karya — dibuat dengan bahan terbaik dan penuh cinta.
          </p>
        </div>

        {/* ── MOBILE: infinite focus carousel ── */}
        <div className="lg:hidden -mx-4">
          <MobileCarousel photos={photos} onOpen={(i) => setLightboxIdx(i)} />
        </div>

        {/* ── DESKTOP: bento grid ── */}
        <div ref={gridRef} className="hidden lg:grid grid-cols-4 gap-3 h-[680px]">
          {photos.map((p, i) => (
            <TiltCard key={i} onClick={() => setLightboxIdx(i)}
              className={`relative group rounded-2xl overflow-hidden cursor-pointer ${p.span} reveal ${gridVisible ? 'visible' : ''}`}
              style={{ transitionDelay: gridVisible ? `${i * 80}ms` : '0ms' }}>
              <img src={p.src} alt={p.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ height: '100%' }} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
              <div className="absolute top-4 left-4 bg-accent-600 text-white text-[10px] font-black px-2.5 py-1 rounded-full tracking-widest uppercase shadow-glow">
                {p.tag}
              </div>
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0 shadow">
                <span className="text-accent-600 text-xs font-bold">⤢</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white/60 text-[11px] mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-wide">
                  Klik untuk perbesar
                </p>
              </div>
              <div className="absolute inset-0 rounded-2xl border border-accent-400/0 group-hover:border-accent-400/40 transition-all duration-300 pointer-events-none" />
            </TiltCard>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 mt-10">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-accent-200" />
          <p className="text-slate-400 text-xs tracking-widest uppercase">Klik foto untuk memperbesar</p>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-accent-200" />
        </div>
      </div>

      {lightboxIdx !== null && (
        <Lightbox photos={photos} index={lightboxIdx} onClose={() => setLightboxIdx(null)} />
      )}
    </section>
  );
}
