import React from 'react';
import { LanguageContent } from '../types';
import { GraduationCap, Globe2, Scale, Quote } from 'lucide-react';
import ImageSlider from './ImageSlider';
import TestimonialSlider from './TestimonialSlider';
import SectionHeader from './SectionHeader';
import { motion } from 'framer-motion';

interface AboutProps {
  content: LanguageContent;
}

const About: React.FC<AboutProps> = ({ content }) => {
  return (
    <section id="about" className="py-28 relative overflow-hidden scroll-mt-28">
      {/* Faint oversized watermark */}
      <img
        src="/images/last2.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-16 w-[480px] opacity-[0.035] select-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow={content.about.eyebrow}
          title={content.about.title}
          subtitle={content.about.description}
        />

        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-12">
            <EducationSection education={content.about.education} classOf={content.about.classOf} />
            <ApproachSection approach={content.about.approach} />
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 space-y-12 mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl overflow-hidden shadow-[0_24px_60px_-20px_rgba(13,27,46,0.35)] ring-1 ring-neutral-200/60"
            >
              <ImageSlider content={content} />
            </motion.div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <Quote className="w-5 h-5 text-accent-500" aria-hidden="true" />
                <h3 className="text-2xl font-serif text-corporate-900">
                  {content.about.testimonials.title}
                </h3>
                <span className="flex-1 h-px bg-gradient-to-r from-accent-300/60 to-transparent" />
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
  classOf: string;
}

const EducationSection: React.FC<EducationProps> = ({ education, classOf }) => (
  <motion.section
    aria-labelledby="education-section"
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className="flex items-center mb-7">
      <div className="p-3 bg-corporate-900 rounded-xl shadow-lg shadow-corporate-900/20">
        <GraduationCap className="w-6 h-6 text-accent-300" aria-hidden="true" />
      </div>
      <h3 id="education-section" className="text-2xl font-serif font-medium text-corporate-900 ml-4">
        {education.title}
      </h3>
      <span className="flex-1 h-px bg-gradient-to-r from-accent-300/60 to-transparent ml-6" />
    </div>

    <div className="card">
      <div className="relative border-l border-accent-300/60 ml-6 pl-10 space-y-10">
        {education.degrees.map((degree, index) => (
          <div key={index} className="relative">
            {/* Timeline dot */}
            <span className="absolute -left-[47px] top-1 w-3.5 h-3.5 rounded-full bg-accent-400 ring-4 ring-accent-100" aria-hidden="true" />
            <div className="flex items-start gap-5">
              <div className="p-2 bg-white rounded-lg shadow-sm border border-neutral-100 flex-shrink-0">
                <img
                  src={`/images/${degree.university.includes('Hull') ? 'university-of-hull-seeklogo.svg' : 'ieu_logo_en_3.jpg'}`}
                  alt={degree.university}
                  className="w-14 h-14 object-contain"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-corporate-900 font-serif">
                  {degree.level}
                </h4>
                <p className="text-accent-600 font-medium font-sans">
                  {degree.university}, {degree.location}
                </p>
                <p className="text-body mt-2 font-sans">
                  {degree.specialization}
                </p>
                <p className="text-neutral-400 text-sm mt-2 font-sans uppercase tracking-[0.15em]">
                  {classOf} {degree.graduationYear}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.section>
);

interface Approach {
  title: string;
  description: string;
  pillars: string[];
}

interface ApproachProps {
  approach: Approach;
}

const ApproachSection: React.FC<ApproachProps> = ({ approach }) => (
  <motion.section
    aria-labelledby="approach-section"
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.15 }}
  >
    <div className="flex items-center mb-7">
      <div className="p-3 bg-corporate-900 rounded-xl shadow-lg shadow-corporate-900/20">
        <Globe2 className="w-6 h-6 text-accent-300" aria-hidden="true" />
      </div>
      <h3 id="approach-section" className="text-2xl font-serif font-medium text-corporate-900 ml-4">
        {approach.title}
      </h3>
      <span className="flex-1 h-px bg-gradient-to-r from-accent-300/60 to-transparent ml-6" />
    </div>
    <div className="card">
      <p className="text-body text-lg leading-relaxed font-sans">
        {approach.description}
      </p>
      <div className="mt-8 pt-7 border-t border-neutral-100 grid sm:grid-cols-3 gap-4">
        {approach.pillars.map((pillar, i) => (
          <div key={i} className="flex items-center gap-3">
            <Scale className="w-4 h-4 text-accent-500 flex-shrink-0" aria-hidden="true" />
            <span className="text-sm font-sans font-semibold text-corporate-800 tracking-wide">
              {pillar}
            </span>
          </div>
        ))}
      </div>
    </div>
  </motion.section>
);
