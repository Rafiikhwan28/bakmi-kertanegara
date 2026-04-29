import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const navLinks = [
  { label: 'Home',    href: '#home' },
  { label: 'Menu',    href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Tentang', href: '#tentang' },
];

const contacts = [
  { icon: '📍', label: 'Alamat',    text: 'Jl. Tanah Baru, Pancoran Mas, Depok 16436' },
  { icon: '📞', label: 'Telepon',   text: '+62 821-1046-212' },
  { icon: '📸', label: 'Instagram', text: '@bakmikertanegara', href: 'https://instagram.com/bakmikertanegara' },
];

const hours = [
  { day: 'Senin – Jumat', time: '10.00 – 22.00' },
  { day: 'Sabtu – Minggu', time: '10.00 – 22.00' },
  { day: 'Hari Libur', time: 'Tetap Buka', highlight: true },
];

/* Cek status buka berdasarkan jam WIB */
function useOpenStatus() {
  const [status, setStatus] = useState({ isOpen: false, label: '', closingIn: '' });

  useEffect(() => {
    const check = () => {
      // Waktu WIB = UTC+7
      const now  = new Date();
      const wib  = new Date(now.getTime() + (7 * 60 * 60 * 1000));
      const hour = wib.getUTCHours();
      const min  = wib.getUTCMinutes();
      const time = hour + min / 60;

      // Semua hari: buka 10.00 – 22.00 WIB
      const openAt  = 10;
      const closeAt = 22;

      const isOpen = time >= openAt && time < closeAt;

      let label     = '';
      let closingIn = '';

      if (isOpen) {
        const minsLeft = Math.round((closeAt - time) * 60);
        if (minsLeft <= 60) closingIn = `Tutup ${minsLeft} menit lagi`;
        label = 'Buka Sekarang';
      } else if (time < openAt) {
        const minsToOpen = Math.round((openAt - time) * 60);
        label = minsToOpen <= 60
          ? `Buka ${minsToOpen} menit lagi`
          : `Buka pukul 10.00 WIB`;
      } else {
        label = 'Tutup · Buka besok 10.00 WIB';
      }

      setStatus({ isOpen, label, closingIn });
    };

    check();
    const interval = setInterval(check, 60000);
    return () => clearInterval(interval);
  }, []);

  return status;
}

export default function Footer() {
  const { isOpen, label, closingIn } = useOpenStatus();
  return (
    <footer className="relative overflow-hidden bg-white border-t border-slate-100">

      {/* Top accent line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-400/60 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-accent-50 rounded-full blur-3xl pointer-events-none" />

      {/* ── MAIN CONTENT ── */}
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-12 md:pt-16 pb-8 md:pb-10">

        {/* Top section — brand + tagline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 md:pb-12 border-b border-slate-100 mb-10 md:mb-12">
          <div>
            <img src={logo} alt="Bakmi Kertanegara" className="h-12 md:h-14 object-contain mb-4" />
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Cita rasa autentik bakmi yang menghangatkan hati, dibuat dengan bahan segar dan resep turun-temurun.
            </p>
          </div>
          <a href="https://wa.me/628211046212" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2.5 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 hover:border-green-500/60 text-green-400 text-xs font-semibold px-5 py-3 rounded-full transition-all self-start md:self-auto">
            <span className="text-base">💬</span>
            Chat via WhatsApp
          </a>
        </div>

        {/* Grid — 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 mb-10 md:mb-12">

          {/* Navigasi */}
          <div>
            <h4 className="text-slate-800 text-[10px] font-bold uppercase tracking-[0.35em] mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-accent-500" />
              Navigasi
            </h4>
            <ul className="space-y-3">
              {navLinks.map(l => (
                <li key={l.label}>
                  <a href={l.href}
                    className="text-slate-500 hover:text-accent-600 text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-px bg-accent-400 group-hover:w-3 transition-all duration-300" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="text-slate-800 text-[10px] font-bold uppercase tracking-[0.35em] mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-accent-500" />
              Kontak
            </h4>
            <ul className="space-y-3.5">
              {contacts.map((c, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-sm shrink-0 mt-0.5 opacity-70">{c.icon}</span>
                  <div>
                    <div className="text-slate-400 text-[9px] uppercase tracking-wider mb-0.5">{c.label}</div>
                    {c.href ? (
                      <a href={c.href} target="_blank" rel="noreferrer"
                        className="text-accent-400 hover:text-accent-300 text-xs font-medium transition-colors">
                        {c.text}
                      </a>
                    ) : (
                      <span className="text-slate-600 text-xs leading-relaxed">{c.text}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Jam Buka */}
          <div>
            <h4 className="text-slate-800 text-[10px] font-bold uppercase tracking-[0.35em] mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-accent-500" />
              Jam Buka
            </h4>
            <div className="space-y-2.5">
              {hours.map((h, i) => (
                <div key={i} className={`flex justify-between items-center text-xs ${i > 0 ? 'pt-2.5 border-t border-slate-100' : ''}`}>
                  <span className="text-slate-500">{h.day}</span>
                  <span className={h.highlight ? 'text-accent-400 font-semibold' : 'text-slate-700'}>{h.time}</span>
                </div>
              ))}
            </div>

            {/* Open/Close indicator — otomatis */}
            <div className={`mt-5 flex items-center gap-2 rounded-xl px-3 py-2 border transition-colors ${
              isOpen
                ? 'bg-green-50 border-green-200'
                : 'bg-slate-50 border-slate-200'
            }`}>
              <span className={`w-2 h-2 rounded-full shrink-0 ${
                isOpen ? 'bg-green-500 animate-pulse' : 'bg-slate-400'
              }`} />
              <div>
                <span className={`text-[11px] font-semibold ${isOpen ? 'text-green-600' : 'text-slate-500'}`}>
                  {label}
                </span>
                {closingIn && (
                  <span className="text-[10px] text-amber-500 font-medium ml-1.5">· {closingIn}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
