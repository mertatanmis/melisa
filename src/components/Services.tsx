import { LanguageContent } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

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
    <section id="services" className="py-24 bg-neutral-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">
            {content.services.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-corporate-400 to-accent-400 mx-auto mb-16 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {content.services.items.map((service, index) => {
            const imagePath = `/images/services/${backgroundImages[index]}`;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => openModal(index)}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-[500px]"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${imagePath}')`,
                  }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-corporate-900 via-corporate-900/60 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />

                {/* Content Container */}
                <div className="relative h-full p-8 flex flex-col justify-end">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                    <h3 className="text-2xl font-serif font-medium text-white mb-4 leading-tight">
                      {service.title}
                    </h3>

                    <div className="relative overflow-hidden">
                      <p className="text-gray-300 font-sans leading-relaxed text-base transition-all duration-300">
                        {service.description.slice(0, 100)}...
                      </p>
                    </div>

                    <div className="mt-6 transition-opacity duration-500">
                      <span className="inline-flex items-center text-accent-400 font-medium tracking-wide text-sm uppercase group-hover:text-accent-300">
                        View Details <span className="ml-2">→</span>
                      </span>
                    </div>
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              layoutId={`service-${selectedService}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl overflow-hidden z-10"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="grid md:grid-cols-2">
                {/* Image Side */}
                <div className="relative h-64 md:h-full md:min-h-[400px]">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('/images/services/${backgroundImages[selectedService]}')`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                </div>

                {/* Content Side */}
                <div className="p-8 md:p-10 flex flex-col justify-center bg-white">
                  <h3 className="text-3xl font-serif text-corporate-900 mb-6 leading-tight">
                    {content.services.items[selectedService].title}
                  </h3>

                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {content.services.items[selectedService].description}
                  </p>

                  {content.services.items[selectedService].features && (
                    <div className="space-y-4">
                      <h4 className="text-sm font-bold text-corporate-500 uppercase tracking-wider mb-4">
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {content.services.items[selectedService].features!.map((feature, i) => (
                          <li key={i} className="flex items-start text-gray-700">
                            <span className="flex-shrink-0 w-5 h-5 mr-3 text-accent-500 mt-1">
                              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                            <span className="text-base">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-10 pt-8 border-t border-gray-100">
                    <button
                      onClick={() => {
                        closeModal();
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full bg-corporate-900 text-white py-4 px-8 rounded-xl font-medium hover:bg-corporate-800 transition-colors flex items-center justify-center space-x-2 group"
                    >
                      <span>Schedule Consultation</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
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