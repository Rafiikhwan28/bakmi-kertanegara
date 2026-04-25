import React, { useState } from 'react';
import f128 from '../assets/Foto/Fotoinn128.jpg';
import f132 from '../assets/Foto/Fotoinn132.jpg';
import f135 from '../assets/Foto/Fotoinn135.jpg';
import f137 from '../assets/Foto/Fotoinn137.jpg';
import f141 from '../assets/Foto/Fotoinn141.jpg';
import f144 from '../assets/Foto/Fotoinn144.jpg';
import f149 from '../assets/Foto/Fotoinn149.jpg';
import f151 from '../assets/Foto/Fotoinn151.jpg';
import f156 from '../assets/Foto/Fotoinn156.jpg';
import f157 from '../assets/Foto/Fotoinn157.jpg';
import MenuDetail from './MenuDetail';

const categories = ['Semua', 'Paket', 'Topping', 'Promo'];

const items = [
  {
    id: 1, name: 'Paket Bakmi Ayam', cat: 'Paket', price: '0.000',
    desc: 'Bakmi ayam dengan kuah kaldu bening, mie segar, dan topping pilihan',
    longDesc: 'Paket lengkap bakmi ayam dengan mie segar buatan sendiri, kuah kaldu bening yang dimasak 6 jam, ayam cincang berbumbu, jamur, dan taburan bawang goreng.',
    img: f128, badge: 'Best Seller', discount: null,
    features: [
      { icon: '🍜', label: 'Mie Segar',    desc: 'Dibuat fresh setiap hari tanpa pengawet' },
      { icon: '🍗', label: 'Ayam Pilihan', desc: 'Ayam kampung segar, dipotong harian' },
      { icon: '🫙', label: 'Kaldu 6 Jam',  desc: 'Dimasak perlahan untuk rasa yang dalam' },
      { icon: '🌿', label: 'Tanpa MSG',    desc: 'Bumbu alami, sehat untuk keluarga' },
    ],
  },
  {
    id: 2, name: 'Paket Bakmi Spesial', cat: 'Paket', price: '0.000',
    desc: 'Bakmi spesial dengan ayam panggang, pangsit, dan kuah sapi pekat',
    longDesc: 'Paket spesial dengan ayam panggang berbumbu kecap, pangsit goreng renyah, dan kuah kaldu sapi pekat yang kaya rasa. Pilihan sempurna untuk makan siang.',
    img: f132, badge: 'Spesial', discount: null,
    features: [
      { icon: '🔥', label: 'Ayam Panggang',  desc: 'Dipanggang dengan bumbu kecap spesial' },
      { icon: '🥟', label: 'Pangsit Goreng', desc: 'Renyah di luar, juicy di dalam' },
      { icon: '🐄', label: 'Kaldu Sapi',     desc: 'Kuah pekat dari tulang sapi pilihan' },
      { icon: '⭐', label: 'Menu Spesial',   desc: 'Rekomendasi chef untuk pengalaman terbaik' },
    ],
  },
  {
    id: 3, name: 'Paket Bakmi Komplit', cat: 'Paket', price: '0.000',
    desc: 'Ayam, baso, pangsit, chasiu — semua dalam satu mangkuk',
    longDesc: 'Satu mangkuk berisi semua yang terbaik: mie segar, ayam panggang, baso sapi, pangsit goreng, dan chasiu. Pengalaman bakmi paling lengkap.',
    img: f135, badge: 'Premium', discount: null,
    features: [
      { icon: '👑', label: 'All-in-One',   desc: 'Ayam, baso, pangsit, chasiu dalam satu mangkuk' },
      { icon: '🏆', label: 'Menu Premium', desc: 'Pilihan terbaik untuk pengalaman lengkap' },
      { icon: '🍜', label: 'Porsi Besar',  desc: 'Porsi jumbo yang mengenyangkan' },
      { icon: '✨', label: 'Chef Special', desc: 'Rekomendasi utama dari dapur kami' },
    ],
  },
  {
    id: 4, name: 'Paket Bakmi Goreng', cat: 'Paket', price: '0.000',
    desc: 'Bakmi goreng dengan bumbu rahasia dan telur mata sapi',
    longDesc: 'Mie goreng dengan bumbu rahasia turun-temurun, dimasak di atas wok panas dengan aroma smoky yang khas. Disajikan dengan telur mata sapi dan acar timun.',
    img: f137, badge: 'Favorit', discount: null,
    features: [
      { icon: '🔥', label: 'Wok Hei',        desc: 'Dimasak di wok panas untuk aroma smoky' },
      { icon: '🥚', label: 'Telur Mata Sapi', desc: 'Telur kampung segar di atas mie' },
      { icon: '🌶️', label: 'Bumbu Rahasia',  desc: 'Resep turun-temurun sejak generasi pertama' },
      { icon: '🥒', label: 'Acar Segar',     desc: 'Pelengkap acar timun dan cabai rawit' },
    ],
  },
  {
    id: 5, name: 'Topping Baso Sapi', cat: 'Topping', price: '0.000',
    desc: 'Baso sapi kenyal buatan sendiri, cocok untuk semua menu',
    longDesc: 'Baso sapi kenyal buatan sendiri dari daging sapi segar pilihan. Bisa ditambahkan ke menu bakmi manapun untuk menambah cita rasa.',
    img: f141, badge: null, discount: null,
    features: [
      { icon: '🥩', label: 'Daging Sapi',   desc: 'Dibuat dari daging sapi segar pilihan' },
      { icon: '🫙', label: 'Tanpa Pengawet', desc: 'Dibuat fresh setiap hari' },
      { icon: '🍜', label: 'Cocok Semua',   desc: 'Bisa ditambah ke menu apapun' },
      { icon: '💪', label: 'Kenyal Alami',  desc: 'Tekstur kenyal tanpa bahan kimia' },
    ],
  },
  {
    id: 6, name: 'Topping Pangsit Goreng', cat: 'Topping', price: '0.000',
    desc: 'Pangsit goreng renyah isi ayam dan udang segar',
    longDesc: 'Pangsit dengan kulit tipis renyah, isi campuran ayam dan udang segar berbumbu. Disajikan dengan saus cocol spesial kecap-cabai.',
    img: f144, badge: null, discount: null,
    features: [
      { icon: '🦐', label: 'Ayam & Udang', desc: 'Isian segar campuran ayam dan udang' },
      { icon: '🥠', label: 'Kulit Tipis',  desc: 'Renyah sempurna, tidak berminyak' },
      { icon: '🫙', label: 'Saus Spesial', desc: 'Saus cocol kecap-cabai buatan sendiri' },
      { icon: '🍽️', label: 'Pelengkap',   desc: 'Cocok dipadukan dengan semua menu bakmi' },
    ],
  },
  {
    id: 7, name: 'Topping Chasiu', cat: 'Topping', price: '0.000',
    desc: 'Chasiu daging babi/ayam panggang berbumbu manis gurih',
    longDesc: 'Chasiu panggang dengan bumbu kecap manis, bawang putih, dan rempah pilihan. Tekstur lembut dengan lapisan karamel yang menggugah selera.',
    img: f149, badge: null, discount: null,
    features: [
      { icon: '🔥', label: 'Dipanggang',    desc: 'Dipanggang dengan arang untuk aroma khas' },
      { icon: '🍯', label: 'Bumbu Manis',   desc: 'Kecap manis dan rempah pilihan' },
      { icon: '✂️', label: 'Iris Tipis',    desc: 'Diiris tipis untuk sajian yang cantik' },
      { icon: '⭐', label: 'Favorit Tamu',  desc: 'Topping paling banyak dipesan' },
    ],
  },
  {
    id: 8, name: 'Promo Paket Duo', cat: 'Promo', price: '0.000',
    desc: '2 porsi bakmi ayam original dengan harga spesial',
    longDesc: 'Promo hemat untuk berdua! Dapatkan 2 porsi bakmi ayam original dengan kuah kaldu bening, mie segar, dan topping lengkap dengan harga spesial.',
    img: f151, badge: 'Promo', discount: 15,
    features: [
      { icon: '�', label: 'Untuk 2 Orang', desc: '2 porsi penuh dalam satu paket hemat' },
      { icon: '💰', label: 'Hemat 15%',     desc: 'Lebih hemat dibanding beli satuan' },
      { icon: '🍜', label: 'Mie Segar',     desc: 'Mie segar buatan sendiri setiap hari' },
      { icon: '🎉', label: 'Terbatas',      desc: 'Promo berlaku selama persediaan ada' },
    ],
  },
  {
    id: 9, name: 'Promo Paket Keluarga', cat: 'Promo', price: '0.000',
    desc: '4 porsi bakmi pilihan dengan minuman gratis',
    longDesc: 'Paket keluarga terlengkap! 4 porsi bakmi pilihan (bisa mix menu) ditambah 4 minuman es teh gratis. Cocok untuk makan bersama keluarga.',
    img: f156, badge: 'Promo', discount: 20,
    features: [
      { icon: '👨‍👩‍👧‍👦', label: 'Untuk 4 Orang', desc: '4 porsi bakmi pilihan bebas mix menu' },
      { icon: '🥤', label: 'Minuman Gratis', desc: '4 es teh manis gratis untuk keluarga' },
      { icon: '💰', label: 'Hemat 20%',      desc: 'Penghematan terbesar untuk keluarga' },
      { icon: '�', label: 'Mix Menu',       desc: 'Bebas pilih menu berbeda tiap porsi' },
    ],
  },
  {
    id: 10, name: 'Promo Happy Hour', cat: 'Promo', price: '0.000',
    desc: 'Bakmi ayam original harga spesial jam 14.00–17.00',
    longDesc: 'Nikmati bakmi ayam original dengan harga spesial setiap hari pukul 14.00–17.00 WIB. Promo happy hour untuk menemani sore hari Anda.',
    img: f157, badge: 'Promo', discount: 20,
    features: [
      { icon: '⏰', label: 'Happy Hour',    desc: 'Berlaku setiap hari 14.00–17.00 WIB' },
      { icon: '💰', label: 'Hemat 20%',     desc: 'Harga spesial di jam tertentu' },
      { icon: '🍜', label: 'Menu Pilihan',  desc: 'Bakmi ayam original porsi penuh' },
      { icon: '📅', label: 'Setiap Hari',   desc: 'Berlaku setiap hari tanpa terkecuali' },
    ],
  },
];

