import React from 'react';
import { MapPin, Utensils } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-gray-900"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
        }}
        role="img"
        aria-label="Beautiful garden cafe setting at Da Mantra"
      >
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-6 animate-fade-in-up">
          A Peaceful Garden Café Experience in Tiruvannamalai
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-200 mb-10 font-medium tracking-wide">
          Vegan Food <span className="mx-2 text-accent">•</span> Outdoor Seating <span className="mx-2 text-accent">•</span> Live Music
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#contact" 
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary font-bold rounded-full hover:bg-white transition-transform hover:scale-105 active:scale-95 shadow-xl"
          >
            <MapPin size={20} />
            Get Directions
          </a>
          <a 
            href="#menu" 
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white backdrop-blur-md border border-white/20 font-bold rounded-full hover:bg-white/20 transition-transform hover:scale-105 active:scale-95"
          >
            <Utensils size={20} />
            View Menu
          </a>
        </div>
      </div>
    </section>
  );
}
