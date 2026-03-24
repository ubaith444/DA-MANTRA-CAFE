import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-serif font-bold mb-6 text-accent">Da Mantra</h2>
            <p className="text-gray-400 max-w-sm leading-relaxed mb-6">
              Your garden sanctuary in Tiruvannamalai. Nurturing the soul with 100% vegan cuisine, peaceful surroundings, and beautiful melodies.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/damantracafe" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-accent hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com/damantracafe" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-accent hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com/damantracafe" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-accent hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold font-serif mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3 font-medium text-gray-400">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-accent transition-colors">Menu</a></li>
              <li><a href="#experience" className="hover:text-accent transition-colors">Experience</a></li>
              <li><a href="#reviews" className="hover:text-accent transition-colors">Reviews</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xl font-bold font-serif mb-6 text-white">Contact Info</h4>
            <ul className="space-y-3 font-medium text-gray-400">
               <li>Off Perumpakkam Road,</li>
               <li>Samudram, Tamil Nadu 606603</li>
               <li className="pt-2"><a href="tel:08056425999" className="hover:text-accent transition-colors text-white font-bold">080564 25999</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Da Mantra Garden Café. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
