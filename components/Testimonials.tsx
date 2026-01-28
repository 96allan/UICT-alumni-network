import React, { useState, useEffect } from 'react';
import { testimonials } from '../data/mockData';
import { Testimonial } from '../types';
import FadeInSection from './common/FadeInSection';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-light-bg">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">What Our Alumni Say</h2>
        </FadeInSection>
        <FadeInSection>
          <div className="relative max-w-3xl mx-auto bg-white p-10 rounded-xl shadow-lg">
            <div className="overflow-hidden relative h-48">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                  <blockquote className="text-center">
                    <p className="text-xl text-gray-700 italic">"{testimonial.text}"</p>
                    <footer className="mt-6">
                      <p className="font-bold text-primary">{testimonial.author}</p>
                      <p className="text-gray-500">Class of {testimonial.graduationYear}</p>
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentIndex === index ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'}`}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Testimonials;
