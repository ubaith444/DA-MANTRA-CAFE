import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuPreview from './components/MenuPreview';
import Experience from './components/Experience';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-zinc-900 font-sans selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <MenuPreview />
        <Experience />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
