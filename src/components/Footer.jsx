import React from 'react';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-brown-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        <div>
          <img src={logo} alt="Bakmi Kertanegara" className="h-12 object-contain mb-4" />
          <p className="text-brown-500 text-sm leading-relaxed max-w-xs">
            Cita rasa autentik bakmi yang menghangatkan hati, dibuat dengan bahan segar dan resep turun-temurun.
          </p>
        </div>

        <div>
          <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Navigasi</h4>
          <ul className="space-y-3">
            {['Home', 'Menu', 'Gallery', 'Tentang', 'Kontak'].map(l => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`}
                  className="text-brown-500 hover:text-gold text-sm transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Jam Operasional</h4>
          <div className="space-y-2 text-sm text-brown-500">
            <div className="flex justify-between max-w-xs">
              <span>Senin – Jumat</span>
              <span className="text-brown-300">10.00 – 22.00</span>
            </div>
            <div className="flex justify-between max-w-xs">
              <span>Sabtu – Minggu</span>
              <span className="text-brown-300">09.00 – 23.00</span>
            </div>
            <div className="flex justify-between max-w-xs pt-2 border-t border-white/5">
              <span>Hari Libur</span>
              <span className="text-gold">Tetap Buka</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-6 px-6 text-center text-brown-600 text-xs tracking-wide">
        © 2026 Bakmi Kertanegara · All rights reserved
      </div>
    </footer>
  );
}
