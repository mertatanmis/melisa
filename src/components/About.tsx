import React from 'react';
import { LanguageContent } from '../types';
import {
  GraduationCap,
  Users,
  Globe2
} from 'lucide-react';
import ImageSlider from './ImageSlider';
import TestimonialSlider from './TestimonialSlider';

interface AboutProps {
  content: LanguageContent;
}

const About: React.FC<AboutProps> = ({ content }) => {
  return (
    <section id="about" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center mb-12">
          <h2 className="text-3xl font-bold text-corporate-700">
            {content.about.title}
          </h2>
          <p className="mt-6 text-lg text-body-color max-w-3xl mx-auto">
            {content.about.description}
          </p>
        </header>

        {/* Content Grid */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Content Sections */}
          <div className="lg:col-span-7 space-y-12">
            <EducationSection education={content.about.education} />
            <ApproachSection approach={content.about.approach} />
          </div>

          {/* Right Column: Image Slider and Testimonials */}
          <div className="lg:col-span-5 space-y-12 mt-12 lg:mt-0">
            <div className="rounded-lg overflow-hidden shadow-md">
              <ImageSlider content={content} />
            </div>
            
            {/* Testimonials Section with Slider */}
            <div>
              <div className="flex items-center mb-6">
                <Users className="w-6 h-6 text-corporate-600 mr-2" aria-hidden="true" />
                <h3 className="text-2xl font-semibold text-corporate-700">
                  {content.about.testimonials.title}
                </h3>
              </div>
              <TestimonialSlider testimonials={content.about.testimonials} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

/* --------------------- Internal Components --------------------- */

interface Education {
  title: string;
  degrees: Degree[];
}

interface Degree {
  level: string;
  university: string;
  location: string;
  specialization: string;
  graduationYear: string;
  achievements: string[];
}

interface EducationProps {
  education: Education;
}

const EducationSection: React.FC<EducationProps> = ({ education }) => (
  <section aria-labelledby="education-section">
    <div className="flex items-center mb-6">
      <div className="p-3 bg-corporate-50 rounded-xl">
        <GraduationCap className="w-6 h-6 text-corporate-600" aria-hidden="true" />
      </div>
      <h3 id="education-section" className="text-2xl font-semibold text-corporate-700 ml-4">
        {education.title}
      </h3>
    </div>
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-neutral-100">
      {education.degrees.map((degree, index) => (
        <div key={index} className={`${index !== 0 ? 'mt-8 pt-8 border-t border-neutral-100' : ''}`}>
          <div className="flex items-start gap-4">
            <img
              src={`/images/${degree.university.includes('Hull') ? 'university-of-hull-seeklogo.svg' : 'ieu_logo_en_3.jpg'}`}
              alt={degree.university}
              className="w-16 h-16 object-contain"
            />
            <div className="flex-1">
              <h4 className="text-xl font-bold text-corporate-700">
                {degree.level}
              </h4>
              <p className="text-body font-medium text-lg">
                {degree.university}, {degree.location}
              </p>
              <p className="text-body/80 mb-2">
                {degree.specialization}
              </p>
              <p className="text-body/80 text-sm">
                Class of {degree.graduationYear}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

interface Approach {
  title: string;
  description: string;
}

interface ApproachProps {
  approach: Approach;
}

const ApproachSection: React.FC<ApproachProps> = ({ approach }) => (
  <section aria-labelledby="approach-section">
    <div className="flex items-center mb-4">
      <Globe2 className="w-6 h-6 text-corporate-600 mr-2" aria-hidden="true" />
      <h3 id="approach-section" className="text-2xl font-semibold text-corporate-700">
        {approach.title}
      </h3>
    </div>
    <p className="text-body">
      {approach.description}
    </p>
  </section>
);