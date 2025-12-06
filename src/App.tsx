import { useState, useEffect } from 'react';
import { content } from './data/content';
import { Language } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Reveal } from './components/Reveal';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [language, setLanguage] = useState<Language>('en');
  const currentContent = content[language];

  useEffect(() => {
    // Update document title based on language
    document.title = language === 'en'
      ? 'OZDEMIR Law Office | Legal Services in Kusadasi'
      : 'ÖZDEMİR Hukuk Bürosu | Kusadasi Hukuk Hizmetleri';
  }, [language]);

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar
        content={currentContent}
        language={language}
        setLanguage={setLanguage}
      />
      <Hero content={currentContent} />

      <Reveal width="100%">
        <About content={currentContent} />
      </Reveal>

      <Reveal width="100%">
        <Services content={currentContent} />
      </Reveal>

      <Reveal width="100%">
        <Location content={currentContent} />
      </Reveal>

      <Reveal width="100%">
        <Contact content={currentContent} />
      </Reveal>

      <Footer content={currentContent} />
      <WhatsAppButton content={currentContent} />
    </div>
  );
}

export default App;