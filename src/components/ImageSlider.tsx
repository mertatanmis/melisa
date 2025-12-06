import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { LanguageContent } from '../types';

interface ImageSliderProps {
  content: LanguageContent;
}

const getImages = (isEnglish: boolean) => [
  {
    url: "/images/office/office1.jpg",
    caption: isEnglish ? "Office Interior" : "Ofis İç Mekanı",
    description: isEnglish 
      ? "Modern and professional office space in Öztaş Plaza" 
      : "Öztaş Plaza'da modern ve profesyonel ofis alanımız"
  },
  {
    url: "/images/office/waiting_area.jpg",
    caption: isEnglish ? "Waiting Area" : "Bekleme Alanı",
    description: isEnglish 
      ? "Comfortable waiting area for our clients" 
      : "Müvekkillerimiz için konforlu bekleme alanı"
  },
  {
    url: "/images/office/meeting_room.jpg",
    caption: isEnglish ? "Meeting Room" : "Toplantı Odası",
    description: isEnglish 
      ? "Professional meeting room for client consultations" 
      : "Müvekkil görüşmeleri için profesyonel toplantı odası"
  },
  {
    url: "/images/office/oztas.jpg",
    caption: isEnglish ? "Building Exterior" : "Bina Dışı",
    description: isEnglish 
      ? "Öztaş Plaza - Our office building in the heart of Kusadasi" 
      : "Öztaş Plaza - Kuşadası'nın merkezindeki ofis binamız"
  },
  {
    url: "/images/office/carpark.jpg",
    caption: isEnglish ? "Covered Car Park" : "Kapalı Otopark",
    description: isEnglish 
      ? "Secure covered car park for our clients" 
      : "Müvekkillerimiz için güvenli kapalı otopark"
  },
  {
    url: "/images/office/open_carpark.jpg",
    caption: isEnglish ? "Open Car Park" : "Açık Otopark",
    description: isEnglish 
      ? "Additional open car park space available" 
      : "Ek açık otopark alanı mevcut"
  }
];

export default function ImageSlider({ content }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isEnglish = content.nav.home === 'Home';
  const images = getImages(isEnglish);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative h-96 overflow-hidden rounded-xl">
      <div
        className="absolute inset-0 transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        <div className="flex h-full">
          {images.map((image, index) => (
            <div key={index} className="min-w-full h-full relative">
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  console.error(`Failed to load image: ${target.src}`);
                  target.src = '/images/last2.svg'; // Fallback image
                }}
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent text-white p-6">
                <p className="text-center text-lg font-cormorant font-semibold tracking-wide mb-2">
                  {image.caption}
                </p>
                <p className="text-center text-sm font-light opacity-90 max-w-2xl mx-auto">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>
    </div>
  );
}