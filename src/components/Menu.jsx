import React from 'react';
import product1 from '../assets/product1.jpeg';
import product2 from '../assets/product2.jpeg';
import product3 from '../assets/product3.jpeg';
import product4 from '../assets/product4.jpeg';
import product5 from '../assets/product5.jpeg';
import product6 from '../assets/product6.jpeg';
import './Menu.css';

const menuItems = [
  { id: 1, name: 'Bakmi Ayam Original', desc: 'Bakmi segar dengan topping ayam cincang dan jamur pilihan', price: 'Rp 35.000', img: product1 },
  { id: 2, name: 'Bakmi Ayam Spesial', desc: 'Bakmi dengan ayam panggang, pangsit goreng, dan kuah kaldu sapi', price: 'Rp 42.000', img: product2 },
  { id: 3, name: 'Bakmi Kuah Baso', desc: 'Bakmi kuah dengan baso sapi kenyal dan sayuran segar', price: 'Rp 38.000', img: product3 },
  { id: 4, name: 'Bakmi Goreng', desc: 'Bakmi goreng dengan bumbu rahasia dan telur mata sapi', price: 'Rp 36.000', img: product4 },
  { id: 5, name: 'Pangsit Goreng', desc: 'Pangsit renyah isi ayam dan udang, cocok sebagai pelengkap', price: 'Rp 18.000', img: product5 },
  { id: 6, name: 'Bakmi Komplit', desc: 'Bakmi lengkap dengan ayam, baso, pangsit, dan chasiu', price: 'Rp 55.000', img: product6 },
];

const Menu = () => {
  return (
    <section className="menu-section" id="menu">
      <div className="menu-header">
        <h2>Menu Kami</h2>
        <p>Pilihan bakmi terbaik dengan bahan-bahan segar berkualitas</p>
      </div>
      <div className="menu-grid">
        {menuItems.map(item => (
          <div className="menu-card" key={item.id}>
            <div className="menu-card-img">
              <img src={item.img} alt={item.name} />
            </div>
            <div className="menu-card-body">
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <span className="menu-price">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
