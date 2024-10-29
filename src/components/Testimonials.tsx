import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Mountain Biking Enthusiast",
    content: "The quality and service at VeloVibe is unmatched. My new mountain bike exceeds all expectations!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60"
  },
  {
    name: "Michael Chen",
    role: "Professional Cyclist",
    content: "As a pro cyclist, I'm particular about my gear. VeloVibe consistently delivers top-notch products.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533561052604-c3beb6d55b8d?w=1600')] opacity-10 bg-cover bg-center" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-3xl font-bold mb-12 text-center animate-slide-up">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group glass-effect p-8 rounded-2xl relative animate-slide-up hover:bg-white/20 transition-colors duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Quote className="absolute top-4 right-4 text-blue-400 transform transition-transform duration-300 group-hover:rotate-12" size={32} />
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-600 rounded-full blur-md scale-110 opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover relative transform transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg group-hover:text-blue-300 transition-colors duration-300">
                    {testimonial.name}
                  </h3>
                  <p className="text-blue-200/80">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}