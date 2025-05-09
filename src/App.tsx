import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WorkSection from './components/WorkSection';
import Services from './components/Services';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-950 to-dark-900 text-white relative overflow-hidden">
      <ParticlesBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <WorkSection />
          <Services />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;