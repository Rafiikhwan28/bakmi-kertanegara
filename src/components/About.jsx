import React, { useEffect, useRef, useState } from 'react';
import p2 from '../assets/product2.jpeg';
import p3 from '../assets/product3.jpeg';
import p5 from '../assets/product5.jpeg';
import p6 from '../assets/product6.jpeg';

const stats = [
  { num: '15+',  label: 'Tahun Berpengalaman', icon: '🏆' },
  { num: '10K+', label: 'Pelanggan Puas',       icon: '❤️' },
  { num: '12',   label: 'Varian Menu',           icon: '🍜' },
  { num: '100%', label: 'Bahan Segar',           icon: '🌿' },
];

const timeline = [
  { year: '2026', title: 'Awal Mula',       desc: 'Warung kecil di sudut Kertanegara dengan satu resep bakmi turun-temurun.' },
  { year: '2026', title: 'Berkembang',      desc: 'Pindah ke lokasi lebih besar, menu bertambah, pelanggan setia terus bertumbuh.' },
  { year: '2026', title: 'Dikenal Luas',    desc: 'Masuk daftar rekomendasi kuliner Jakarta, ribuan ulasan bintang lima.' },
  { year: '2026', title: 'Kini & Selamanya', desc: 'Tetap setia pada resep asli, terus berinovasi untuk generasi berikutnya.' },
];

/* ── Counter animation hook ── */
function useCountUp(target, duration = 1500, trigger) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const num = parseInt(target.replace(/\D/g, ''), 10);
    if (!num) { setVal(target); return; }
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.floor(eased * num));
      if (progress < 1) requestAnimationFrame(step);
      else setVal(target);
    };
    requestAnimationFrame(step);
  }, [trigger, target, duration]);
  return val;
}

