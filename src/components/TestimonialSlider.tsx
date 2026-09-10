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
    }, 6000);

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
    <div className="relative overflow-hidden bg-corporate-900 rounded-2xl shadow-[0_24px_60px_-20px_rgba(13,27,46,0.5)]">
      <div className="bg-navy-pattern absolute inset-0" aria-hidden="true" />
      {/* Decorative quote mark */}
      <span
        className="absolute -top-4 left-6 font-serif text-[120px] leading-none text-accent-400/25 select-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* Testimonials Container */}
      <div
        className="relative transition-transform duration-700 ease-in-out flex"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {testimonials.items.map((testimonial, index) => (
          <div key={index} className="min-w-full px-10 pt-12 pb-16">
            <div className="max-w-xl mx-auto text-center">
              <blockquote className="text-lg md:text-xl text-neutral-100 font-serif italic leading-relaxed mb-6">
                {testimonial.quote}
              </blockquote>
              <footer className="flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-accent-400/60" aria-hidden="true" />
                <span className="text-accent-300 font-sans text-sm font-semibold tracking-[0.15em] uppercase">
                  {testimonial.author}
                </span>
                <span className="h-px w-8 bg-accent-400/60" aria-hidden="true" />
              </footer>
            </div>
          </div>
        ))}
      </div>

      {/* Controls: arrows + dots */}
      <button
        onClick={goToPrevious}
        className="absolute left-3 top-1/2 z-10 -translate-y-1/2 p-2 rounded-full text-white/50 hover:text-accent-300 hover:bg-white/10 transition-all duration-300"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-3 top-1/2 z-10 -translate-y-1/2 p-2 rounded-full text-white/50 hover:text-accent-300 hover:bg-white/10 transition-all duration-300"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {testimonials.items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-accent-400 w-6' : 'bg-white/25 w-1.5 hover:bg-white/50'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
