import { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { LanguageContent, Language } from '../types';

interface NavbarProps {
  content: LanguageContent;
  language: Language;
  setLanguage: (lang: Language) => void;
}

export default function Navbar({ content, language, setLanguage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white/90 backdrop-blur-sm z-50 border-b border-navy-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-20 sm:h-24 lg:h-36 items-center">
          <a 
            href="#home" 
            className="flex-shrink-0 font-semibold text-lg sm:text-xl lg:text-2xl text-accent-500 flex items-center gap-3 sm:gap-4 lg:gap-6 hover:opacity-90 transition-opacity"
          >
            <img 
              src="/images/last2.svg" 
              alt={language === 'en' ? 'Ozdemir Law Office Logo' : 'Özdemir Hukuk Bürosu Logo'}
              className="w-16 sm:w-20 lg:w-32 h-16 sm:h-20 lg:h-32" 
            />
            <span className="hidden sm:inline">
              {language === 'en' ? 'OZDEMIR LAW OFFICE' : 'ÖZDEMİR HUKUK BÜROSU'}
            </span>
          </a>
          
          {/* Desktop and Large Tablet Navigation */}
          <div className="hidden lg:flex items-center space-x-8 text-lg">
            <a href="#home" className="text-body hover:text-accent-500 transition-colors">{content.nav.home}</a>
            <a href="#about" className="text-body hover:text-accent-500 transition-colors">{content.nav.about}</a>
            <a href="#services" className="text-body hover:text-accent-500 transition-colors">{content.nav.services}</a>
            <a href="#location" className="text-body hover:text-accent-500 transition-colors">{content.nav.location}</a>
            <a href="#contact" className="text-body hover:text-accent-500 transition-colors">{content.nav.contact}</a>
            
            <button
              onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}
              className="inline-flex items-center space-x-2 text-accent-500 hover:text-accent-400 transition-colors"
            >
              <span className="uppercase font-medium">
                {language === 'en' ? '🇬🇧 EN' : '🇹🇷 TR'}
              </span>
            </button>
          </div>

          {/* Mobile and Small Tablet Controls */}
          <div className="flex items-center space-x-4 lg:hidden">
            <button
              onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}
              className="text-accent-500 hover:text-accent-400 transition-colors"
            >
              <span className="uppercase font-medium">
                {language === 'en' ? '🇬🇧' : '🇹🇷'}
              </span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-body p-2 hover:bg-neutral-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile and Tablet Menu */}
      {isOpen && (
        <div className="lg:hidden bg-neutral-50 border-t border-neutral-200">
          <div className="container mx-auto px-4 py-3">
            <div className="grid sm:grid-cols-2 gap-2 sm:gap-4">
              <a href="#home" className="px-4 py-3 text-body hover:text-accent-500 transition-colors rounded-lg hover:bg-white flex items-center space-x-2">
                {content.nav.home}
              </a>
              <a href="#about" className="px-4 py-3 text-body hover:text-accent-500 transition-colors rounded-lg hover:bg-white flex items-center space-x-2">
                {content.nav.about}
              </a>
              <a href="#services" className="px-4 py-3 text-body hover:text-accent-500 transition-colors rounded-lg hover:bg-white flex items-center space-x-2">
                {content.nav.services}
              </a>
              <a href="#location" className="px-4 py-3 text-body hover:text-accent-500 transition-colors rounded-lg hover:bg-white flex items-center space-x-2">
                {content.nav.location}
              </a>
              <a href="#contact" className="px-4 py-3 text-body hover:text-accent-500 transition-colors rounded-lg hover:bg-white flex items-center space-x-2 sm:col-span-2">
                {content.nav.contact}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}