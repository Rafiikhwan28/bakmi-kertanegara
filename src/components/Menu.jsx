import React, { useState } from 'react';
import useReveal from '../hooks/useReveal';
import f128 from '../assets/Foto/Fotoinn128.jpg';
import f132 from '../assets/Foto/Fotoinn132.jpg';
import f135 from '../assets/Foto/Fotoinn135.jpg';
import f137 from '../assets/Foto/Fotoinn137.jpg';
import f141 from '../assets/Foto/Fotoinn141.jpg';
import f144 from '../assets/Foto/Fotoinn144.jpg';
import f149 from '../assets/Foto/Fotoinn149.jpg';
import f151 from '../assets/Foto/Fotoinn151.jpg';
import f156 from '../assets/Foto/Fotoinn156.jpg';
import f158 from '../assets/Foto/steakLadahitam.jpeg'
import MenuDetail from './MenuDetail';

const categories = ['Semua', 'Menu Utama', 'Paket', 'Side Dish'];

const items = [
  /* ── MENU UTAMA ── */
  {
    id: 1, name: 'Bakmi Ayam Kertanegara', cat: 'Menu Utama', price: '23.000',
    desc: 'Gurih, lembut, nyaman di lidah — dijamin tidak bikin kembung!',
    longDesc: 'Bakmi ayam Kertanegara yang gurih, lembut, nyaman di lidah, dan super ringan bahkan perutmu tetap happy, dijamin tidak menyebabkan kembung! Sekali coba, langsung ketagihan!',
    img: f128, badge: 'Best Seller', discount: null,
    features: [
      { icon: '🍜', label: 'Home-made Mie',   desc: 'Mie dibuat sendiri setiap hari' },
      { icon: '🍗', label: 'Ayam Pilihan',    desc: 'Ayam segar berkualitas tinggi' },
      { icon: '🫙', label: 'Kaldu 6 Jam',     desc: 'Dimasak perlahan untuk rasa yang dalam' },
      { icon: '🌿', label: 'Tanpa Pengawet',  desc: 'Bahan alami, sehat untuk keluarga' },
    ],
  },
  {
    id: 2, name: 'Bakmi Ayam Jamur', cat: 'Menu Utama', price: '26.000',
    desc: 'Gurihnya ayam bertemu manisnya jamur — perpaduan rasa khas Indonesia!',
    longDesc: 'Gurihnya ayam bertemu manisnya jamur, perpaduan rasa khas Indonesia yang bikin nagih! Setiap suapan seperti pelukan hangat dari kampung halaman. Nikmat mana yang kau dustakan!',
    img: f132, badge: 'Best Seller', discount: null,
    features: [
      { icon: '🍜', label: 'Home-made Mie',   desc: 'Mie dibuat sendiri setiap hari' },
      { icon: '🍄', label: 'Jamur Pilihan',   desc: 'Jamur segar berkualitas tinggi' },
      { icon: '🫙', label: 'Kaldu 6 Jam',     desc: 'Dimasak perlahan untuk rasa yang dalam' },
      { icon: '🌿', label: 'Tanpa Pengawet',  desc: 'Bahan alami, sehat untuk keluarga' },
    ],
  },
  {
    id: 3, name: 'Bakmi Ayam Lada Hitam', cat: 'Menu Utama', price: '33.000',
    desc: 'Gurihnya ayam bertemu saus lada hitam — perpaduan rasa yang epic!',
    longDesc: 'Gurihnya ayam bertemu Saus Lada Hitam perpaduan rasa yang epic yang bikin gairah makan bertambah! Rasakan sendiri kelezatannya!',
    img: f135, badge: null, discount: null,
    features: [
      { icon: '🍜', label: 'Home-made Mie',    desc: 'Mie dibuat sendiri setiap hari' },
      { icon: '🌶️', label: 'Lada Hitam',       desc: 'Saus lada hitam pilihan yang kaya rasa' },
      { icon: '🫙', label: 'Kaldu 6 Jam',      desc: 'Dimasak perlahan untuk rasa yang dalam' },
      { icon: '🌿', label: 'Tanpa Pengawet',   desc: 'Bahan alami, sehat untuk keluarga' },
    ],
  },
  {
    id: 4, name: 'Bakmi Ayam Steak Lada Hitam', cat: 'Menu Utama', price: '37.000',
    desc: 'Ayam steak lada hitam di atas iron plate panas — satu gigitan langsung berasa mewah!',
    longDesc: 'Home-made mie + bumbu rahasia turun-temurun + ayam steak lada hitam yang menggoda mata dan lidah! Disajikan di atas iron plate yang panas. Satu gigitan, langsung berasa mewah. Ini bakmi yang bikin kamu bilang "Wah, enak banget!"',
    img: f158, badge: 'Best Seller', discount: null,
    features: [
      { icon: '🥩', label: 'Ayam Steak',      desc: 'Ayam steak lada hitam yang menggoda' },
      { icon: '🔥', label: 'Iron Plate',       desc: 'Disajikan di atas iron plate panas' },
      { icon: '🫙', label: 'Bumbu Rahasia',    desc: 'Resep turun-temurun khas Kertanegara' },
      { icon: '🌿', label: 'Tanpa Pengawet',   desc: 'Bahan alami, sehat untuk keluarga' },
    ],
  },

  /* ── SIDE DISH ── */
  {
    id: 5, name: 'Pangsit Goreng / Rebus', cat: 'Side Dish', price: '5.000/pcs',
    desc: 'Pas digigit renyahnya bikin nagih — pangsit terbaik dengan isian ayam pilihan!',
    longDesc: 'Pas digigit renyahnya bikin nagih. Kulit pangsit home-made dengan isian ayam pilihan berkualitas. Tanpa bahan pengawet. Ini adalah pangsit terbaik!',
    img: f137, badge: null, discount: null,
    features: [
      { icon: '🥟', label: 'Home-made Kulit', desc: 'Kulit pangsit dibuat sendiri' },
      { icon: '🍗', label: 'Isian Ayam',      desc: 'Isian ayam dengan bahan pilihan' },
      { icon: '🔥', label: 'Paling Renyah',   desc: 'Tekstur renyah sempurna' },
      { icon: '🌿', label: 'Tanpa Pengawet',  desc: 'Bahan alami tanpa pengawet' },
    ],
  },

  /* ── PAKET ── */
  {
    id: 6, name: 'Paket Bakmi Ayam Kertanegara', cat: 'Paket', price: '35.000',
    desc: 'Bakmi Ayam + 2 Pangsit + Es Teh Manis — cocok untuk hidup lebih lengkap!',
    longDesc: 'Paket Bakmi Ayam + 2 Pangsit Goreng/rebus + Esteh Manis cocok untuk kamu yang pengen hidup lebih lengkap. Bakmi ini kamu banget!',
    img: f151, badge: 'Paket', discount: null,
    features: [
      { icon: '🍜', label: 'Bakmi Ayam',      desc: '1 porsi Bakmi Ayam Kertanegara' },
      { icon: '🥟', label: '2 Pangsit',       desc: 'Goreng atau rebus sesuai selera' },
      { icon: '🧋', label: 'Es Teh Manis',    desc: 'Minuman segar pelengkap' },
      { icon: '💰', label: 'Lebih Hemat',     desc: 'Harga paket lebih ekonomis' },
    ],
  },
  {
    id: 7, name: 'Paket Bakmi Ayam Jamur', cat: 'Paket', price: '38.000',
    desc: 'Bakmi Ayam Jamur + 2 Pangsit + Es Teh Manis — definisi nikmat yang sebenarnya!',
    longDesc: '1 Porsi Bakmi Ayam Jamur + 2 Pangsit Goreng/rebus + Esteh Manis. Gurihnya ayam bertemu manisnya jamur, perpaduan rasa khas Indonesia yang bikin nagih! Ini definisi nikmat yang sebenarnya!',
    img: f149, badge: 'Paket', discount: null,
    features: [
      { icon: '🍜', label: 'Bakmi Ayam Jamur', desc: '1 porsi Bakmi Ayam Jamur' },
      { icon: '🥟', label: '2 Pangsit',        desc: 'Goreng atau rebus sesuai selera' },
      { icon: '🧋', label: 'Es Teh Manis',     desc: 'Minuman segar pelengkap' },
      { icon: '💰', label: 'Lebih Hemat',      desc: 'Harga paket lebih ekonomis' },
    ],
  },
  {
    id: 8, name: 'Paket Bakmi Ayam Lada Hitam', cat: 'Paket', price: '45.000',
    desc: 'Bakmi Lada Hitam + 2 Pangsit + Es Teh Manis — rasa epic dalam satu paket!',
    longDesc: '1 Bakmi Lada Hitam + 2 Pangsit Goreng + Esteh Manis. Gurihnya ayam bertemu Saus Lada Hitam perpaduan rasa yang epic yang bikin gairah makan bertambah! Rasakan sendiri kelezatannya!',
    img: f144, badge: 'Paket', discount: null,
    features: [
      { icon: '🍜', label: 'Bakmi Lada Hitam', desc: '1 porsi Bakmi Ayam Lada Hitam' },
      { icon: '🥟', label: '2 Pangsit',        desc: 'Goreng atau rebus sesuai selera' },
      { icon: '🧋', label: 'Es Teh Manis',     desc: 'Minuman segar pelengkap' },
      { icon: '💰', label: 'Lebih Hemat',      desc: 'Harga paket lebih ekonomis' },
    ],
  },
  {
    id: 9, name: 'Paket Bakmi Steak Lada Hitam', cat: 'Paket', price: '47.000',
    desc: 'Bakmi Steak Lada Hitam + 2 Pangsit + Es Teh Manis — mewah dalam satu paket!',
    longDesc: '1 Bakmi Steak Lada Hitam + 2 Pangsit Goreng + Esteh Manis. Home-made mie + bumbu rahasia turun-temurun + ayam steak lada hitam yang menggoda mata dan lidah! Disajikan di atas iron plate panas.',
    img: f158, badge: 'Menu Favorite', discount: null,
    features: [
      { icon: '🥩', label: 'Bakmi Steak',     desc: '1 porsi Bakmi Ayam Steak Lada Hitam' },
      { icon: '🥟', label: '2 Pangsit',       desc: 'Goreng atau rebus sesuai selera' },
      { icon: '🧋', label: 'Es Teh Manis',    desc: 'Minuman segar pelengkap' },
      { icon: '💰', label: 'Lebih Hemat',     desc: 'Harga paket lebih ekonomis' },
    ],
  },
  {
    id: 10, name: 'Paket Romantis Bakmi Berdua', cat: 'Paket', price: '70.000',
    desc: '2 Paket Bakmi Ayam + 4 Pangsit + 2 Es Teh Manis — berdua lebih hemat!',
    longDesc: '2 Paket Bakmi Ayam + 4 Pangsit Goreng/rebus + 2 Esteh Manis cocok untuk kamu yang pengen hidup lebih lengkap. Berdua lebih hemat!',
    img: f156, badge: 'Best Seller', discount: null,
    features: [
      { icon: '👫', label: 'Untuk 2 Orang',   desc: '2 porsi Bakmi Ayam lengkap' },
      { icon: '🥟', label: '4 Pangsit',       desc: 'Goreng atau rebus sesuai selera' },
      { icon: '🧋', label: '2 Es Teh Manis',  desc: '2 minuman segar pelengkap' },
      { icon: '💰', label: 'Berdua Hemat',    desc: 'Lebih hemat dibanding beli satuan' },
    ],
  },
  {
    id: 11, name: 'Paket Sahabat Berdua', cat: 'Paket', price: '75.000',
    desc: '2 Paket Bakmi Jamur + 4 Pangsit + 2 Es Teh Manis — berdua lebih hemat!',
    longDesc: '2 Paket Bakmi Jamur + 4 Pangsit Goreng/rebus + 2 Esteh Manis cocok untuk kamu yang mengerti pentingnya persahabatan. Berdua lebih hemat!',
    img: f156, badge: 'Best Seller', discount: null,
    features: [
      { icon: '👫', label: 'Untuk 2 Orang',   desc: '2 porsi Bakmi Ayam Jamur lengkap' },
      { icon: '🥟', label: '4 Pangsit',       desc: 'Goreng atau rebus sesuai selera' },
      { icon: '🧋', label: '2 Es Teh Manis',  desc: '2 minuman segar pelengkap' },
      { icon: '💰', label: 'Berdua Hemat',    desc: 'Lebih hemat dibanding beli satuan' },
    ],
  },
  {
    id: 12, name: 'Paket Keluarga', cat: 'Paket', price: '100.000',
    desc: '3 Bakmi pilihan + 6 Pangsit + 3 Es Teh Manis — ciptakan memory bersama keluarga!',
    longDesc: '1 Bakmi Ayam + 1 Bakmi Ayam Jamur + 1 Bakmi Ayam Lada Hitam + 6 Pangsit Goreng/rebus + 3 Esteh Manis. Bersama keluarga ciptakan memory yang tak terlupakan.',
    img: f141, badge: 'Best Seller', discount: null,
    features: [
      { icon: '👨‍👩‍👧‍👦', label: 'Untuk 3 Orang',  desc: '3 porsi bakmi pilihan berbeda' },
      { icon: '🥟', label: '6 Pangsit',       desc: 'Goreng atau rebus sesuai selera' },
      { icon: '🧋', label: '3 Es Teh Manis',  desc: '3 minuman segar pelengkap' },
      { icon: '💰', label: 'Paling Hemat',    desc: 'Paket terlengkap untuk keluarga' },
    ],
  },
];

