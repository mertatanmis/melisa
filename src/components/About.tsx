import React from 'react';
import { LanguageContent } from '../types';
import {
  GraduationCap,
  Users,
  Globe2
} from 'lucide-react';
import ImageSlider from './ImageSlider';
import TestimonialSlider from './TestimonialSlider';
import { motion } from 'framer-motion';

interface AboutProps {
  content: LanguageContent;
}

const About: React.FC<AboutProps> = ({ content }) => {
  return (
    <section id="about" className="py-24 bg-neutral-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-corporate-50/50 via-transparent to-transparent opacity-70"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            {content.about.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-corporate-400 to-accent-400 mx-auto mb-8 rounded-full"></div>
          <p className="section-subtitle">
            {content.about.description}
          </p>
        </div>

        {/* Content Grid */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Content Sections */}
          <div className="lg:col-span-7 space-y-12">
            <EducationSection education={content.about.education} />
            <ApproachSection approach={content.about.approach} />
          </div>

          {/* Right Column: Image Slider and Testimonials */}
          <div className="lg:col-span-5 space-y-12 mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl overflow-hidden shadow-2xl border border-white/20"
            >
              <ImageSlider content={content} />
            </motion.div>

            {/* Testimonials Section with Slider */}
            <div>
              <div className="flex items-center mb-6 pl-2 border-l-4 border-accent-400">
                <Users className="w-6 h-6 text-corporate-600 mr-3" aria-hidden="true" />
                <h3 className="text-2xl font-serif text-corporate-800">
                  {content.about.testimonials.title}
                </h3>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                <TestimonialSlider testimonials={content.about.testimonials} />
              </div>
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
  <motion.section
    aria-labelledby="education-section"
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
  >
    <div className="flex items-center mb-6">
      <div className="p-3 bg-corporate-900 rounded-xl shadow-lg">
        <GraduationCap className="w-6 h-6 text-white" aria-hidden="true" />
      </div>
      <h3 id="education-section" className="text-2xl font-serif font-medium text-corporate-900 ml-4">
        {education.title}
      </h3>
    </div>
    <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
      {education.degrees.map((degree, index) => (
        <div key={index} className={`${index !== 0 ? 'mt-8 pt-8 border-t border-neutral-100' : ''}`}>
          <div className="flex items-start gap-6">
            <div className="p-2 bg-white rounded-lg shadow-sm border border-neutral-100">
              <img
                src={`/images/${degree.university.includes('Hull') ? 'university-of-hull-seeklogo.svg' : 'ieu_logo_en_3.jpg'}`}
                alt={degree.university}
                className="w-14 h-14 object-contain"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-bold text-corporate-800 font-serif">
                {degree.level}
              </h4>
              <p className="text-accent-500 font-medium text-lg font-sans">
                {degree.university}, {degree.location}
              </p>
              <p className="text-body mt-2 font-sans">
                {degree.specialization}
              </p>
              <p className="text-neutral-400 text-sm mt-1 font-mono">
                Class of {degree.graduationYear}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </motion.section>
);

interface Approach {
  title: string;
  description: string;
}

interface ApproachProps {
  approach: Approach;
}

const ApproachSection: React.FC<ApproachProps> = ({ approach }) => (
  <motion.section
    aria-labelledby="approach-section"
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    <div className="flex items-center mb-6">
      <div className="p-3 bg-corporate-900 rounded-xl shadow-lg">
        <Globe2 className="w-6 h-6 text-white" aria-hidden="true" />
      </div>
      <h3 id="approach-section" className="text-2xl font-serif font-medium text-corporate-900 ml-4">
        {approach.title}
      </h3>
    </div>
    <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
      <p className="text-body text-lg leading-relaxed font-sans">
        {approach.description}
      </p>
    </div>
  </motion.section>
);