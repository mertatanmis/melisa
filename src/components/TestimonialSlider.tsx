import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, X } from 'lucide-react';
import { LanguageContent, Testimonial } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

interface TestimonialSliderProps {
  testimonials: {
    title: string;
    readMore: string;
    items: Testimonial[];
  };
  a11y: LanguageContent['a11y'];
}

const CLAMP_THRESHOLD = 280;

export default function TestimonialSlider({ testimonials, a11y }: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);

  useEffect(() => {
    if (expanded !== null) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.items.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [testimonials.items.length, expanded]);

  useEffect(() => {
    if (expanded === null) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setExpanded(null);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = 'unset';
    };
  }, [expanded]);

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
        {testimonials.items.map((testimonial, index) => {
          const isLong = testimonial.quote.length > CLAMP_THRESHOLD;
          return (
            <div key={index} className="min-w-full px-10 py-14 flex">
              <div
                className={`max-w-xl mx-auto text-center my-auto ${isLong ? 'cursor-pointer' : ''}`}
                onClick={isLong ? () => setExpanded(index) : undefined}
                role={isLong ? 'button' : undefined}
                tabIndex={isLong ? 0 : undefined}
                onKeyDown={isLong ? (e) => e.key === 'Enter' && setExpanded(index) : undefined}
              >
                <Quote
                  className="w-9 h-9 md:w-11 md:h-11 text-accent-400/50 mx-auto mb-7"
                  strokeWidth={1.25}
                  aria-hidden="true"
                />
                <blockquote className="text-lg md:text-xl text-neutral-100 font-serif italic leading-relaxed mb-6 line-clamp-5">
                  {testimonial.quote}
                </blockquote>
                {isLong && (
                  <span className="inline-block text-[11px] font-sans font-semibold uppercase tracking-[0.25em] text-accent-300 hover:text-accent-200 transition-colors mb-5">
                    {testimonials.readMore} →
                  </span>
                )}
                <footer className="flex items-center justify-center gap-3">
                  <span className="h-px w-8 bg-accent-400/60" aria-hidden="true" />
                  <span className="text-accent-300 font-sans text-sm font-semibold tracking-[0.15em] uppercase">
                    {testimonial.author}
                  </span>
                  <span className="h-px w-8 bg-accent-400/60" aria-hidden="true" />
                </footer>
              </div>
            </div>
          );
        })}
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

      {/* Expanded testimonial dialog */}
      <AnimatePresence>
        {expanded !== null && (
          <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExpanded(null)}
              className="absolute inset-0 bg-corporate-900/85 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.25 }}
              className="relative bg-corporate-900 w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/15 shadow-2xl z-10"
            >
              <div className="bg-navy-pattern absolute inset-0 pointer-events-none" aria-hidden="true" />
              <button
                onClick={() => setExpanded(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                aria-label={a11y.close}
              >
                <X className="w-5 h-5" />
              </button>
              <div className="relative px-8 py-12 md:px-14 md:py-16 text-center">
                <Quote
                  className="w-10 h-10 text-accent-400/50 mx-auto mb-8"
                  strokeWidth={1.25}
                  aria-hidden="true"
                />
                <blockquote className="text-lg md:text-xl text-neutral-100 font-serif italic leading-relaxed mb-8">
                  {testimonials.items[expanded].quote}
                </blockquote>
                <footer className="flex items-center justify-center gap-3">
                  <span className="h-px w-8 bg-accent-400/60" aria-hidden="true" />
                  <span className="text-accent-300 font-sans text-sm font-semibold tracking-[0.15em] uppercase">
                    {testimonials.items[expanded].author}
                  </span>
                  <span className="h-px w-8 bg-accent-400/60" aria-hidden="true" />
                </footer>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
