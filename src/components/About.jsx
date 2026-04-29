import React, { useEffect, useRef, useState } from 'react';
import useReveal from '../hooks/useReveal';
import p2 from '../assets/Foto/Fotoinn132.jpg';
import p3 from '../assets/Foto/Fotoinn135.jpg';
import p5 from '../assets/Foto/Fotoinn141.jpg';
import p6 from '../assets/Foto/Fotoinn144.jpg';

const info = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
        <circle cx="12" cy="9" r="2.5"/>
      </svg>
    ),
    label: 'Alamat',
    value: 'Jl. Tanah Baru, RT005/RW012, Jemblongan, Pancoran Mas, Depok 16436',
    href: 'https://maps.google.com/?q=Jl.+Tanah+Baru+Pancoran+Mas+Depok',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
      </svg>
    ),
    label: 'Telepon',
    value: '+62 821-1046-212',
    href: 'tel:+628211046212',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
    label: 'Instagram',
    value: '@bakmikertanegara',
    href: 'https://instagram.com/bakmikertanegara',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
      </svg>
    ),
    label: 'TikTok',
    value: '@bakmikertanegara',
    href: 'https://tiktok.com/@bakmikertanegara',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: 'bakmikertanegara@gmail.com',
    href: 'mailto:bakmikertanegara@gmail.com',
  },
];

const values = [
  { icon: '🍜', title: 'Home-made Mie',  desc: 'Dibuat segar setiap hari tanpa pengawet' },
  { icon: '🫙', title: 'Kaldu 6 Jam',    desc: 'Dimasak perlahan untuk rasa yang dalam' },
  { icon: '🌿', title: 'Bahan Alami',    desc: 'Pilihan terbaik langsung setiap pagi' },
  { icon: '❤️', title: 'Penuh Cinta',    desc: 'Setiap mangkuk dibuat dengan sepenuh hati' },
];

