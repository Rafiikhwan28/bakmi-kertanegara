import React, { useEffect, useRef, useState } from 'react';

export default function MenuDetail({ item, onClose }) {
  const [visible, setVisible] = useState(false);
  const [dragY,   setDragY]   = useState(0);
  const [dragging, setDragging] = useState(false);
  const startY  = useRef(0);
  const sheetRef = useRef(null);

  /* mount → trigger slide-up */
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 20);
    document.body.style.overflow = 'hidden';
    return () => {
      clearTimeout(t);
      document.body.style.overflow = '';
    };
  }, []);

  /* ESC to close */
  useEffect(() => {
    const fn = (e) => e.key === 'Escape' && handleClose();
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 400);
  };

  /* ── Touch drag-to-dismiss ── */
  const onTouchStart = (e) => {
    startY.current = e.touches[0].clientY;
    setDragging(true);
  };
  const onTouchMove = (e) => {
    const dy = e.touches[0].clientY - startY.current;
    if (dy > 0) setDragY(dy);
  };
  const onTouchEnd = () => {
    setDragging(false);
    if (dragY > 120) { handleClose(); }
    else { setDragY(0); }
  };

  if (!item) return null;

  const nameParts  = item.name.split(' ');
  const nameFirst  = nameParts.slice(0, 2).join(' ');
  const nameRest   = nameParts.slice(2).join(' ');

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end md:justify-center md:items-center md:p-8">

      {/* ── Backdrop ── */}
      <div
        className={`absolute inset-0 bg-brown-950/80 backdrop-blur-sm transition-opacity duration-400 ${visible ? 'opacity-100' : 'opacity-0'}`}
        onClick={handleClose}
      />

      {/* ════════════════════════════════
          MOBILE  — bottom sheet
          ════════════════════════════════ */}
      <div
        ref={sheetRef}
        className={`md:hidden relative w-full rounded-t-[2rem] overflow-hidden shadow-2xl transition-transform duration-400 ease-out ${
          visible ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{
          background: 'linear-gradient(160deg,#2d1200 0%,#1a0a00 100%)',
          transform: visible
            ? `translateY(${dragging ? dragY : 0}px)`
            : 'translateY(100%)',
          transition: dragging ? 'none' : 'transform 0.4s cubic-bezier(0.32,0.72,0,1)',
          maxHeight: '92dvh',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gold top line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent z-10" />

        {/* ── Drag handle area ── */}
        <div
          className="relative z-20 pt-3 pb-1 flex flex-col items-center cursor-grab active:cursor-grabbing"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="w-10 h-1 bg-white/20 rounded-full" />
        </div>

        {/* ── Hero image strip ── */}
        <div className="relative h-56 overflow-hidden">
          <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
          {/* gradient fade bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a00] via-[#1a0a00]/30 to-transparent" />

          {/* Floating badge top-left */}
          {item.badge && (
            <span className="absolute top-4 left-4 bg-gold text-brown-950 text-[10px] font-black px-3 py-1.5 rounded-full tracking-widest uppercase shadow-lg">
              {item.badge}
            </span>
          )}

          {/* Discount badge top-right */}
          {item.discount && (
            <div className="absolute top-4 right-4 w-14 h-14 bg-green-500 rounded-full flex flex-col items-center justify-center shadow-xl">
              <span className="text-white font-black text-base leading-none">{item.discount}%</span>
              <span className="text-white text-[8px] font-bold">OFF</span>
            </div>
          )}

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-brown-950/70 backdrop-blur border border-white/10 flex items-center justify-center text-brown-300 hover:text-gold transition-colors"
            style={{ right: item.discount ? '5rem' : '1rem' }}
          >
            ✕
          </button>

          {/* Category pill overlapping bottom */}
          <div className="absolute -bottom-3 left-5">
            <span className="bg-brown-950 border border-gold/30 text-gold text-[10px] font-semibold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full">
              {item.cat}
            </span>
          </div>
        </div>

        {/* ── Scrollable content ── */}
        <div className="overflow-y-auto px-5 pt-6 pb-8" style={{ maxHeight: 'calc(92dvh - 14rem)' }}>

          {/* Title */}
          <h2 className="font-display text-3xl font-black text-white leading-tight mb-3">
            {nameFirst}{' '}
            {nameRest && <span className="text-gold italic">{nameRest}</span>}
          </h2>

          {/* Description */}
          <p className="text-brown-300 text-sm leading-relaxed mb-5">{item.longDesc}</p>

          {/* Rating row */}
          <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/5">
            <div className="flex -space-x-2">
              {item.avatars.map((color, i) => (
                <div key={i}
                  className="w-8 h-8 rounded-full border-2 border-brown-900 flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: color }}>
                  {item.avatarInitials[i]}
                </div>
              ))}
            </div>
            <div>
              <div className="text-white text-xs font-semibold">{item.customerCount}+ Happy Customer</div>
              <div className="flex items-center gap-1 mt-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`text-xs ${i < item.rating ? 'text-gold' : 'text-brown-700'}`}>★</span>
                ))}
                <span className="text-brown-400 text-xs ml-1">{item.rating}.0</span>
              </div>
            </div>
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-2 gap-2.5 mb-6">
            {item.features.map((f) => (
              <div key={f.label} className="bg-white/5 border border-white/8 rounded-2xl p-3.5 flex items-start gap-2.5">
                <span className="text-lg mt-0.5 shrink-0">{f.icon}</span>
                <div>
                  <div className="text-white text-xs font-semibold">{f.label}</div>
                  <div className="text-brown-400 text-[11px] mt-0.5 leading-relaxed">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Price + CTA — sticky feel at bottom */}
          <div className="flex items-center justify-between gap-4 bg-white/5 border border-white/8 rounded-2xl p-4">
            <div>
              <div className="text-brown-500 text-[10px] uppercase tracking-wider">Harga per porsi</div>
              <div className="font-display text-2xl font-black text-gold mt-0.5">Rp {item.price}</div>
            </div>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-gold text-brown-950 font-bold px-5 py-3 rounded-xl text-sm shadow-lg shadow-gold/30 active:scale-95 transition-transform"
            >
              <span>💬</span> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════
          DESKTOP  — centered modal (unchanged feel)
          ════════════════════════════════ */}
      <div
        className={`hidden md:flex relative w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl transition-all duration-400 ${
          visible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
        }`}
        style={{ background: 'linear-gradient(135deg,#1a0a00 0%,#2d1200 50%,#1a0a00 100%)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

        <div className="flex min-h-[520px]">
          {/* Left */}
          <div className="flex-1 flex flex-col justify-between p-14 relative z-10">
            <div className="flex items-center justify-between mb-8">
              <span className="text-gold text-[10px] font-semibold tracking-[0.3em] uppercase border border-gold/30 px-3 py-1 rounded-full">
                {item.cat}
              </span>
              <button onClick={handleClose}
                className="w-9 h-9 rounded-full border border-white/10 hover:border-gold/50 flex items-center justify-center text-brown-400 hover:text-gold transition-all">
                ✕
              </button>
            </div>

            <div className="mb-6">
              {item.badge && (
                <span className="inline-block bg-gold text-brown-950 text-[10px] font-black px-3 py-1 rounded-full tracking-widest uppercase mb-4">
                  {item.badge}
                </span>
              )}
              <h2 className="font-display text-5xl font-black text-white leading-tight mb-4">
                {nameFirst}{' '}
                {nameRest && <span className="text-gold italic">{nameRest}</span>}
              </h2>
              <p className="text-brown-300 text-sm leading-relaxed max-w-xs">{item.longDesc}</p>
            </div>

            <div className="flex items-center gap-3 mb-8">
              <div className="flex -space-x-2">
                {item.avatars.map((color, i) => (
                  <div key={i}
                    className="w-8 h-8 rounded-full border-2 border-brown-900 flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: color }}>
                    {item.avatarInitials[i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="text-white text-xs font-semibold">{item.customerCount}+ Happy Customer</div>
                <div className="flex gap-0.5 mt-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={`text-xs ${i < item.rating ? 'text-gold' : 'text-brown-700'}`}>★</span>
                  ))}
                  <span className="text-brown-400 text-xs ml-1">{item.rating}.0</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-5 flex-wrap">
              <div>
                <div className="text-brown-500 text-xs uppercase tracking-wider mb-1">Harga</div>
                <div className="font-display text-3xl font-black text-gold">Rp {item.price}</div>
              </div>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 bg-gold hover:bg-gold-light text-brown-950 font-bold px-7 py-3.5 rounded-full transition-all hover:scale-105 shadow-lg shadow-gold/30 text-sm">
                <span>💬</span> Tanya via WhatsApp
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-8">
              {item.features.map((f) => (
                <div key={f.label} className="bg-white/5 border border-white/8 rounded-2xl p-4 flex items-start gap-3">
                  <span className="text-xl mt-0.5">{f.icon}</span>
                  <div>
                    <div className="text-white text-xs font-semibold">{f.label}</div>
                    <div className="text-brown-400 text-[11px] mt-0.5 leading-relaxed">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="relative w-[420px] flex items-end justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,160,23,0.15)_0%,_transparent_70%)]" />
            {item.discount && (
              <div className="absolute top-8 right-8 w-16 h-16 bg-green-500 rounded-full flex flex-col items-center justify-center shadow-lg z-20">
                <span className="text-white font-black text-lg leading-none">{item.discount}%</span>
                <span className="text-white text-[9px] font-bold tracking-wide">OFF</span>
              </div>
            )}
            <img src={item.img} alt={item.name}
              className="relative z-10 w-full h-full object-cover object-contain scale-110 translate-y-4"
              style={{ maxHeight: '520px' }} />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brown-900/80 to-transparent z-20" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      </div>
    </div>
  );
}
