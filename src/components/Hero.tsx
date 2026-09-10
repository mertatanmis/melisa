import { motion } from 'framer-motion';
import { ArrowRight, Scale } from 'lucide-react';
import { LanguageContent } from '../types';

interface HeroProps {
  content: LanguageContent;
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } },
};

export default function Hero({ content }: HeroProps) {
  const [firstWord, ...restWords] = content.hero.title.split(' ');

  return (
    <div id="home" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Image with slow zoom */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 9, ease: 'easeOut' }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Lady Justice"
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-corporate-900/95 via-corporate-900/75 to-corporate-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-corporate-900 via-transparent to-corporate-900/40"></div>
      </div>

      {/* Main content */}
      <div className="relative flex-1 flex items-center pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div variants={container} initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p
              variants={item}
              className="flex items-center gap-3 text-[11px] md:text-xs font-sans font-semibold uppercase tracking-[0.4em] text-accent-300 mb-8"
            >
              <Scale className="w-4 h-4" strokeWidth={1.5} />
              {content.hero.eyebrow}
            </motion.p>

            <motion.h1
              variants={item}
              className="text-5xl sm:text-6xl md:text-8xl text-white mb-8 font-serif leading-[1.05] tracking-tight"
            >
              <span className="font-semibold block text-gold-gradient drop-shadow-sm pb-2">
                {firstWord}
              </span>
              <span className="font-light block text-4xl sm:text-5xl md:text-6xl text-gray-100 italic">
                {restWords.join(' ')}
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg md:text-2xl text-gray-200 mb-10 font-sans font-light leading-relaxed border-l-2 border-accent-400 pl-6"
            >
              {content.hero.subtitle.split(/(Kusadasi|Kuşadası)/g).map((part, i) =>
                part.match(/Kusadasi|Kuşadası/i) ? (
                  <span key={i} className="text-[#FCF6BA] font-medium relative inline-block">
                    {part}
                    <span className="absolute bottom-0 left-0 w-full h-px bg-accent-400/40"></span>
                  </span>
                ) : (
                  part
                )
              )}
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-4 text-sm md:text-base font-semibold text-corporate-900 font-sans rounded-full bg-gradient-to-r from-[#BF953F] via-[#D9BC66] to-[#AA8A2E] hover:shadow-xl hover:shadow-accent-500/30 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden ring-1 ring-white/20"
              >
                <span className="relative z-10">{content.hero.cta}</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-in-out"></div>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-7 py-4 text-sm md:text-base font-medium text-white/90 font-sans rounded-full border border-white/30 hover:border-accent-300 hover:text-accent-300 transition-all duration-300"
              >
                {content.hero.secondaryCta}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="relative border-t border-white/15 bg-corporate-900/50 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {content.hero.stats.map((stat, i) => (
              <div key={i} className="py-6 px-4 md:px-8 text-center md:text-left">
                <div className="font-serif text-2xl md:text-3xl text-gold-gradient font-semibold">
                  {stat.value}
                </div>
                <div className="mt-1 text-[11px] md:text-xs font-sans uppercase tracking-[0.2em] text-white/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
