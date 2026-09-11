import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { LanguageContent, Testimonial } from '../types';

interface TestimonialSliderProps {
  testimonials: {
    title: string;
    items: Testimonial[];
  };
  a11y: LanguageContent['a11y'];
}

export default function TestimonialSlider({ testimonials, a11y }: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.items.length);
    }, 8000);

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
      {/* Testimonials Container */}
      <div
        className="relative transition-transform duration-700 ease-in-out flex"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {testimonials.items.map((testimonial, index) => (
          <div key={index} className="min-w-full px-10 py-14 flex">
            <div className="max-w-xl mx-auto text-center my-auto">
              <Quote
                className="w-9 h-9 md:w-11 md:h-11 text-accent-400/50 mx-auto mb-7"
                strokeWidth={1.25}
                aria-hidden="true"
              />
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
        aria-label={a11y.previousTestimonial}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-3 top-1/2 z-10 -translate-y-1/2 p-2 rounded-full text-white/50 hover:text-accent-300 hover:bg-white/10 transition-all duration-300"
        aria-label={a11y.nextTestimonial}
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
            aria-label={a11y.goToTestimonial.replace('{n}', String(index + 1))}
          />
        ))}
      </div>
    </div>
  );
}
