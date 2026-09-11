import { LanguageContent } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ArrowUpRight, Check, X } from 'lucide-react';
import SectionHeader from './SectionHeader';

interface ServicesProps {
  content: LanguageContent;
}

export default function Services({ content }: ServicesProps) {
  const backgroundImages = [
    'legal-consultation.jpg',
    'real-estate-law.jpg',
    'corporate-advisory.jpg',
    'residency-services.jpg',
    'cross-border.jpg',
    'estate-planning.jpg',
    'investment-tax.jpg',
    'tourist-protection.jpg'
  ];

  const [selectedService, setSelectedService] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedService(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="services" className="py-28 bg-corporate-900 relative overflow-hidden scroll-mt-28">
      <div className="bg-navy-pattern absolute inset-0" aria-hidden="true" />
      <img
        src="/images/last2.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 bottom-10 w-[520px] opacity-[0.05] brightness-0 invert select-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          dark
          eyebrow={content.services.eyebrow}
          title={content.services.title}
          subtitle={content.services.subtitle}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.services.items.map((service, index) => {
            const imagePath = `/images/services/${backgroundImages[index]}`;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
                onClick={() => openModal(index)}
                className="group relative rounded-xl overflow-hidden cursor-pointer h-[420px] ring-1 ring-white/10 hover:ring-accent-400/60 hover:-translate-y-1.5 transition-all duration-500 shadow-lg"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${imagePath}')` }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-corporate-900 via-corporate-900/55 to-corporate-900/10 transition-opacity duration-300" />

                {/* Index */}
                <span className="absolute top-5 left-6 font-serif text-4xl font-light text-white/25 group-hover:text-accent-300/80 transition-colors duration-500">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="absolute top-6 right-6 text-white/40 group-hover:text-accent-300 transition-colors duration-500">
                  <ArrowUpRight className="w-5 h-5" />
                </span>

                {/* Content */}
                <div className="relative h-full p-7 flex flex-col justify-end">
                  <h3 className="text-xl font-serif font-medium text-white mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-white/70 font-sans text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-accent-300 font-medium tracking-[0.2em] text-xs uppercase">
                    <span>{content.services.viewDetails}</span>
                    <span className="h-px flex-1 bg-white/15 group-hover:bg-accent-400/50 transition-colors duration-500" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedService !== null && (
          <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-corporate-900/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl z-10"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 p-2 bg-corporate-900/50 hover:bg-corporate-900/80 backdrop-blur-md rounded-full text-white transition-colors"
                aria-label={content.a11y.close}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid md:grid-cols-2">
                {/* Image Side */}
                <div className="relative h-64 md:h-full md:min-h-[480px]">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('/images/services/${backgroundImages[selectedService]}')`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-corporate-900/70 via-transparent to-transparent" />
                </div>

                {/* Content Side */}
                <div className="p-8 md:p-10 flex flex-col justify-center bg-white">
                  <h3 className="text-3xl font-serif text-corporate-900 mb-2 leading-tight">
                    {content.services.items[selectedService].title}
                  </h3>
                  <span className="h-px w-16 bg-accent-400 mb-6" />

                  <p className="text-body mb-8 leading-relaxed">
                    {content.services.items[selectedService].description}
                  </p>

                  {content.services.items[selectedService].features && (
                    <div>
                      <h4 className="text-xs font-semibold text-accent-600 uppercase tracking-[0.25em] mb-4">
                        {content.services.keyFeatures}
                      </h4>
                      <ul className="space-y-3">
                        {content.services.items[selectedService].features!.map((feature, i) => (
                          <li key={i} className="flex items-start text-neutral-700">
                            <Check className="flex-shrink-0 w-4 h-4 mr-3 text-accent-500 mt-1" />
                            <span className="text-base">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-10 pt-8 border-t border-neutral-100">
                    <button
                      onClick={() => {
                        closeModal();
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full bg-corporate-900 text-white py-4 px-8 rounded-full font-medium hover:bg-corporate-800 transition-colors flex items-center justify-center gap-2 group"
                    >
                      <span>{content.services.scheduleConsultation}</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
