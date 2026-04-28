import React, { useEffect, useRef, useState } from 'react';

export default function MenuDetail({ item, onClose }) {
  const [visible,   setVisible]   = useState(false);
  const [dragY,     setDragY]     = useState(0);
  const [dragging,  setDragging]  = useState(false);
  const [imgViewer, setImgViewer] = useState(false);
  const startY = useRef(0);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 20);
    document.body.style.overflow = 'hidden';
    return () => { clearTimeout(t); document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const fn = (e) => {
      if (e.key === 'Escape') {
        if (imgViewer) setImgViewer(false);
        else handleClose();
      }
    };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgViewer]);

  const handleClose = () => { setVisible(false); setTimeout(onClose, 400); };

  const onTouchStart = (e) => { startY.current = e.touches[0].clientY; setDragging(true); };
  const onTouchMove  = (e) => { const dy = e.touches[0].clientY - startY.current; if (dy > 0) setDragY(dy); };
  const onTouchEnd   = () => { setDragging(false); if (dragY > 100) handleClose(); else setDragY(0); };

  if (!item) return null;

  return (
    <>
      {/* ── Image viewer fullscreen ── */}
      {imgViewer && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setImgViewer(false)}
        >
          <button
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-lg transition-colors"
            onClick={() => setImgViewer(false)}>
            ✕
          </button>
          <img
            src={item.img}
            alt={item.name}
            className="max-w-full max-h-full object-contain rounded-xl"
            style={{ maxHeight: '90dvh', maxWidth: '90vw' }}
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-widest uppercase">
            Tap untuk tutup
          </p>
        </div>
      )}

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
        onClick={handleClose}
      />

      {/* ══════════════════
          MOBILE bottom sheet
          ══════════════════ */}
      <div
        className="fixed inset-x-0 bottom-0 z-50 md:hidden rounded-t-3xl overflow-hidden flex flex-col"
        style={{
          background: 'white',
          maxHeight: '95dvh',
          transform: visible ? `translateY(${dragging ? dragY : 0}px)` : 'translateY(100%)',
          transition: dragging ? 'none' : 'transform 0.45s cubic-bezier(0.32,0.72,0,1)',
          boxShadow: '0 -8px 40px rgba(0,0,0,0.2)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drag handle */}
        <div className="shrink-0 flex justify-center pt-3 pb-1 cursor-grab"
          onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
          <div className="w-10 h-1 bg-slate-200 rounded-full" />
        </div>

        {/* Foto — klik untuk fullscreen */}
        <div
          className="relative shrink-0 w-full cursor-zoom-in group"
          style={{ height: '300px' }}
          onClick={() => setImgViewer(true)}
        >
          <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />

          {/* Zoom hint */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity">
            <div className="bg-black/40 backdrop-blur text-white text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2">
              <span>🔍</span> Tap untuk perbesar
            </div>
          </div>

          <button onClick={(e) => { e.stopPropagation(); handleClose(); }}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/40 backdrop-blur flex items-center justify-center text-white z-10">
            ✕
          </button>
          {item.badge && (
            <span className="absolute top-3 left-3 bg-accent-600 text-white text-[10px] font-black px-3 py-1 rounded-full tracking-widest uppercase z-10">
              {item.badge}
            </span>
          )}
        </div>

        {/* Konten scroll */}
        <div className="flex-1 overflow-y-auto px-6 pt-5 pb-8 space-y-5">
          <div>
            <span className="text-accent-500 text-[10px] font-bold tracking-widest uppercase">{item.cat}</span>
            <h2 className="font-display text-2xl font-black text-slate-900 mt-1 leading-tight">{item.name}</h2>
            <p className="text-slate-500 text-sm leading-relaxed mt-2">{item.longDesc}</p>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {item.features.map((f) => (
              <div key={f.label} className="bg-accent-50 border border-accent-100 rounded-2xl p-3.5 flex items-start gap-2.5">
                <span className="text-lg shrink-0">{f.icon}</span>
                <div>
                  <div className="text-slate-800 text-xs font-semibold">{f.label}</div>
                  <div className="text-slate-400 text-[11px] mt-0.5 leading-relaxed">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between gap-3 bg-accent-50 border border-accent-100 rounded-2xl p-4">
            <div>
              <div className="text-slate-400 text-[10px] uppercase tracking-wider">Harga</div>
              <div className="font-display text-2xl font-black text-accent-600">Rp {item.price}</div>
            </div>
            <a href="https://wa.me/628211046212" target="_blank" rel="noreferrer"
              className="flex items-center gap-2 bg-accent-600 text-white font-bold px-5 py-3 rounded-xl text-sm shadow-glow">
              <span>💬</span> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ══════════════════
          DESKTOP modal
          ══════════════════ */}
      <div
        className={`fixed inset-0 z-50 hidden md:flex items-center justify-center p-8 transition-all duration-300 ${
          visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleClose}
      >
        <div
          className={`relative w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl flex transition-all duration-300 ${
            visible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-6'
          }`}
          style={{ background: 'white', maxHeight: '88vh' }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-accent-400 via-accent-600 to-violet-600 z-10" />

          {/* Foto kiri — klik untuk fullscreen */}
          <div
            className="relative w-[46%] shrink-0 overflow-hidden cursor-zoom-in group"
            onClick={() => setImgViewer(true)}
          >
            <img src={item.img} alt={item.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              style={{ minHeight: '520px' }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Zoom hint on hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black/40 backdrop-blur-sm text-white text-xs font-semibold px-5 py-2.5 rounded-full flex items-center gap-2 shadow-lg">
                <span>🔍</span> Klik untuk perbesar
              </div>
            </div>

            {item.badge && (
              <span className="absolute top-5 left-5 bg-accent-600 text-white text-[10px] font-black px-3 py-1.5 rounded-full tracking-widest uppercase shadow-glow z-10">
                {item.badge}
              </span>
            )}
            <div className="absolute bottom-0 inset-x-0 p-6">
              <span className="text-white/60 text-[10px] tracking-widest uppercase">{item.cat}</span>
              <p className="font-display text-white font-bold text-xl leading-tight mt-1">{item.name}</p>
            </div>
          </div>

          {/* Konten kanan */}
          <div className="flex-1 overflow-y-auto p-10 flex flex-col gap-6">
            <div className="flex justify-end">
              <button onClick={handleClose}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-accent-100 flex items-center justify-center text-slate-400 hover:text-accent-600 transition-all">
                ✕
              </button>
            </div>

            <p className="text-slate-500 text-base leading-relaxed">{item.longDesc}</p>

            <div className="grid grid-cols-2 gap-3">
              {item.features.map((f) => (
                <div key={f.label} className="bg-accent-50 border border-accent-100 rounded-2xl p-4 flex items-start gap-3">
                  <span className="text-xl shrink-0 mt-0.5">{f.icon}</span>
                  <div>
                    <div className="text-slate-800 text-sm font-semibold">{f.label}</div>
                    <div className="text-slate-400 text-xs mt-0.5 leading-relaxed">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between gap-4 bg-accent-50 border border-accent-100 rounded-2xl p-5 mt-auto">
              <div>
                <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">Harga</div>
                <div className="font-display text-3xl font-black text-accent-600">Rp {item.price}</div>
              </div>
              <a href="https://wa.me/628211046212" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 bg-accent-600 hover:bg-accent-700 text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-glow text-sm">
                <span>💬</span> Tanya via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
