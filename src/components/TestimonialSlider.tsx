import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialSliderProps {
  testimonials: {
    title: string;
    items: Testimonial[];
  };
}

export default function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.items.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(timer);
  }, [testimonials.items.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => 
      (prev - 1 + testimonials.items.length) % testimonials.items.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.items.length);
  };

  return (
    <div className="relative overflow-hidden bg-white rounded-xl shadow-lg border border-neutral-200">
      {/* Navigation Buttons */}
      <button 
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-5 h-5 text-corporate-600" />
      </button>
      <button 
        onClick={goToNext}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-5 h-5 text-corporate-600" />
      </button>

      {/* Testimonials Container */}
      <div 
        className="relative transition-transform duration-500 ease-in-out flex"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {testimonials.items.map((testimonial, index) => (
          <div 
            key={index}
            className="min-w-full p-8"
          >
            <div className="max-w-2xl mx-auto text-center">
              <blockquote className="text-lg text-body italic mb-6">
                "{testimonial.quote}"
              </blockquote>
              <footer className="text-corporate-700 font-semibold">
                — {testimonial.author}
              </footer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 