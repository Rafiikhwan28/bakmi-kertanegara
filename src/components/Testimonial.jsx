import React from 'react';

const reviews = [
  { name: 'Budi Santoso',  role: 'Pelanggan Setia',  text: 'Sudah 10 tahun jadi langganan. Rasanya tidak pernah berubah — selalu konsisten dan bikin kangen.', stars: 5 },
  { name: 'Siti Rahayu',   role: 'Food Blogger',     text: 'Kuah kaldunya benar-benar autentik dan dalam. Tidak ada yang bisa menandingi di Jakarta.', stars: 5 },
  { name: 'Ahmad Fauzi',   role: 'Pelanggan Baru',   text: 'Pertama kali coba langsung ketagihan. Bakmi gorengnya juara — bumbu meresap sempurna.', stars: 5 },
];

export default function Testimonial() {
  return (
    <section className="py-28 bg-brown-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">Ulasan</p>
          <h2 className="font-display text-5xl font-black text-white">
            Kata <span className="text-gold italic">Mereka</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="relative bg-brown-950/60 border border-white/5 rounded-3xl p-8 hover:border-gold/20 transition-all duration-300 group">
              {/* Quote mark */}
              <span className="font-display text-7xl text-gold/10 absolute top-4 right-6 leading-none select-none group-hover:text-gold/20 transition-colors">"</span>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <span key={j} className="text-gold text-sm">★</span>
                ))}
              </div>

              <p className="text-brown-300 text-sm leading-relaxed mb-8 relative z-10">"{r.text}"</p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center font-display font-bold text-gold">
                  {r.name[0]}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{r.name}</div>
                  <div className="text-brown-500 text-xs">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
