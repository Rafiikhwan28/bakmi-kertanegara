import React from 'react';
import Navbar      from './components/Navbar';
import Hero        from './components/Hero';
import Menu        from './components/Menu';
import Gallery     from './components/Gallery';
import About       from './components/About';
import Testimonial from './components/Testimonial';
import Contact     from './components/Contact';
import Footer      from './components/Footer';

function App() {
  return (
    <div className="bg-brown-950 min-h-screen">
      <Navbar />
      <Hero />
      <Menu />
      <Gallery />
      <About />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