export default function About() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [contactRef, contactVisible] = useReveal(0.1);
  const [valuesRef, valuesVisible]   = useReveal(0.1);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="tentang" ref={sectionRef} className="bg-white overflow-hidden">

      {/* ── HERO BAND ── */}
      <div className="relative h-[35vh] md:h-[55vh] overflow-hidden">
        <img src={p6} alt="about hero" className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-white" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h2 className="font-display text-3xl md:text-5xl lg:text-7xl font-black text-white leading-none drop-shadow-lg">
            Warisan <span className="italic" style={{ color: '#f9a8d4' }}>Rasa</span>
          </h2>
          <div className="w-12 h-0.5 bg-white/60 rounded-full mt-4" />
        </div>
      </div>

      {/* ── STORY SECTION ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-14 md:py-24">

        {/* Story + Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16 md:mb-24">

          {/* Text */}
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="w-8 h-px bg-accent-400" />
              <span className="text-accent-600 text-[10px] font-bold tracking-[0.35em] uppercase">Tentang Kami</span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-5">
              Dari Dapur Keluarga<br />
              <span className="text-accent-600 italic">ke Meja Anda</span>
            </h3>
            <p className="text-slate-600 text-sm md:text-base leading-[1.9] mb-4">
              Bakmi Kertanegara lahir dari semangat melestarikan cita rasa bakmi autentik yang telah diwariskan turun-temurun. Setiap mangkuk kami adalah perpaduan mie segar buatan sendiri, kuah kaldu yang dimasak selama 6 jam, dan topping pilihan terbaik.
            </p>
            <p className="text-slate-500 text-sm leading-[1.9] mb-8">
              Kami percaya makanan yang baik bukan hanya soal rasa — tapi juga soal kenangan dan kehangatan yang tercipta di setiap meja makan bersama orang-orang tercinta.
            </p>

            {/* Quote */}
            <div className="relative pl-5 border-l-4 border-accent-500 bg-gradient-to-r from-accent-50 to-transparent py-4 pr-4 rounded-r-2xl">
              <p className="font-display text-base md:text-lg text-slate-800 italic leading-relaxed">
                "Kadang, kebahagiaan itu sesederhana duduk tenang dan menikmati semangkuk bakmi hangat."
              </p>
              <p className="text-accent-500 text-[10px] mt-2 tracking-widest uppercase font-semibold">— Bakmi Kertanegara</p>
            </div>
          </div>

          {/* Images — unified mosaic layout untuk semua ukuran */}
          <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="grid grid-cols-3 grid-rows-2 gap-2 md:gap-3" style={{ height: '320px' }}>

              {/* Foto besar kiri — row span 2 */}
              <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-card">
                <img src={p2} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>

              {/* Foto kecil kanan atas */}
              <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-soft">
                <img src={p3} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>

              {/* Foto kecil kanan bawah */}
              <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-soft relative">
                <img src={p5} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                {/* Overlay badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-accent-900/40 to-transparent flex items-end p-3">
                  <span className="text-white text-[9px] font-bold tracking-widest uppercase opacity-80">Since 2026</span>
                </div>
              </div>
            </div>

            {/* Accent dekoratif */}
            <div className="hidden lg:block absolute -bottom-4 -right-4 w-24 h-24 border-2 border-accent-200 rounded-2xl -z-10" />
          </div>
        </div>

        {/* ── VALUES GRID ── */}
        <div ref={valuesRef} className="mb-16 md:mb-24">
          <div className={`text-center mb-8 reveal ${valuesVisible ? 'visible' : ''}`}>
            <span className="text-accent-600 text-[10px] font-bold tracking-[0.35em] uppercase">Keunggulan Kami</span>
            <h3 className="font-display text-2xl md:text-3xl font-black text-slate-900 mt-1">
              Mengapa <span className="text-accent-600 italic">Berbeda?</span>
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {values.map((v, i) => (
              <div key={i}
                className={`reveal ${valuesVisible ? 'visible' : ''} group bg-white border border-slate-100 hover:border-accent-200 rounded-2xl p-4 md:p-6 text-center shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1`}
                style={{ transitionDelay: valuesVisible ? `${i * 100}ms` : '0ms' }}>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-accent-50 group-hover:bg-accent-100 rounded-xl flex items-center justify-center text-xl md:text-2xl mx-auto mb-3 transition-colors">
                  {v.icon}
                </div>
                <h4 className="font-display font-bold text-slate-900 text-sm md:text-base mb-1">{v.title}</h4>
                <p className="text-slate-400 text-[11px] md:text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CONTACT SECTION ── */}
      <div id="kontak" className="bg-gradient-to-b from-white to-accent-50 pb-14 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block bg-accent-100 text-accent-700 text-[10px] font-semibold px-3 py-1 rounded-full mb-2 tracking-wider">Temukan Kami</span>
            <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-black text-slate-900">
              Kunjungi <span className="text-accent-600 italic">Kami</span>
            </h2>
            <p className="text-slate-400 text-sm mt-3 max-w-sm mx-auto">
              Kami siap menyambut Anda. Datang langsung atau hubungi kami terlebih dahulu.
            </p>
          </div>

          {/* Contact card */}
          <div ref={contactRef} className={`rounded-3xl overflow-hidden shadow-card flex flex-col lg:flex-row reveal ${contactVisible ? 'visible' : ''}`}>

            {/* Image */}
            <div className="relative lg:w-1/2 h-52 md:h-64 lg:h-auto overflow-hidden">
              <img src={p6} alt="kontak" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              {/* Overlay text on image */}
              <div className="absolute bottom-0 inset-x-0 p-5 md:p-8">
                <p className="font-display text-white font-black text-xl md:text-2xl leading-tight">Bakmi Kertanegara</p>
                <p className="text-white/70 text-xs mt-1 tracking-wide">Authentic Noodle House · Depok</p>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 bg-white p-5 md:p-8 lg:p-12 flex flex-col justify-center">
              <div className="space-y-3 mb-6 md:mb-8">
                {info.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 md:p-4 bg-slate-50 hover:bg-accent-50 border border-transparent hover:border-accent-100 rounded-2xl transition-all duration-200 group">
                    <div className="w-8 h-8 md:w-9 md:h-9 bg-white rounded-xl flex items-center justify-center shadow-soft shrink-0 group-hover:shadow-card transition-shadow text-accent-600">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="text-slate-400 text-[9px] uppercase tracking-wider mb-0.5">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} target={item.href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer"
                          className="text-accent-600 hover:text-accent-700 text-xs md:text-sm font-medium transition-colors break-all">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-slate-800 text-xs md:text-sm font-medium leading-relaxed">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <a href="https://wa.me/628211046212?text=Halo%20Bakmi%20Kertanegara%2C%20saya%20ingin%20bertanya%20tentang%20menu."
                target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-400 text-white font-bold px-6 md:px-8 py-3.5 rounded-full transition-all hover:scale-105 shadow-lg shadow-green-500/25 text-sm w-full">
                <span className="text-lg">💬</span>
                Chat via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
