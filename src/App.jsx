import React from 'react';
import Navbar  from './components/Navbar';
import Hero    from './components/Hero';
import Menu    from './components/Menu';
import Gallery from './components/Gallery';
import About   from './components/About';
import Footer  from './components/Footer';

function App() {
  return (
    <div className="bg-white min-h-screen" style={{ opacity: 1, transition: 'opacity 0.4s ease' }}>
      <Navbar />
      <Hero />
      <Menu />
      <Gallery />
      <About />
      <Footer />
    </div>
  );
}

export default App;