function StatCard({ stat, trigger }) {
  const count = useCountUp(stat.num, 1200, trigger);
  return (
    <div className="relative group flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/8 hover:border-gold/30 transition-all duration-300 hover:-translate-y-1">
      <span className="text-3xl mb-3">{stat.icon}</span>
      <div className="font-display text-4xl font-black text-gold leading-none mb-2">{count}</div>
      <div className="text-brown-400 text-xs tracking-wide">{stat.label}</div>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}

export default function About() {
  const sectionRef  = useRef(null);
  const [inView, setInView] = useState(false);
  const [activeLine, setActiveLine] = useState(-1);

  /* Intersection observer — trigger counter + timeline */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  /* Stagger timeline items */
  useEffect(() => {
    if (!inView) return;
    timeline.forEach((_, i) => {
      setTimeout(() => setActiveLine(i), i * 200 + 400);
    });
  }, [inView]);

  return (
    <section id="tentang" ref={sectionRef} className="bg-brown-950 overflow-hidden">

      {/* ── HERO BAND — full-width cinematic ── */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img src={p6} alt="about hero" className="w-full h-full object-cover object-center scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-brown-950/60 via-brown-950/40 to-brown-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-brown-950/50 to-transparent" />

        {/* Centered text on band */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="text-gold text-xs font-semibold tracking-[0.4em] uppercase mb-4">Cerita Kami</p>
          <h2 className="font-display text-5xl md:text-7xl font-black text-white leading-none">
            Warisan <span className="text-gold italic">Rasa</span>
          </h2>
          <div className="w-16 h-px bg-gold mt-6" />
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* Two-col: story + images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">

          {/* Story text */}
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <p className="text-brown-300 text-base leading-[1.9] mb-6">
              Bakmi Kertanegara lahir dari semangat melestarikan cita rasa bakmi autentik
              yang telah diwariskan turun-temurun. Setiap mangkuk kami adalah perpaduan
              mie segar buatan sendiri, kuah kaldu yang dimasak selama 6 jam, dan topping
              pilihan terbaik yang dipilih langsung setiap pagi.
            </p>
            <p className="text-brown-400 text-sm leading-[1.9] mb-10">
              Kami percaya makanan yang baik bukan hanya soal rasa — tapi juga soal kenangan
              dan kehangatan yang tercipta di setiap meja makan bersama orang-orang tercinta.
              Itulah mengapa kami tidak pernah mengubah resep asli kami.
            </p>

            {/* Quote */}
            <div className="relative pl-6 border-l-2 border-gold/50">
              <span className="font-display text-5xl text-gold/20 absolute -top-3 -left-1 leading-none select-none">"</span>
              <p className="font-display text-xl text-white italic leading-relaxed">
                Satu mangkuk bakmi, seribu kenangan yang tak terlupakan.
              </p>
              <p className="text-brown-500 text-xs mt-3 tracking-widest uppercase">— Pendiri Bakmi Kertanegara</p>
            </div>
          </div>

          {/* Stacked images */}
          <div className={`relative transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="grid grid-cols-2 gap-3">
              <img src={p2} alt="about-1"
                className="w-full rounded-2xl object-cover shadow-xl col-span-2"
                style={{ aspectRatio: '16/9' }} />
              <img src={p3} alt="about-2"
                className="w-full rounded-2xl object-cover shadow-lg"
                style={{ aspectRatio: '1/1' }} />
              <img src={p5} alt="about-3"
                className="w-full rounded-2xl object-cover shadow-lg"
                style={{ aspectRatio: '1/1' }} />
            </div>
            {/* Gold frame accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-gold/20 rounded-2xl -z-10" />
          </div>
        </div>

        {/* ── STATS ROW ── */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-24 transition-all duration-700 delay-300 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {stats.map(s => <StatCard key={s.label} stat={s} trigger={inView} />)}
        </div>

        {/* ── TIMELINE ── */}
        <div>
          <div className="text-center mb-14">
            <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">Perjalanan</p>
            <h3 className="font-display text-4xl font-black text-white">
              Jejak <span className="text-gold italic">Langkah</span> Kami
            </h3>
          </div>

          {/* Desktop: horizontal timeline */}
          <div className="hidden md:block relative">
            {/* Line */}
            <div className="absolute top-5 left-0 right-0 h-px bg-white/10" />
            <div
              className="absolute top-5 left-0 h-px bg-gradient-to-r from-gold to-gold/30 transition-all duration-1000"
              style={{ width: activeLine >= 0 ? `${((activeLine + 1) / timeline.length) * 100}%` : '0%' }}
            />

            <div className="grid grid-cols-4 gap-6 relative">
              {timeline.map((t, i) => (
                <div key={i} className={`flex flex-col items-center text-center transition-all duration-500 ${
                  activeLine >= i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  {/* Dot */}
                  <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center mb-6 transition-all duration-300 ${
                    activeLine >= i
                      ? 'border-gold bg-gold/20 shadow-lg shadow-gold/30'
                      : 'border-white/20 bg-brown-950'
                  }`}>
                    <div className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                      activeLine >= i ? 'bg-gold' : 'bg-white/20'
                    }`} />
                  </div>
                  <span className="font-display text-gold font-black text-xl mb-2">{t.year}</span>
                  <h4 className="text-white font-semibold text-sm mb-2">{t.title}</h4>
                  <p className="text-brown-400 text-xs leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: vertical timeline */}
          <div className="md:hidden relative pl-8">
            {/* Vertical line */}
            <div className="absolute left-3 top-0 bottom-0 w-px bg-white/10" />
            <div
              className="absolute left-3 top-0 w-px bg-gradient-to-b from-gold to-gold/20 transition-all duration-1000"
              style={{ height: activeLine >= 0 ? `${((activeLine + 1) / timeline.length) * 100}%` : '0%' }}
            />

            <div className="flex flex-col gap-10">
              {timeline.map((t, i) => (
                <div key={i} className={`relative transition-all duration-500 ${
                  activeLine >= i ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}>
                  {/* Dot */}
                  <div className={`absolute -left-[1.85rem] top-1 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    activeLine >= i ? 'border-gold bg-gold/30' : 'border-white/20 bg-brown-950'
                  }`} />
                  <span className="font-display text-gold font-black text-lg">{t.year}</span>
                  <h4 className="text-white font-semibold text-sm mt-1 mb-1">{t.title}</h4>
                  <p className="text-brown-400 text-xs leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
