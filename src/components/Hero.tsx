import { motion } from 'framer-motion';
import { LanguageContent } from '../types';

interface HeroProps {
  content: LanguageContent;
}

export default function Hero({ content }: HeroProps) {
  return (
    <div id="home" className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax/Zoom Effect */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Law office"
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Gradient Overlay for better text readability and elegance */}
        <div className="absolute inset-0 bg-gradient-to-r from-corporate-900/90 via-corporate-900/70 to-transparent"></div>
      </div>

      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-7xl text-white mb-8 font-serif leading-tight tracking-tight"
            >
              <span className="font-bold block text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] mb-2 drop-shadow-sm pb-1">
                {content.hero.title.split(' ')[0]}
              </span>
              <span className="font-light block text-4xl md:text-6xl text-gray-100">
                {content.hero.title.split(' ').slice(1).join(' ')}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 mb-10 font-sans font-light leading-relaxed border-l-2 border-[#BF953F] pl-6"
            >
              {content.hero.subtitle.split(/(Kusadasi|Kuşadası'nda|Kuşadası)/g).map((part, i) =>
                part.match(/Kusadasi|Kuşadası/i) ? (
                  <span key={i} className="text-[#FCF6BA] font-medium relative inline-block">
                    {part}
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#BF953F]/40"></span>
                  </span>
                ) : part
              )}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-medium text-white transition-all duration-200 bg-gradient-to-r from-[#BF953F] to-[#8C621C] font-sans rounded-full hover:shadow-lg hover:shadow-[#BF953F]/30 hover:-translate-y-0.5 overflow-hidden ring-1 ring-white/10"
              >
                <span className="relative z-10">{content.hero.cta}</span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out"></div>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent mx-auto"></div>
      </motion.div>
    </div>
  );
}