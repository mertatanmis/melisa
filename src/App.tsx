import { useState, useEffect } from 'react';
import { content } from './data/content';
import { Language } from './types';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
    <div className="min-h-screen">
      <TopBar content={currentContent} />
      <Navbar
        content={currentContent}
        language={language}
        setLanguage={setLanguage}
      />
      <Hero content={currentContent} />
      <About content={currentContent} />
      <Services content={currentContent} />
      <Location content={currentContent} />
      <Contact content={currentContent} />
      <Footer content={currentContent} />
    </div>
  );
}

export default App;