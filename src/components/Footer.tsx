import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { LanguageContent } from '../types';
import { constants } from '../data/content';

interface FooterProps {
  content: LanguageContent;
}

export default function Footer({ content }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-corporate-900 text-white pt-20 pb-10 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-400 to-transparent" aria-hidden="true"></div>
      <div className="bg-navy-pattern absolute inset-0 pointer-events-none" aria-hidden="true"></div>
      <div className="container mx-auto px-4 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="/images/last2.svg" alt="" className="w-11 h-11 opacity-90" aria-hidden="true" />
              <h3 className="text-2xl font-serif tracking-wide text-white">
                {content.nav.home === 'Home' ? 'OZDEMIR' : 'ÖZDEMİR'}
                <span className="block text-[10px] font-sans font-medium text-accent-300 mt-1 uppercase tracking-[0.35em]">
                  {content.nav.home === 'Home' ? 'Law Office' : 'Hukuk Bürosu'}
                </span>
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 font-sans">
              {content.footer.description}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/avmelisaozdemir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent-400 transition-colors transform hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/melisa-gül-özdemir-92a294171/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent-400 transition-colors transform hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-medium mb-6 text-white">{content.footer.quickLinks}</h3>
            <ul className="space-y-3 text-sm font-sans text-gray-400">
              <li>
                <a href="#home" className="hover:text-accent-400 transition-colors block py-1">
                  {content.nav.home}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent-400 transition-colors block py-1">
                  {content.nav.about}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent-400 transition-colors block py-1">
                  {content.nav.services}
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-accent-400 transition-colors block py-1">
                  {content.nav.location}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent-400 transition-colors block py-1">
                  {content.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-medium mb-6 text-white">{content.footer.contactInfo}</h3>
            <ul className="space-y-4 text-sm font-sans text-gray-400">
              <li className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5 group-hover:text-accent-400 transition-colors" />
                <span className="leading-relaxed group-hover:text-gray-300 transition-colors">{content.contact.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${content.contact.phone}`}
                  className="flex items-center space-x-3 group hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 text-accent-500 group-hover:text-accent-400 transition-colors" />
                  <span className="group-hover:text-gray-300 transition-colors">{content.contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${content.contact.phone.replace(/\s/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 group hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5 text-accent-500 group-hover:text-accent-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span className="group-hover:text-gray-300 transition-colors">{content.contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${constants.email}`}
                  className="flex items-center space-x-3 group hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-accent-500 group-hover:text-accent-400 transition-colors" />
                  <span className="group-hover:text-gray-300 transition-colors">{constants.email}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-lg font-serif font-medium mb-6 text-white">{content.footer.officeHours}</h3>
            <ul className="space-y-3 text-sm font-sans text-gray-400">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>{content.footer.weekdays}</span>
                <span className="text-gray-300">{content.footer.weekdayHours}</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>{content.footer.saturday}</span>
                <span className="text-gray-300">{content.footer.saturdayHours}</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>{content.footer.sunday}</span>
                <span className="text-accent-400">{content.footer.closed}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm font-sans text-gray-500">
            <p>
              © {currentYear} ÖZDEMIR Law Office. {content.footer.allRightsReserved}
            </p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-accent-400 transition-colors">
                {content.footer.privacyPolicy}
              </a>
              <a href="#" className="hover:text-accent-400 transition-colors">
                {content.footer.termsOfService}
              </a>
              <a href="#" className="hover:text-accent-400 transition-colors">
                {content.footer.cookiePolicy}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 