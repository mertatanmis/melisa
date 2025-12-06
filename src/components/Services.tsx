import { LanguageContent } from '../types';

interface ServicesProps {
  content: LanguageContent;
}

export default function Services({ content }: ServicesProps) {
  const backgroundImages = [
    'Complimentary Legal Consultation.jpg',
    'Real Estate & Property Law.jpg',
    'Corporate & Business Advisory.jpg',
    'Residency & Citizenship Services.jpg',
    'Cross-Border Legal Solutions.jpg',
    'Estate Planning & Inheritance Law.jpg',
    'Investment & Tax Advisory.jpg',
    'Tourist & Visitor Legal Protection.jpg'
  ];

  return (
    <section id="services" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-corporate-700 mb-4">
          {content.services.title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-corporate-400 to-corporate-600 mx-auto mb-16 rounded-full"></div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {content.services.items.map((service, index) => {
            const imagePath = `/images/assets/${backgroundImages[index]}`;
            
            return (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden shadow-lg will-change-transform cursor-pointer"
                style={{ height: '500px' }}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transform-gpu group-hover:scale-105 transition-transform duration-500 ease-out"
                  style={{
                    backgroundImage: `url('${imagePath}')`,
                    willChange: 'transform'
                  }}
                />
                
                {/* Static Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-corporate-900/75 to-corporate-900/95" />
                
                {/* Content Container */}
                <div className="relative h-full p-8 flex flex-col">
                  {/* Title - Always Visible */}
                  <h3 className="text-2xl font-bold text-white font-cormorant mb-6">
                    {service.title}
                  </h3>

                  {/* Description Container */}
                  <div className="relative flex-grow">
                    {/* Default View */}
                    <p className="text-white/90 leading-relaxed text-lg font-cormorant transition-opacity duration-300 group-hover:opacity-0">
                      {service.description.slice(0, 120)}...
                    </p>

                    {/* Hover View */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white leading-relaxed text-lg font-cormorant">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}