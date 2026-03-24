import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-primary font-bold mb-4 font-serif">Visit Us</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We can't wait to welcome you to our peaceful garden.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 bg-background rounded-3xl overflow-hidden shadow-xl">
          
          {/* Map Side */}
          <div className="lg:w-1/2 h-[400px] lg:h-auto min-h-[500px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15647.514337222514!2d79.055!3d12.232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bacc011883161dd%3A0x8bb11c12e84ecef3!2sTiruvannamalai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full object-cover"
              title="Da Mantra Google Maps"
            ></iframe>
          </div>

          {/* Contact Details Side */}
          <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
            
            <div className="space-y-10">
              
              <div className="flex items-start gap-5">
                <div className="bg-primary/10 p-4 rounded-full text-primary">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold font-serif text-primary mb-2">Location</h4>
                  <p className="text-gray-600 text-lg">
                    Off Perumpakkam Road,<br />
                    Samudram, Tamil Nadu 606603
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-primary/10 p-4 rounded-full text-primary">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold font-serif text-primary mb-2">Phone</h4>
                  <p className="text-gray-600 text-lg">
                    080564 25999
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-primary/10 p-4 rounded-full text-primary">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold font-serif text-primary mb-2">Hours</h4>
                  <p className="text-gray-600 text-lg">
                    Mon-Sun: 8:00 AM - 10:00 PM
                  </p>
                </div>
              </div>

            </div>

             <div className="mt-12 pt-10 border-t border-gray-200 flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-colors shadow-lg"
                >
                  <MapPin size={20} />
                  Get Directions
                </a>
                <a 
                  href="tel:08056425999" 
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-accent text-primary font-bold rounded-full hover:bg-accent/90 transition-colors shadow-lg"
                >
                  <Phone size={20} />
                  Call Now
                </a>
             </div>

          </div>

        </div>

      </div>
    </section>
  );
}
