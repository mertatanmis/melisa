import { LanguageContent } from '../types';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Anchor, Castle, Building } from 'lucide-react';
import { motion } from 'framer-motion';

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
    caption: "Güvercin Adası (Pigeon Island)",
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
    <section id="location" className="py-24 bg-neutral-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-1/3 h-1/3 bg-corporate-100 rounded-full blur-3xl opacity-20 -translate-y-1/2 -ml-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            {content.location.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-corporate-400 to-accent-400 mx-auto mb-6 rounded-full"></div>
          <p className="section-subtitle">
            {content.location.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Description and Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 mb-8 border border-white/20">
              <p className="text-body leading-relaxed mb-8 font-sans text-lg">
                {content.location.description}
              </p>

              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-corporate-50 p-3 rounded-xl">
                      <feature.icon className="w-6 h-6 text-corporate-600" />
                    </div>
                    <div>
                      <h4 className="font-serif font-semibold text-corporate-800 mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-neutral-600 font-sans">
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
            transition={{ duration: 0.8 }}
            className="relative h-[500px] overflow-hidden rounded-2xl shadow-2xl"
          >
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 z-20 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/90 text-white hover:text-corporate-900 p-3 rounded-full transition-all duration-300 border border-white/20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 z-20 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/90 text-white hover:text-corporate-900 p-3 rounded-full transition-all duration-300 border border-white/20"
            >
              <ChevronRight className="w-6 h-6" />
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 inset-x-0 p-8 text-white">
                      <h4 className="text-2xl font-serif font-medium mb-2">
                        {image.caption}
                      </h4>
                      <p className="text-white/80 font-sans font-light">
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
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                      ? 'bg-white w-6'
                      : 'bg-white/50 hover:bg-white/80'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}