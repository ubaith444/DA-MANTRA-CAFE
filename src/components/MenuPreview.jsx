import React from 'react';

const menuItems = [
  {
    name: "Classic Buddha Bowl",
    description: "Quinoa, roasted sweet potato, avocado, massaged kale, tahini dressing. 100% Vegan.",
    price: "₹350",
    image: "/images/menu-1.jpg"
  },
  {
    name: "Avocado Sourdough Toast",
    description: "Mashed Hass avocado, cherry tomatoes, micro-greens, chili flakes.",
    price: "₹280",
    image: "/images/menu-2.jpg"
  },
  {
    name: "Mantra Smoothies",
    description: "Blend of tropical fruits with almond milk and chia seeds.",
    price: "₹220",
    image: "/images/menu-3.jpg"
  },
  {
    name: "Vegan Tofu Scramble",
    description: "Spiced tofu, bell peppers, spinach, served with multigrain toast.",
    price: "₹290",
    image: "/images/menu-4.jpg"
  }
];

export default function MenuPreview() {
  return (
    <section id="menu" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-primary font-bold mb-4 font-serif">Popular Picks</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover our signature plant-based dishes crafted with fresh, local ingredients perfectly tailored to nourish your soul.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-primary font-serif">{item.name}</h3>
                </div>
                <p className="text-accent font-bold mb-3">{item.price}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#contact" className="inline-block px-8 py-4 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-colors">
            Ask for Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}