export default function Menu() {
  const [active,    setActive]    = useState('Semua');
  const [selected,  setSelected]  = useState(null);
  const [animating, setAnimating] = useState(false);
  const [displayed, setDisplayed] = useState('Semua'); // kategori yang sedang ditampilkan
  const [headerRef, headerVisible] = useReveal(0.1);
  const [gridRef,   gridVisible]   = useReveal(0.05);

  const filtered = displayed === 'Semua' ? items : items.filter(i => i.cat === displayed);

  /* Saat kategori berubah: fade out → ganti data → fade in */
  const handleCategoryChange = (cat) => {
    if (cat === active || animating) return;
    setActive(cat);
    setAnimating(true);
    setTimeout(() => {
      setDisplayed(cat);
      setAnimating(false);
    }, 280);
  };

  return (
    <>
      <section id="menu" className="py-14 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          {/* Header */}
          <div ref={headerRef} className={`flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-14 reveal ${headerVisible ? 'visible' : ''}`}>
            <div>
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
                Menu <span className="text-accent-600 italic">Spesial</span>
              </h2>
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map(cat => (
                <button key={cat} onClick={() => handleCategoryChange(cat)}
                  className={`px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-wide transition-all duration-300 ${
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
          <div
            ref={gridRef}
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5"
            style={{
              opacity:   animating ? 0 : 1,
              transform: animating ? 'translateY(12px)' : 'translateY(0)',
              transition: 'opacity 0.28s cubic-bezier(0.4,0,0.2,1), transform 0.28s cubic-bezier(0.4,0,0.2,1)',
            }}
          >
            {filtered.map((item, idx) => (
              <div key={item.id} onClick={() => setSelected(item)}
                className={`reveal ${gridVisible && !animating ? 'visible' : ''} group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col`}
                style={{ transitionDelay: gridVisible ? `${idx * 55}ms` : '0ms' }}>

                {/* Photo — aspect ratio 4:3 agar proporsional */}
                <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <img src={item.img} alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  {item.badge && (
                    <span className="absolute top-2 left-2 bg-accent-600 text-white text-[9px] font-black px-2 py-0.5 rounded-full tracking-wider uppercase shadow-glow">
                      {item.badge}
                    </span>
                  )}
                  {item.discount && (
                    <div className="absolute top-2 right-2 w-9 h-9 bg-green-500 rounded-full flex flex-col items-center justify-center shadow-lg">
                      <span className="text-white font-black text-xs leading-none">{item.discount}%</span>
                      <span className="text-white text-[7px] font-bold leading-none">OFF</span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex flex-col flex-1 p-3 md:p-4">
                  <span className="text-accent-500 text-[9px] font-semibold tracking-widest uppercase mb-1">{item.cat}</span>
                  <h3 className="font-display text-slate-900 font-bold text-sm md:text-base leading-snug mb-1.5 group-hover:text-accent-700 transition-colors duration-200 line-clamp-2">
                    {item.name}
                  </h3>
                  <p className="text-slate-400 text-[11px] leading-relaxed flex-1 mb-2 line-clamp-2">{item.desc}</p>
                  <div className="h-px bg-slate-100 mb-2" />
                  <div>
                    <span className="text-[9px] text-slate-400 uppercase tracking-wider block mb-0.5">Harga</span>
                    <span className="font-display text-base md:text-lg font-black text-accent-600">Rp {item.price}</span>
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
