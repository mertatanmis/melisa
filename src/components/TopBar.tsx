import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';
import { LanguageContent } from '../types';
import { constants } from '../data/content';

interface TopBarProps {
  content: LanguageContent;
}

export default function TopBar({ content }: TopBarProps) {
  const phoneNumber = content.contact.phone.replace(/\s/g, '');
  const whatsappMessage = 'Hello, I would like to get information.';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-corporate-800 text-neutral-300 py-2 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between py-1 text-sm">
          <div className="hidden sm:flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <a href={`tel:${phoneNumber}`} className="flex items-center space-x-2 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5" />
                <span>{content.contact.phone}</span>
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-white transition-colors">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="hover:underline">WhatsApp</span>
              </a>
              <a href={`mailto:${constants.email}`} className="flex items-center space-x-2 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5" />
                <span className="hover:underline truncate max-w-[200px] md:max-w-none">{constants.email}</span>
              </a>
            </div>
          </div>

          <div className="flex sm:hidden justify-center space-x-6 w-full py-1">
            <a href={`tel:${phoneNumber}`} className="hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <a href={`mailto:${constants.email}`} className="hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>
          
          <div className="flex items-center justify-center sm:justify-end space-x-4 mt-2 sm:mt-0">
            <a
              href="https://instagram.com/avmelisaozdemir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/melisa-gül-özdemir-92a294171/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}