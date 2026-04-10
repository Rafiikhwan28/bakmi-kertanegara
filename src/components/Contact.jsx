import React from 'react';
import heroBg from '../assets/product6.jpeg';

const info = [
  { icon: '📍', label: 'Alamat',   value: 'Jl. Kertanegara No. 1, Jakarta Selatan' },
  { icon: '🕐', label: 'Jam Buka', value: 'Setiap Hari  ·  09.00 – 20.00 WIB' },
  { icon: '📞', label: 'Telepon',  value: '+62 878-3575-9531' },
  { icon: '✉️', label: 'Email',    value: 'info@bakmikertanegara.com' },
];

export default function Contact() {
  return (
    <section id="kontak" className="relative py-28 overflow-hidden">
      {/* Background */}
      <img src={heroBg} alt="bg" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-brown-950/85 backdrop-blur-sm" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">Temukan Kami</p>
        <h2 className="font-display text-5xl md:text-6xl font-black text-white mb-4">
          Kunjungi <span className="text-gold italic">Kami</span>
        </h2>
        <p className="text-brown-300 text-sm mb-14 max-w-md mx-auto">
          Kami siap menyambut Anda. Datang langsung atau hubungi kami terlebih dahulu.
        </p>

        {/* Info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {info.map(i => (
            <div key={i.label} className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:border-gold/40 transition-colors">
              <div className="text-2xl mb-3">{i.icon}</div>
              <div className="text-brown-400 text-xs uppercase tracking-wider mb-1">{i.label}</div>
              <div className="text-white text-sm font-medium leading-relaxed">{i.value}</div>
            </div>
          ))}
        </div>

        {/* CTA WhatsApp */}
        <a href="https://wa.me/6287835759531?text=Halo%20Bakmi%20Kertanegara%2C%20saya%20ingin%20bertanya%20tentang%20menu."
          target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold px-10 py-4 rounded-full transition-all hover:scale-105 shadow-xl shadow-green-500/30 text-sm">
          <span className="text-xl">💬</span>
          Chat via WhatsApp
        </a>
      </div>
    </section>
  );
}
