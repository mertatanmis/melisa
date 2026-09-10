import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Instagram, Linkedin } from 'lucide-react';
import { LanguageContent, Language } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { constants } from '../data/content';

interface NavbarProps {
  content: LanguageContent;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const NAV_ITEMS = ['home', 'about', 'services', 'location', 'contact'] as const;

export default function Navbar({ content, language, setLanguage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const phoneCompact = content.contact.phone.replace(/\s/g, '');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkColor = scrolled ? 'text-corporate-800' : 'text-white/85';
  const brandColor = scrolled ? 'text-corporate-900' : 'text-white';

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Top contact bar — collapses on scroll */}
      <div
        className={`bg-corporate-900/95 text-neutral-300 overflow-hidden transition-all duration-300 ${
          scrolled ? 'max-h-0 py-0' : 'max-h-12 py-2'
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between text-xs tracking-wide">
          <div className="flex items-center gap-6">
            <a href={`tel:${phoneCompact}`} className="hidden sm:flex items-center gap-2 hover:text-accent-300 transition-colors">
              <Phone className="w-3.5 h-3.5 text-accent-400" />
              <span>{content.contact.phone}</span>
            </a>
            <a href={`mailto:${constants.email}`} className="flex items-center gap-2 hover:text-accent-300 transition-colors">
              <Mail className="w-3.5 h-3.5 text-accent-400" />
              <span className="truncate max-w-[180px] sm:max-w-none">{constants.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com/avmelisaozdemir" target="_blank" rel="noopener noreferrer" className="hover:text-accent-300 transition-colors" aria-label="Instagram">
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a href="https://www.linkedin.com/in/melisa-gül-özdemir-92a294171/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-300 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`w-full transition-all duration-500 border-b ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-[0_10px_40px_-15px_rgba(13,27,46,0.25)] border-neutral-200/60 py-2'
            : 'bg-gradient-to-b from-black/50 to-transparent border-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center transition-all duration-300">
            <a
              href="#home"
              className="flex-shrink-0 flex items-center gap-3 group"
            >
              <img
                src="/images/last2.svg"
                alt="Özdemir Law Office logo"
                className={`transition-all duration-300 ${scrolled ? 'w-11 h-11' : 'w-14 h-14 sm:w-16 sm:h-16'}`}
              />
              <span className={`hidden sm:flex flex-col leading-none transition-colors duration-300 ${brandColor}`}>
                <span className="font-serif font-semibold text-lg lg:text-xl tracking-wide">
                  {language === 'en' ? 'OZDEMIR' : 'ÖZDEMİR'}
                </span>
                <span className={`font-sans text-[10px] tracking-[0.4em] uppercase mt-1 ${scrolled ? 'text-accent-600' : 'text-accent-300'}`}>
                  {language === 'en' ? 'Law Office' : 'Hukuk Bürosu'}
                </span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className={`hidden xl:flex items-center space-x-9 font-sans ${linkColor}`}>
              {NAV_ITEMS.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="relative text-[13px] font-medium uppercase tracking-[0.18em] transition-colors hover:text-accent-500 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-accent-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {content.nav[item]}
                </a>
              ))}

              <button
                onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}
                className={`text-[12px] font-semibold tracking-[0.15em] border rounded-full px-4 py-1.5 transition-colors ${
                  scrolled
                    ? 'border-corporate-200 text-corporate-700 hover:border-accent-400 hover:text-accent-600'
                    : 'border-white/30 text-white hover:border-accent-300 hover:text-accent-300'
                }`}
              >
                {language === 'en' ? 'EN | TR' : 'TR | EN'}
              </button>

              <a
                href="#contact"
                className="text-[13px] font-semibold uppercase tracking-[0.15em] text-corporate-900 bg-gradient-to-r from-[#BF953F] via-[#D9BC66] to-[#AA8A2E] px-5 py-2.5 rounded-full shadow-md hover:shadow-lg hover:shadow-accent-500/30 hover:-translate-y-px transition-all duration-300"
              >
                {content.hero.cta}
              </a>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center space-x-4 xl:hidden">
              <button
                onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}
                className={`text-sm font-bold tracking-wider ${scrolled ? 'text-accent-600' : 'text-accent-300'}`}
              >
                {language === 'en' ? 'EN' : 'TR'}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-full transition-colors ${
                  scrolled ? 'text-corporate-900 hover:bg-black/5' : 'text-white hover:bg-white/10'
                }`}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden bg-white/95 backdrop-blur-xl border-t border-neutral-100 overflow-hidden"
            >
              <div className="container mx-auto px-4 py-6 space-y-4">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    onClick={(e) => scrollToSection(e, item)}
                    className="block text-lg font-serif text-corporate-900 hover:text-accent-500 transition-colors"
                  >
                    {content.nav[item]}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className="inline-block mt-2 text-sm font-semibold uppercase tracking-widest text-corporate-900 bg-gradient-to-r from-[#BF953F] via-[#D9BC66] to-[#AA8A2E] px-6 py-3 rounded-full"
                >
                  {content.hero.cta}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
