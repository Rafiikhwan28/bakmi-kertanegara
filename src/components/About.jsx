import React, { useEffect, useRef, useState } from 'react';
import p2 from '../assets/Foto/Fotoinn132.jpg';
import p3 from '../assets/Foto/Fotoinn135.jpg';
import p5 from '../assets/Foto/Fotoinn141.jpg';
import p6 from '../assets/Foto/Fotoinn144.jpg';

const info = [
  { icon: '📍', label: 'Alamat',    value: 'Jl. Tanah Baru, RT005/RW012, Jemblongan, Pancoran Mas, Depok, Indonesia 16436' },
  { icon: '🕐', label: 'Jam Buka',  value: 'Setiap Hari  ·  00.00 – 00.00 WIB' },
  { icon: '📞', label: 'Telepon',   value: '+62 821-1046-212' },
  { icon: '📸', label: 'Instagram', value: '@bakmikertanegara' },
];

export default function About() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

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

      {/* ── Hero band ── */}
      <div className="relative h-[45vh] md:h-[55vh] overflow-hidden">
        <img src={p2} alt="about hero" className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-white" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <span className="inline-block bg-white/80 backdrop-blur text-accent-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wider shadow-soft">
            Cerita Kami
          </span>
          <h2 className="font-display text-5xl md:text-7xl font-black text-slate-900 leading-none drop-shadow-sm">
            Warisan <span className="text-accent-600 italic">Rasa</span>
          </h2>
          <div className="w-16 h-1 bg-accent-500 rounded-full mt-6" />
        </div>
      </div>

      {/* ── Story + Images ── */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <p className="text-slate-600 text-base leading-[1.9] mb-6">
              Bakmi Kertanegara lahir dari semangat melestarikan cita rasa bakmi autentik yang telah diwariskan turun-temurun. Setiap mangkuk kami adalah perpaduan mie segar buatan sendiri, kuah kaldu yang dimasak selama 6 jam, dan topping pilihan terbaik yang dipilih langsung setiap pagi.
            </p>
            <p className="text-slate-500 text-sm leading-[1.9] mb-10">
              Kami percaya makanan yang baik bukan hanya soal rasa — tapi juga soal kenangan dan kehangatan yang tercipta di setiap meja makan bersama orang-orang tercinta. Itulah mengapa kami tidak pernah mengubah resep asli kami.
            </p>
            <div className="relative pl-6 border-l-4 border-accent-400 rounded-r-xl bg-accent-50 py-5 pr-5">
              <p className="font-display text-xl text-slate-800 italic leading-relaxed">
                "Satu mangkuk bakmi, seribu kenangan yang tak terlupakan."
              </p>
              <p className="text-slate-400 text-xs mt-3 tracking-widest uppercase">— Bakmi Kertanegara</p>
            </div>
          </div>

          <div className={`relative transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="grid grid-cols-2 gap-3">
              <img src={p2} alt="" className="w-full rounded-2xl object-cover shadow-card col-span-2" style={{ aspectRatio: '16/9' }} />
              <img src={p3} alt="" className="w-full rounded-2xl object-cover shadow-soft" style={{ aspectRatio: '1/1' }} />
              <img src={p5} alt="" className="w-full rounded-2xl object-cover shadow-soft" style={{ aspectRatio: '1/1' }} />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-accent-200 rounded-2xl -z-10" />
          </div>
        </div>
      </div>

      {/* ── Contact section ── */}
      <div id="kontak" className="bg-gradient-to-b from-white to-accent-50 pb-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">
            <span className="inline-block bg-accent-100 text-accent-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-3 tracking-wider">Temukan Kami</span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-slate-900">
              Kunjungi <span className="text-accent-600 italic">Kami</span>
            </h2>
            <p className="text-slate-400 text-sm mt-4 max-w-md mx-auto">
              Kami siap menyambut Anda. Datang langsung atau hubungi kami terlebih dahulu.
            </p>
          </div>

          <div className={`rounded-3xl overflow-hidden shadow-card flex flex-col lg:flex-row transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

            {/* Image side */}
            <div className="relative lg:w-1/2 h-64 lg:h-auto overflow-hidden">
              <img src={p6} alt="kontak" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent lg:hidden" />
            </div>

            {/* Info side */}
            <div className="flex-1 bg-gradient-to-br from-accent-50 to-white p-10 lg:p-14 flex flex-col justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {info.map(i => (
                  <div key={i.label} className="bg-white rounded-2xl p-5 shadow-soft hover:shadow-card transition-all hover:-translate-y-0.5 border border-slate-100 hover:border-accent-200">
                    <div className="text-2xl mb-2">{i.icon}</div>
                    <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">{i.label}</div>
                    {i.label === 'Instagram' ? (
                      <a href="https://instagram.com/bakmikertanegara" target="_blank" rel="noreferrer"
                        className="text-accent-600 hover:text-accent-700 text-sm font-medium leading-relaxed transition-colors">
                        {i.value}
                      </a>
                    ) : (
                      <div className="text-slate-800 text-sm font-medium leading-relaxed">{i.value}</div>
                    )}
                  </div>
                ))}
              </div>

              <a href="https://wa.me/628211046212?text=Halo%20Bakmi%20Kertanegara%2C%20saya%20ingin%20bertanya%20tentang%20menu."
                target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold px-10 py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-green-500/30 text-sm w-full sm:w-auto">
                <span className="text-xl">💬</span>
                Chat via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
