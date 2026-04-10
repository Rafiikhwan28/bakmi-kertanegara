import React from 'react';
import product2 from '../assets/product2.jpeg';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-image">
        <img src={product2} alt="Tentang Bakmi Kertanegara" />
      </div>
      <div className="about-content">
        <h2>Tentang Kami</h2>
        <p>
          Bakmi Kertanegara hadir dengan semangat melestarikan cita rasa bakmi autentik
          yang telah diwariskan turun-temurun. Setiap mangkuk kami dibuat dengan penuh
          cinta menggunakan bahan-bahan segar pilihan.
        </p>
        <p>
          Kami percaya bahwa makanan yang baik bukan hanya soal rasa, tapi juga soal
          kenangan dan kehangatan yang tercipta di setiap meja makan.
        </p>
        <div className="about-stats">
          <div className="stat">
            <span className="stat-number">15+</span>
            <span className="stat-label">Tahun Berpengalaman</span>
          </div>
          <div className="stat">
            <span className="stat-number">10K+</span>
            <span className="stat-label">Pelanggan Setia</span>
          </div>
          <div className="stat">
            <span className="stat-number">12</span>
            <span className="stat-label">Varian Menu</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
