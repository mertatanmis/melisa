export type Language = 'en' | 'tr';

interface Education {
  title: string;
  degrees: {
    level: string;
    university: string;
    location: string;
    specialization: string;
    graduationYear: string;
    achievements: string[];
  }[];
}

interface Approach {
  title: string;
  description: string;
  pillars: string[];
}

interface Expertise {
  title: string;
  items: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
}

interface Testimonials {
  title: string;
  items: Testimonial[];
}

export interface LanguageContent {
  nav: {
    home: string;
    about: string;
    services: string;
    location: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cta: string;
    secondaryCta: string;
    stats: { value: string; label: string }[];
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    classOf: string;
    education: Education;
    approach: Approach;
    expertise: Expertise;
    testimonials: Testimonials;
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    viewDetails: string;
    keyFeatures: string;
    scheduleConsultation: string;
    items: Array<{
      title: string;
      description: string;
      features?: string[];
    }>;
  };
  location: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    formTitle: string;
    officeAddress: string;
    phoneLabel: string;
    whatsappLabel: string;
    emailLabel: string;
    address: string;
    phone: string;
    email: string;
    formName: string;
    formEmail: string;
    formPhone: string;
    formMessage: string;
    formMessagePlaceholder: string;
    formSubmit: string;
    whatsapp: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    contactInfo: string;
    officeHours: string;
    privacyPolicy: string;
    termsOfService: string;
    cookiePolicy: string;
    allRightsReserved: string;
    weekdays: string;
    saturday: string;
    sunday: string;
    weekdayHours: string;
    saturdayHours: string;
    closed: string;
  };
  a11y: {
    toggleMenu: string;
    close: string;
    previousImage: string;
    nextImage: string;
    previousTestimonial: string;
    nextTestimonial: string;
    goToSlide: string;
    goToTestimonial: string;
  };
}
