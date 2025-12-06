import React from 'react';
import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { LanguageContent } from '../types';
import { constants } from '../data/content';

interface FooterProps {
  content: LanguageContent;
}

export default function Footer({ content }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-corporate-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {content.nav.home === 'Home' ? 'OZDEMIR' : 'ÖZDEMİR'}
              <span className="block text-base font-normal text-neutral-300 mt-0.5">
                {content.nav.home === 'Home' ? 'Law Office' : 'Hukuk Bürosu'}
              </span>
            </h3>
            <p className="text-neutral-300 text-sm leading-relaxed mb-4">
              {content.footer.description}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/avmelisaozdemir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/melisa-gül-özdemir-92a294171/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-3">{content.footer.quickLinks}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-neutral-300 hover:text-white transition-colors">
                  {content.nav.home}
                </a>
              </li>
              <li>
                <a href="#about" className="text-neutral-300 hover:text-white transition-colors">
                  {content.nav.about}
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-300 hover:text-white transition-colors">
                  {content.nav.services}
                </a>
              </li>
              <li>
                <a href="#location" className="text-neutral-300 hover:text-white transition-colors">
                  {content.nav.location}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-neutral-300 hover:text-white transition-colors">
                  {content.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold mb-3">{content.footer.contactInfo}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-corporate-400 flex-shrink-0 mt-1" />
                <span className="text-neutral-300">{content.contact.address}</span>
              </li>
              <li>
                <a 
                  href={`tel:${content.contact.phone}`}
                  className="flex items-center space-x-2 text-neutral-300 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-corporate-400" />
                  <span>{content.contact.phone}</span>
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${constants.email}`}
                  className="flex items-center space-x-2 text-neutral-300 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-corporate-400" />
                  <span>{constants.email}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-base font-semibold mb-3">{content.footer.officeHours}</h3>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li className="flex justify-between">
                <span>{content.footer.weekdays}</span>
                <span>{content.footer.weekdayHours}</span>
              </li>
              <li className="flex justify-between">
                <span>{content.footer.saturday}</span>
                <span>{content.footer.saturdayHours}</span>
              </li>
              <li className="flex justify-between">
                <span>{content.footer.sunday}</span>
                <span>{content.footer.closed}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-corporate-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-neutral-400 text-xs">
              © {currentYear} ÖZDEMIR Law Office. {content.footer.allRightsReserved}
            </p>
            <div className="flex space-x-4 text-xs">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                {content.footer.privacyPolicy}
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                {content.footer.termsOfService}
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                {content.footer.cookiePolicy}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 