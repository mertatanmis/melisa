import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { LanguageContent, Language } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  content: LanguageContent;
  language: Language;
  setLanguage: (lang: Language) => void;
}

export default function Navbar({ content, language, setLanguage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center transition-all duration-300">
          <a
            href="#home"
            className="flex-shrink-0 font-serif font-medium text-lg sm:text-xl lg:text-2xl text-corporate-900 flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img
              src="/images/last2.svg"
              alt="Logo"
              className={`transition-all duration-300 ${scrolled ? 'w-12 h-12' : 'w-16 h-16 sm:w-20 sm:h-20'}`}
            />
            <span className="hidden sm:inline tracking-wide">
              {language === 'en' ? 'OZDEMIR LAW OFFICE' : 'ÖZDEMİR HUKUK BÜROSU'}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 text-base font-sans font-medium text-corporate-800">
            {['home', 'about', 'services', 'location', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="hover:text-accent-500 transition-colors uppercase tracking-wider text-sm"
              >
                {content.nav[item as keyof typeof content.nav]}
              </a>
            ))}

            <button
              onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}
              className="inline-flex items-center space-x-2 text-accent-500 hover:text-accent-600 transition-colors border border-accent-200 rounded-full px-4 py-1"
            >
              <span className="text-sm font-bold">
                {language === 'en' ? '🇬🇧 EN' : '🇹🇷 TR'}
              </span>
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center space-x-4 lg:hidden">
            <button
              onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}
              className="text-accent-500 font-bold"
            >
              {language === 'en' ? 'EN' : 'TR'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-corporate-900 p-2 hover:bg-black/5 rounded-full transition-colors"
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
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-neutral-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {['home', 'about', 'services', 'location', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-serif text-corporate-900 hover:text-accent-500 transition-colors"
                >
                  {content.nav[item as keyof typeof content.nav]}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}