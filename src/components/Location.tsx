import { LanguageContent } from '../types';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Anchor, Castle, Building } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

interface LocationProps {
  content: LanguageContent;
}

const getLocationImages = (isEnglish: boolean) => [
  {
    url: "/images/kusadasi/marina.jpg",
    caption: isEnglish ? "Kusadasi Marina" : "Kuşadası Marina",
    description: isEnglish
      ? "Modern marina with yacht facilities and waterfront dining"
      : "Modern marina tesisleri ve deniz kenarında yemek mekanları"
  },
  {
    url: "/images/kusadasi/guvercinada.jpg",
    caption: isEnglish ? "Güvercin Adası (Pigeon Island)" : "Güvercin Adası",
    description: isEnglish
      ? "Historic fortress with panoramic views of the Aegean Sea"
      : "Ege Denizi'nin panoramik manzarasına sahip tarihi kale"
  },
  {
    url: "/images/kusadasi/city-view.jpg",
    caption: isEnglish ? "Kusadasi City View" : "Kuşadası Şehir Manzarası",
    description: isEnglish
      ? "Vibrant city centre with modern amenities and historic charm"
      : "Modern imkanlar ve tarihi dokuya sahip canlı şehir merkezi"
  },
  {
    url: "/images/kusadasi/night.jpg",
    caption: isEnglish ? "Kusadasi at Night" : "Gece Kuşadası",
    description: isEnglish
      ? "Beautiful evening views of the illuminated coastline"
      : "Aydınlatılmış sahil şeridinin güzel gece manzarası"
  }
];

const getFeatures = (isEnglish: boolean) => [
  {
    icon: Anchor,
    title: isEnglish ? "Port City" : "Liman Şehri",
    description: isEnglish
      ? "Major cruise port with international connections"
      : "Uluslararası bağlantılara sahip önemli kruvaziyer limanı"
  },
  {
    icon: Castle,
    title: isEnglish ? "Historic Sites" : "Tarihi Mekanlar",
    description: isEnglish
      ? "Rich in cultural heritage and ancient attractions"
      : "Zengin kültürel miras ve antik cazibe merkezleri"
  },
  {
    icon: Building,
    title: isEnglish ? "Modern Living" : "Modern Yaşam",
    description: isEnglish
      ? "Contemporary facilities and residential areas"
      : "Çağdaş tesisler ve yerleşim alanları"
  },
  {
    icon: MapPin,
    title: isEnglish ? "Strategic Location" : "Stratejik Konum",
    description: isEnglish
      ? "Easy access to major tourist destinations"
      : "Önemli turistik noktalara kolay erişim"
  }
];

export default function Location({ content }: LocationProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isEnglish = content.nav.home === 'Home';
  const locationImages = getLocationImages(isEnglish);
  const features = getFeatures(isEnglish);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % locationImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [locationImages.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + locationImages.length) % locationImages.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % locationImages.length);
  };

  return (
    <section id="location" className="py-28 relative overflow-hidden scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow={content.location.eyebrow}
          title={content.location.title}
          subtitle={content.location.subtitle}
        />

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Column: Description and Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex"
          >
            <div className="card flex flex-col justify-center w-full">
              <p className="text-body leading-relaxed font-sans text-lg first-letter:font-serif first-letter:text-5xl first-letter:text-accent-500 first-letter:mr-2 first-letter:float-left first-letter:leading-[0.85]">
                {content.location.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mt-10 pt-8 border-t border-neutral-100">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-2.5 rounded-lg bg-accent-50 border border-accent-200/60 flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-accent-600" />
                    </div>
                    <div>
                      <h4 className="font-serif font-semibold text-corporate-900 mb-0.5">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-neutral-500 font-sans leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Image Slider */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[420px] lg:h-auto lg:min-h-[520px] overflow-hidden rounded-2xl shadow-[0_24px_60px_-20px_rgba(13,27,46,0.4)] ring-1 ring-neutral-200/60"
          >
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 z-20 -translate-y-1/2 bg-corporate-900/40 backdrop-blur-md hover:bg-accent-500 text-white p-3 rounded-full transition-all duration-300 border border-white/20"
              aria-label={content.a11y.previousImage}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 z-20 -translate-y-1/2 bg-corporate-900/40 backdrop-blur-md hover:bg-accent-500 text-white p-3 rounded-full transition-all duration-300 border border-white/20"
              aria-label={content.a11y.nextImage}
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Image Slider */}
            <div
              className="absolute inset-0 transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="flex h-full">
                {locationImages.map((image, index) => (
                  <div key={index} className="min-w-full h-full relative">
                    <img
                      src={image.url}
                      alt={image.caption}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-corporate-900/90 via-corporate-900/20 to-transparent"></div>
                    <div className="absolute bottom-0 inset-x-0 p-8 text-white">
                      <h4 className="text-2xl font-serif font-medium mb-1">
                        {image.caption}
                      </h4>
                      <p className="text-white/75 font-sans font-light text-sm">
                        {image.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Navigation */}
            <div className="absolute bottom-6 right-8 flex space-x-2 z-20">
              {locationImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex
                      ? 'bg-accent-400 w-6'
                      : 'bg-white/50 w-1.5 hover:bg-white/80'
                    }`}
                  aria-label={content.a11y.goToSlide.replace('{n}', String(index + 1))}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
