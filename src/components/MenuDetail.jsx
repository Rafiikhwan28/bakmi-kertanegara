import React, { useEffect, useRef, useState } from 'react';

export default function MenuDetail({ item, onClose }) {
  const [visible,  setVisible]  = useState(false);
  const [dragY,    setDragY]    = useState(0);
  const [dragging, setDragging] = useState(false);
  const startY  = useRef(0);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 20);
    document.body.style.overflow = 'hidden';
    return () => { clearTimeout(t); document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const fn = (e) => e.key === 'Escape' && handleClose();
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => { setVisible(false); setTimeout(onClose, 400); };

  const onTouchStart = (e) => { startY.current = e.touches[0].clientY; setDragging(true); };
  const onTouchMove  = (e) => { const dy = e.touches[0].clientY - startY.current; if (dy > 0) setDragY(dy); };
  const onTouchEnd   = () => { setDragging(false); if (dragY > 120) handleClose(); else setDragY(0); };

  if (!item) return null;

  const nameParts = item.name.split(' ');
  const nameFirst = nameParts.slice(0, 2).join(' ');
  const nameRest  = nameParts.slice(2).join(' ');

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end md:justify-center md:items-center md:p-8">

      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
        onClick={handleClose}
      />

      {/* ════════════════════
          MOBILE — bottom sheet
          ════════════════════ */}
      <div
        className="md:hidden relative w-full rounded-t-[2rem] overflow-hidden shadow-2xl"
        style={{
          background: 'white',
          transform: visible ? `translateY(${dragging ? dragY : 0}px)` : 'translateY(100%)',
          transition: dragging ? 'none' : 'transform 0.4s cubic-bezier(0.32,0.72,0,1)',
          maxHeight: '92dvh',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accent top bar */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-accent-400 via-accent-600 to-violet-600 z-10" />

        {/* Drag handle */}
        <div
          className="pt-4 pb-2 flex justify-center cursor-grab active:cursor-grabbing"
          onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
        >
          <div className="w-10 h-1 bg-slate-200 rounded-full" />
        </div>

        {/* Hero image */}
        <div className="relative h-56 overflow-hidden">
          <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />

          {item.badge && (
            <span className="absolute top-4 left-4 bg-accent-600 text-white text-[10px] font-black px-3 py-1.5 rounded-full tracking-widest uppercase shadow-glow">
              {item.badge}
            </span>
          )}
          {item.discount && (
            <div className="absolute top-4 w-14 h-14 bg-green-500 rounded-full flex flex-col items-center justify-center shadow-xl z-10"
              style={{ right: '4.5rem' }}>
              <span className="text-white font-black text-base leading-none">{item.discount}%</span>
              <span className="text-white text-[8px] font-bold">OFF</span>
            </div>
          )}
          <button onClick={handleClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-slate-500 hover:text-accent-600 shadow-soft transition-colors z-10">
            ✕
          </button>
          <div className="absolute -bottom-3 left-5 z-10">
            <span className="bg-white border border-accent-200 text-accent-600 text-[10px] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full shadow-soft">
              {item.cat}
            </span>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto px-5 pt-7 pb-8" style={{ maxHeight: 'calc(92dvh - 15rem)' }}>

          {/* Title */}
          <h2 className="font-display text-2xl font-black text-slate-900 leading-tight mb-2">
            {nameFirst}{' '}
            {nameRest && <span className="text-accent-600 italic">{nameRest}</span>}
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed mb-5">{item.longDesc}</p>

          {/* Divider */}
          <div className="h-px bg-slate-100 mb-5" />

          {/* Features */}
          <div className="grid grid-cols-2 gap-2.5 mb-5">
            {item.features.map((f) => (
              <div key={f.label} className="bg-accent-50 border border-accent-100 rounded-2xl p-3.5 flex items-start gap-2.5">
                <span className="text-lg shrink-0 mt-0.5">{f.icon}</span>
                <div>
                  <div className="text-slate-800 text-xs font-semibold">{f.label}</div>
                  <div className="text-slate-400 text-[11px] mt-0.5 leading-relaxed">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Price + CTA */}
          <div className="flex items-center justify-between gap-3 bg-gradient-to-r from-accent-50 to-purple-50 border border-accent-100 rounded-2xl p-4">
            <div>
              <div className="text-slate-400 text-[10px] uppercase tracking-wider mb-0.5">Harga per porsi</div>
              <div className="font-display text-2xl font-black text-accent-600">Rp {item.price}</div>
            </div>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer"
              className="shrink-0 flex items-center gap-2 bg-accent-600 hover:bg-accent-700 text-white font-bold px-5 py-3 rounded-xl text-sm shadow-glow active:scale-95 transition-all">
              <span>💬</span> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ════════════════════
          DESKTOP — modal
          ════════════════════ */}
      <div
        className={`hidden md:flex relative w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 ${
          visible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
        }`}
        style={{ background: 'white' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accent top bar */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-accent-400 via-accent-600 to-violet-600 z-10" />

        <div className="flex min-h-[520px] w-full">

          {/* Left — content */}
          <div className="flex-1 flex flex-col justify-between p-10 lg:p-14">

            {/* Category + close */}
            <div className="flex items-center justify-between mb-8">
              <span className="bg-accent-100 text-accent-700 text-[10px] font-semibold tracking-[0.3em] uppercase px-3 py-1.5 rounded-full">
                {item.cat}
              </span>
              <button onClick={handleClose}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-accent-100 flex items-center justify-center text-slate-400 hover:text-accent-600 transition-all">
                ✕
              </button>
            </div>

            {/* Title + desc */}
            <div className="mb-6">
              {item.badge && (
                <span className="inline-block bg-accent-600 text-white text-[10px] font-black px-3 py-1 rounded-full tracking-widest uppercase mb-4 shadow-glow">
                  {item.badge}
                </span>
              )}
              <h2 className="font-display text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-4">
                {nameFirst}{' '}
                {nameRest && <span className="text-accent-600 italic">{nameRest}</span>}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed max-w-sm">{item.longDesc}</p>
            </div>

            {/* Price + CTA */}
            <div className="flex items-center gap-5 flex-wrap mb-8">
              <div>
                <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">Harga</div>
                <div className="font-display text-3xl font-black text-accent-600">Rp {item.price}</div>
              </div>
              <a href="https://wa.me/628211046212" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 bg-accent-600 hover:bg-accent-700 text-white font-bold px-7 py-3.5 rounded-full transition-all hover:scale-105 shadow-glow text-sm">
                <span>💬</span> Tanya via WhatsApp
              </a>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3">
              {item.features.map((f) => (
                <div key={f.label} className="bg-accent-50 border border-accent-100 rounded-2xl p-4 flex items-start gap-3">
                  <span className="text-xl mt-0.5 shrink-0">{f.icon}</span>
                  <div>
                    <div className="text-slate-800 text-xs font-semibold">{f.label}</div>
                    <div className="text-slate-400 text-[11px] mt-0.5 leading-relaxed">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — photo */}
          <div className="relative w-80 lg:w-[420px] shrink-0 overflow-hidden bg-gradient-to-br from-accent-50 to-purple-50">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.12)_0%,transparent_70%)]" />
            {item.discount && (
              <div className="absolute top-8 right-8 w-16 h-16 bg-green-500 rounded-full flex flex-col items-center justify-center shadow-xl z-20">
                <span className="text-white font-black text-lg leading-none">{item.discount}%</span>
                <span className="text-white text-[9px] font-bold">OFF</span>
              </div>
            )}
            <img src={item.img} alt={item.name}
              className="w-full h-full object-cover"
              style={{ minHeight: '520px' }} />
            <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white/40 to-transparent z-10" />
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-300/50 to-transparent" />
      </div>
    </div>
  );
}
