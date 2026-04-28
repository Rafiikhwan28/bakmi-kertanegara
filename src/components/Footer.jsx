import React from 'react';
import logo from '../assets/logo.png';

const navLinks = [
  { label: 'Home',    href: '#home' },
  { label: 'Menu',    href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Tentang', href: '#tentang' },
];

const contacts = [
  { icon: '📍', text: 'Jl. Tanah Baru, RT005/RW012, Jemblongan, Pancoran Mas, Depok, Indonesia 16436' },
  { icon: '📞', text: '+62 821-1046-212' },
  { icon: '📸', text: '@bakmikertanegara', href: 'https://instagram.com/bakmikertanegara' },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-accent-50 via-white to-purple-50 overflow-hidden border-t border-accent-100">

      {/* Decorative top accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-400/60 to-transparent" />

      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-accent-300/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-14">

          {/* Brand — col 5 */}
          <div className="md:col-span-5">
            <img src={logo} alt="Bakmi Kertanegara"
              className="h-14 object-contain mb-5" />
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-7">
              Cita rasa autentik bakmi yang menghangatkan hati, dibuat dengan bahan segar dan resep turun-temurun sejak generasi pertama.
            </p>
            {/* WhatsApp CTA */}
            <a href="https://wa.me/628211046212" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2.5 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 hover:border-green-500/60 text-green-400 text-xs font-semibold px-5 py-2.5 rounded-full transition-all">
              <span className="text-base">💬</span>
              Chat via WhatsApp
            </a>
          </div>

          {/* Nav — col 3 */}
          <div className="md:col-span-3">
            <h4 className="text-slate-800 text-[10px] font-bold uppercase tracking-[0.3em] mb-5">
              Navigasi
            </h4>
            <ul className="space-y-3">
              {navLinks.map(l => (
                <li key={l.label}>
                  <a href={l.href}
                    className="text-slate-500 hover:text-accent-600 text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-px bg-accent-500 group-hover:w-4 transition-all duration-300" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Hours — col 4 */}
          <div className="md:col-span-4">
            <h4 className="text-slate-800 text-[10px] font-bold uppercase tracking-[0.3em] mb-5">
              Kontak
            </h4>
            <ul className="space-y-3 mb-7">
              {contacts.map((c, i) => (
                <li key={i} className="flex items-start gap-2.5 text-slate-500 text-sm">
                  <span className="text-base shrink-0 mt-0.5">{c.icon}</span>
                  {c.href ? (
                    <a href={c.href} target="_blank" rel="noreferrer"
                      className="text-accent-600 hover:text-accent-700 transition-colors leading-relaxed">
                      {c.text}
                    </a>
                  ) : (
                    <span className="leading-relaxed">{c.text}</span>
                  )}
                </li>
              ))}
            </ul>

            <h4 className="text-slate-800 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
              Jam Buka
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-slate-500">
                <span>Senin – Jumat</span>
                <span className="text-slate-700">00.00 – 00.00</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Sabtu – Minggu</span>
                <span className="text-slate-700">00.00 – 00.00</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-accent-100 text-slate-500">
                <span>Hari Libur</span>
                <span className="text-accent-600 font-medium">Tetap Buka</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
