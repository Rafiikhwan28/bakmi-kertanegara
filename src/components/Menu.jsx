import React, { useState } from 'react';
import p1 from '../assets/product1.jpeg';
import p2 from '../assets/product2.jpeg';
import p3 from '../assets/product3.jpeg';
import p4 from '../assets/product4.jpeg';
import p5 from '../assets/product5.jpeg';
import p6 from '../assets/product6.jpeg';
import MenuDetail from './MenuDetail';

const categories = ['Semua', 'Bakmi Kuah', 'Bakmi Goreng', 'Pelengkap'];

const items = [
  {
    id: 1, name: 'Bakmi Ayam Original', cat: 'Bakmi Kuah', price: '35.000',
    desc: 'Mie segar, ayam cincang, jamur, kuah kaldu bening',
    longDesc: 'Mie segar buatan sendiri dengan topping ayam cincang berbumbu, jamur shiitake, dan kuah kaldu bening yang dimasak 6 jam. Disajikan hangat dengan taburan bawang goreng dan daun bawang.',
    img: p1, badge: 'Best Seller', big: true, discount: null, rating: 5,
    customerCount: '2.5K',
    avatars: ['#d4a017','#7a3d00','#c9a87c'],
    avatarInitials: ['B','S','R'],
    features: [
      { icon: '🍜', label: 'Mie Segar',      desc: 'Dibuat fresh setiap hari tanpa pengawet' },
      { icon: '🍗', label: 'Ayam Pilihan',   desc: 'Ayam kampung segar, dipotong harian' },
      { icon: '🫙', label: 'Kaldu 6 Jam',    desc: 'Dimasak perlahan untuk rasa yang dalam' },
      { icon: '🌿', label: 'Tanpa MSG',       desc: 'Bumbu alami, sehat untuk keluarga' },
    ],
  },
  {
    id: 2, name: 'Bakmi Ayam Spesial', cat: 'Bakmi Kuah', price: '42.000',
    desc: 'Ayam panggang, pangsit goreng, kuah kaldu sapi pekat',
    longDesc: 'Versi spesial dengan ayam panggang berbumbu kecap, pangsit goreng renyah, dan kuah kaldu sapi pekat yang kaya rasa. Pilihan sempurna untuk makan siang yang memuaskan.',
    img: p2, badge: 'Spesial', big: false, discount: null, rating: 5,
    customerCount: '1.8K',
    avatars: ['#5c2d00','#d4a017','#9a5a1a'],
    avatarInitials: ['A','D','F'],
    features: [
      { icon: '🔥', label: 'Ayam Panggang',  desc: 'Dipanggang dengan bumbu kecap spesial' },
      { icon: '🥟', label: 'Pangsit Goreng', desc: 'Renyah di luar, juicy di dalam' },
      { icon: '🐄', label: 'Kaldu Sapi',     desc: 'Kuah pekat dari tulang sapi pilihan' },
      { icon: '⭐', label: 'Menu Spesial',   desc: 'Rekomendasi chef untuk pengalaman terbaik' },
    ],
  },
  {
    id: 3, name: 'Bakmi Kuah Baso', cat: 'Bakmi Kuah', price: '38.000',
    desc: 'Baso sapi kenyal, sayuran segar, kuah gurih',
    longDesc: 'Perpaduan mie segar dengan baso sapi kenyal buatan sendiri, sayuran segar, dan kuah gurih yang menyegarkan. Cocok untuk semua usia.',
    img: p3, badge: null, big: false, discount: null, rating: 4,
    customerCount: '1.2K',
    avatars: ['#3b1a00','#c9a87c','#d4a017'],
    avatarInitials: ['M','N','P'],
    features: [
      { icon: '🥩', label: 'Baso Sapi',      desc: 'Dibuat dari daging sapi segar, kenyal alami' },
      { icon: '🥬', label: 'Sayuran Segar',  desc: 'Pakcoy dan wortel segar setiap hari' },
      { icon: '🍜', label: 'Mie Segar',      desc: 'Mie kuning segar tanpa pengawet' },
      { icon: '💧', label: 'Kuah Gurih',     desc: 'Kaldu bening dengan rempah pilihan' },
    ],
  },
  {
    id: 4, name: 'Bakmi Goreng', cat: 'Bakmi Goreng', price: '36.000',
    desc: 'Bumbu rahasia, telur mata sapi, aroma wok yang khas',
    longDesc: 'Mie goreng dengan bumbu rahasia turun-temurun, dimasak di atas wok panas dengan aroma smoky yang khas. Disajikan dengan telur mata sapi dan acar timun.',
    img: p4, badge: 'Favorit', big: false, discount: 10, rating: 5,
    customerCount: '3K',
    avatars: ['#d4a017','#5c2d00','#9a5a1a'],
    avatarInitials: ['R','T','Y'],
    features: [
      { icon: '🔥', label: 'Wok Hei',        desc: 'Dimasak di wok panas untuk aroma smoky' },
      { icon: '🥚', label: 'Telur Mata Sapi', desc: 'Telur kampung segar di atas mie' },
      { icon: '🌶️', label: 'Bumbu Rahasia',  desc: 'Resep turun-temurun sejak generasi pertama' },
      { icon: '🥒', label: 'Acar Segar',     desc: 'Pelengkap acar timun dan cabai rawit' },
    ],
  },
  {
    id: 5, name: 'Pangsit Goreng', cat: 'Pelengkap', price: '18.000',
    desc: 'Kulit renyah, isi ayam & udang, cocol saus spesial',
    longDesc: 'Pangsit dengan kulit tipis renyah, isi campuran ayam dan udang segar berbumbu. Disajikan dengan saus cocol spesial berbahan dasar kecap dan cabai.',
    img: p5, badge: null, big: false, discount: null, rating: 4,
    customerCount: '900',
    avatars: ['#c9a87c','#3b1a00','#d4a017'],
    avatarInitials: ['K','L','O'],
    features: [
      { icon: '🦐', label: 'Ayam & Udang',   desc: 'Isian segar campuran ayam dan udang' },
      { icon: '🥠', label: 'Kulit Tipis',    desc: 'Renyah sempurna, tidak berminyak' },
      { icon: '🫙', label: 'Saus Spesial',   desc: 'Saus cocol kecap-cabai buatan sendiri' },
      { icon: '🍽️', label: 'Pelengkap',     desc: 'Cocok dipadukan dengan semua menu bakmi' },
    ],
  },
  {
    id: 6, name: 'Bakmi Komplit', cat: 'Bakmi Kuah', price: '55.000',
    desc: 'Ayam, baso, pangsit, chasiu — semua dalam satu mangkuk',
    longDesc: 'Satu mangkuk berisi semua yang terbaik: mie segar, ayam panggang, baso sapi, pangsit goreng, dan chasiu babi/ayam. Pengalaman bakmi paling lengkap yang bisa Anda nikmati.',
    img: p6, badge: 'Premium', big: true, discount: null, rating: 5,
    customerCount: '4K',
    avatars: ['#d4a017','#7a3d00','#c9a87c'],
    avatarInitials: ['V','W','X'],
    features: [
      { icon: '👑', label: 'All-in-One',     desc: 'Ayam, baso, pangsit, chasiu dalam satu mangkuk' },
      { icon: '🏆', label: 'Menu Premium',   desc: 'Pilihan terbaik untuk pengalaman lengkap' },
      { icon: '🍜', label: 'Porsi Besar',    desc: 'Porsi jumbo yang mengenyangkan' },
      { icon: '✨', label: 'Chef Special',   desc: 'Rekomendasi utama dari dapur kami' },
    ],
  },
];

