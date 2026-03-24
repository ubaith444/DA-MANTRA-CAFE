import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'Menu', 'Experience', 'Reviews', 'Contact'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary/95 backdrop-blur-sm shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer text-white font-serif text-2xl font-bold">
            Da Mantra
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-white hover:text-accent font-medium transition-colors">
                {link}
              </a>
            ))}
            <a href="#contact" className="flex items-center gap-2 bg-accent text-primary px-5 py-2.5 rounded-full font-semibold hover:bg-white transition-colors shadow-lg">
              <MapPin size={18} />
              Get Directions
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-accent focus:outline-none"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-primary/95 backdrop-blur-md shadow-xl border-t border-white/10">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 text-white hover:text-accent font-medium border-b border-white/5"
              >
                {link}
              </a>
            ))}
            <div className="pt-4">
               <a href="#contact" className="flex items-center justify-center gap-2 w-full bg-accent text-primary px-5 py-3 rounded-full font-semibold hover:bg-white transition-colors">
                <MapPin size={18} />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