export default function Menu() {
  const [active,   setActive]   = useState('Semua');
  const [selected, setSelected] = useState(null);

  const filtered = active === 'Semua' ? items : items.filter(i => i.cat === active);

  return (
    <>
      <section id="menu" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="inline-block bg-accent-100 text-accent-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-3 tracking-wider">
                Pilihan Kami
              </span>
              <h2 className="font-display text-5xl md:text-6xl font-black text-slate-900 leading-tight">
                Menu <span className="text-accent-600 italic">Spesial</span>
              </h2>
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map(cat => (
                <button key={cat} onClick={() => setActive(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                    active === cat
                      ? 'bg-accent-600 text-white shadow-glow scale-105'
                      : 'bg-slate-100 text-slate-500 hover:bg-accent-100 hover:text-accent-600'
                  }`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelected(item)}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-soft hover:shadow-card hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col"
              >
                {/* Photo */}
                <div className="relative overflow-hidden" style={{ height: '220px' }}>
                  <img src={item.img} alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                  {item.badge && (
                    <span className="absolute top-3 left-3 bg-accent-600 text-white text-[10px] font-black px-2.5 py-1 rounded-full tracking-wider uppercase shadow-glow">
                      {item.badge}
                    </span>
                  )}
                  {item.discount && (
                    <div className="absolute top-3 right-3 w-11 h-11 bg-green-500 rounded-full flex flex-col items-center justify-center shadow-lg">
                      <span className="text-white font-black text-sm leading-none">{item.discount}%</span>
                      <span className="text-white text-[8px] font-bold leading-none">OFF</span>
                    </div>
                  )}

                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur text-accent-600 text-[10px] font-bold px-4 py-1.5 rounded-full shadow transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 whitespace-nowrap">
                    Lihat Detail →
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-col flex-1 p-5">
                  <div className="mb-2">
                    <span className="text-accent-500 text-[10px] font-semibold tracking-widest uppercase">
                      {item.cat}
                    </span>
                  </div>
                  <h3 className="font-display text-slate-900 font-bold text-lg leading-snug mb-2 group-hover:text-accent-700 transition-colors duration-200">
                    {item.name}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed flex-1 mb-4">{item.desc}</p>
                  <div className="h-px bg-slate-100 mb-4" />
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-0.5">Harga</span>
                    <span className="font-display text-xl font-black text-accent-600">Rp {item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-300 text-xs mt-14 tracking-widest uppercase">
            Semua menu tersedia untuk dine-in & take away
          </p>
        </div>
      </section>

      {selected && <MenuDetail item={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
