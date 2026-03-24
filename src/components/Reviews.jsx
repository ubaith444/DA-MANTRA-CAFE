import React from 'react';
import { Star, Instagram } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      name: "Sarah Jenkins",
      text: "The absolute best vegan food in Tiruvannamalai. The garden setting makes every meal feel like a mini-retreat.",
      rating: 5
    },
    {
      name: "Ravi Kumar",
      text: "Incredible ambiance! The Buddha Bowl is a must-try. Perfect place to reflect and enjoy amazing coffee.",
      rating: 5
    },
    {
      name: "Emma Watson",
      text: "Live music on weekends paired with their sourdough toast is heavenly. A peaceful oasis.",
      rating: 5
    }
  ];

  const instagramImages = [
    "/images/insta-1.jpg",
    "/images/insta-2.jpg",
    "/images/insta-3.jpg",
    "/images/insta-4.jpg",
    "/images/insta-5.jpg",
    "/images/insta-6.jpg"
  ];

  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Banner Stats */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24 mb-20 bg-primary rounded-3xl p-10 shadow-xl overflow-hidden relative">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>
          
          <div className="text-center text-white z-10">
            <div className="flex items-center justify-center gap-1 mb-2 text-accent">
              {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={32} />)}
            </div>
            <h3 className="text-5xl font-bold font-serif mb-2">4.9</h3>
            <p className="text-lg text-gray-300 font-medium">Average Rating</p>
          </div>

          <div className="hidden md:block w-px h-24 bg-white/20 z-10"></div>
          
          <div className="text-center text-white z-10">
            <h3 className="text-5xl font-bold font-serif mb-2 text-accent">170+</h3>
            <p className="text-lg text-gray-300 font-medium">Happy Visitors Daily</p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex text-accent mb-4">
                 {[...Array(review.rating)].map((_, i) => <Star key={i} fill="currentColor" size={18} />)}
              </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed font-serif text-lg">"{review.text}"</p>
              <h4 className="font-bold text-primary">— {review.name}</h4>
            </div>
          ))}
        </div>

        {/* Instagram Grid Header */}
        <div className="text-center mb-10 flex flex-col items-center justify-center">
            <Instagram className="text-accent mb-4" size={40} />
            <h2 className="text-3xl font-serif text-primary font-bold mb-2">Follow The Vibe</h2>
            <a href="https://instagram.com/damantracafe" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-accent font-bold transition-colors">@damantracafe</a>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {instagramImages.map((img, index) => (
            <a 
              key={index} 
              href="https://instagram.com/damantracafe" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative group overflow-hidden bg-gray-100 aspect-square"
              aria-label={`View Da Mantra Cafe Instagram post ${index + 1}`}
            >
              <img 
                src={img} 
                alt={`Instagram lifestyle at Da Mantra Cafe ${index + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-[2px]">
                <Instagram className="text-white" size={32} />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