export default function Menu() {
  const [active,   setActive]   = useState('Semua');
  const [hovered,  setHovered]  = useState(null);
  const [selected, setSelected] = useState(null);

  const filtered = active === 'Semua' ? items : items.filter(i => i.cat === active);

  return (
    <>
      <section id="menu" className="py-28 bg-brown-950">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">Pilihan Kami</p>
              <h2 className="font-display text-5xl md:text-6xl font-black text-white leading-tight">
                Menu <span className="text-gold italic">Spesial</span>
              </h2>
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map(cat => (
                <button key={cat} onClick={() => setActive(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                    active === cat
                      ? 'bg-gold text-brown-950 shadow-lg shadow-gold/30'
                      : 'border border-white/10 text-brown-300 hover:border-gold/50 hover:text-gold'
                  }`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(item => (
              <div key={item.id}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setSelected(item)}
                className={`relative group rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 ${
                  hovered === item.id ? 'ring-1 ring-gold/60 scale-[1.01]' : ''
                }`}
                style={{ aspectRatio: item.big ? '4/3' : '1/1' }}>

                <img src={item.img} alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                <div className="absolute inset-0 bg-gradient-to-t from-brown-950 via-brown-950/40 to-transparent" />

                {item.badge && (
                  <span className="absolute top-4 left-4 bg-gold text-brown-950 text-[10px] font-black px-3 py-1 rounded-full tracking-wider uppercase">
                    {item.badge}
                  </span>
                )}

                {/* "Tap to detail" hint */}
                <div className={`absolute top-4 right-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1 text-[10px] text-white font-medium tracking-wide transition-all duration-300 ${
                  hovered === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                }`}>
                  Lihat Detail →
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-brown-400 text-xs mb-1 tracking-wide">{item.cat}</p>
                  <h3 className="font-display text-white font-bold text-xl leading-tight mb-1">{item.name}</h3>
                  <p className={`text-brown-300 text-xs leading-relaxed transition-all duration-300 overflow-hidden ${
                    hovered === item.id ? 'max-h-12 opacity-100 mb-3' : 'max-h-0 opacity-0'
                  }`}>
                    {item.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gold font-black text-lg font-display">Rp {item.price}</span>
                    <span className={`text-[10px] text-brown-400 tracking-widest uppercase transition-opacity duration-300 ${
                      hovered === item.id ? 'opacity-100' : 'opacity-0'
                    }`}>per porsi</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-brown-600 text-xs mt-12 tracking-widest uppercase">
            Semua menu tersedia untuk dine-in & take away
          </p>
        </div>
      </section>

      {/* Detail Modal */}
      {selected && (
        <MenuDetail item={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
