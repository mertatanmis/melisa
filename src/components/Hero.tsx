import { LanguageContent } from '../types';

interface HeroProps {
  content: LanguageContent;
}

export default function Hero({ content }: HeroProps) {
  return (
    <div id="home" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Law office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-corporate-800/80"></div>
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-50 mb-6">
            {content.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-neutral-200 mb-8">
            {content.hero.subtitle}
          </p>
          <a
            href="#contact"
            className="inline-block bg-accent-500 text-neutral-50 px-8 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            {content.hero.cta}
          </a>
        </div>
      </div>
    </div>
  );
}