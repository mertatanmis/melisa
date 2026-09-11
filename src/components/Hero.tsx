import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { LanguageContent } from '../types';

interface HeroProps {
  content: LanguageContent;
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

export default function Hero({ content }: HeroProps) {
  return (
    <div id="home" className="relative min-h-screen flex flex-col bg-corporate-900">
      {/* Main content */}
      <div className="relative flex-1 flex items-center pt-36 md:pt-44 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-12 items-center">
            <motion.div variants={container} initial="hidden" animate="visible" className="lg:col-span-7">
              <motion.p
                variants={item}
                className="flex items-center gap-4 text-[11px] md:text-xs font-sans font-semibold uppercase tracking-[0.22em] md:tracking-[0.35em] text-accent-300"
              >
                <span className="h-px w-12 bg-accent-400" aria-hidden="true" />
                {content.hero.eyebrow}
              </motion.p>

              <motion.h1
                variants={item}
                className="mt-8 font-serif font-medium tracking-tight text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.1] max-w-2xl"
              >
                {content.hero.headline}
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-7 text-lg md:text-xl text-neutral-300 font-sans font-light leading-relaxed max-w-xl"
              >
                {content.hero.subtitle}
              </motion.p>

              <motion.p
                variants={item}
                className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-sans uppercase tracking-[0.2em] text-neutral-400"
              >
                {content.hero.credentials.map((credential, i) => (
                  <span key={credential} className="flex items-center gap-3 whitespace-nowrap">
                    {credential}
                    {i < content.hero.credentials.length - 1 && (
                      <span className="w-1 h-1 rotate-45 bg-accent-400" aria-hidden="true" />
                    )}
                  </span>
                ))}
              </motion.p>

              <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold tracking-wide font-sans text-white bg-accent-500 hover:bg-accent-400 transition-colors duration-300"
                >
                  {content.hero.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#services"
                  className="group inline-flex items-center gap-2 text-sm font-semibold tracking-wide font-sans text-white/80 underline decoration-accent-400/60 decoration-1 underline-offset-8 hover:text-accent-300 transition-colors"
                >
                  {content.hero.secondaryCta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </motion.div>

            {/* Practice areas index */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-5"
            >
              <div className="border border-white/15">
                <div className="flex items-baseline justify-between px-5 py-4">
                  <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.3em] text-white/60">
                    {content.hero.indexTitle}
                  </span>
                  <span className="text-[11px] font-sans tracking-[0.2em] text-accent-300">
                    {String(content.about.expertise.items.length).padStart(2, '0')}
                  </span>
                </div>
                <nav>
                  {content.about.expertise.items.map((area, i) => (
                    <a
                      key={area}
                      href="#services"
                      className="group flex items-baseline gap-4 px-5 py-3.5 border-t border-white/10 transition-colors hover:bg-white/[0.04]"
                    >
                      <span className="text-[10px] font-sans tracking-widest text-accent-400">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="flex-1 text-sm font-sans text-white/80 group-hover:text-white transition-colors">
                        {area}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 self-center text-accent-300 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </a>
                  ))}
                </nav>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="relative border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {content.hero.stats.map((stat, i) => (
              <div key={i} className="pt-7 pb-14 px-4 md:px-8 text-center md:text-left">
                <div className="font-serif text-2xl md:text-3xl text-white font-medium">
                  {stat.value}
                </div>
                <div className="mt-1 text-[11px] md:text-xs font-sans uppercase tracking-[0.2em] text-white/50">
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
