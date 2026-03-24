import React from 'react';
import { Leaf, Music, Sun } from 'lucide-react';

export default function Experience() {
  const highlights = [
    {
      icon: <Sun className="w-8 h-8 text-accent" />,
      title: "Outdoor Seating",
      description: "Enjoy peaceful garden views and fresh air while you dine in our beautifully landscaped spaces."
    },
    {
      icon: <Leaf className="w-8 h-8 text-accent" />,
      title: "100% Vegan Menu",
      description: "Nourish your body and soul with our completely plant-based, organic, and locally-sourced offerings."
    },
    {
      icon: <Music className="w-8 h-8 text-accent" />,
      title: "Live Music",
      description: "Immerse yourself in acoustic melodies and soulful tunes during our evening weekend sessions."
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image Side */}
          <div className="lg:w-1/2 relative">
            <div className="hidden lg:block absolute -top-8 -left-8 w-32 h-32 bg-background z-0"></div>
            <div className="relative z-10 w-full rounded-tr-[4rem] rounded-bl-[4rem] shadow-2xl bg-gray-100 h-[600px] overflow-hidden">
              <img 
                src="/images/experience.jpg" 
                alt="Serene outdoor dining experience at Da Mantra Cafe" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-primary p-8 rounded-full shadow-xl z-20 hidden md:block border-4 border-white">
              <p className="text-white text-3xl font-serif font-bold italic">"Serenity"</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2">
            <h2 className="text-sm tracking-[0.2em] text-accent font-bold uppercase mb-3">Discover the Vibe</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-primary font-bold mb-6 leading-tight">
              More than a meal, an experience for the soul.
            </h3>
            <div className="w-24 h-1 bg-accent mb-8"></div>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              At Da Mantra, we believe in the harmonious balance of nourishing food and tranquil environments. Our garden café is a sanctuary where you can unwind, connect with nature, and savor flavors that celebrate life.
            </p>

            <div className="space-y-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex gap-6 items-start group">
                  <div className="bg-background p-4 rounded-full group-hover:bg-primary transition-colors duration-300">
                    <div className="group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold font-serif text-primary mb-2 group-hover:text-accent transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
