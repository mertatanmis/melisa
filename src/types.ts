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
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    description: string;
    education: Education;
    approach: Approach;
    expertise: Expertise;
    testimonials: Testimonials;
  };
  services: {
    title: string;
    items: Array<{
      title: string;
      description: string;
      features?: string[];
    }>;
  };
  location: {
    title: string;
    subtitle: string;
    description: string;
  };
  contact: {
    title: string;
    address: string;
    phone: string;
    email: string;
    formName: string;
    formEmail: string;
    formPhone: string;
    formMessage: string;
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
}