import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { LanguageContent } from '../types';
import { constants } from '../data/content';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

interface ContactProps {
  content: LanguageContent;
}

const WHATSAPP_ICON = (
  <svg className="w-5 h-5 text-accent-600" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Contact({ content }: ContactProps) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/xrbnlwvq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormState({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        setErrorMessage('Something went wrong. Please try again.');
      }
    } catch {
      setErrorMessage('Failed to send message. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const infoItems = [
    {
      icon: <MapPin className="w-5 h-5 text-accent-600" />,
      label: content.contact.officeAddress,
      value: content.contact.address,
      href: undefined as string | undefined,
    },
    {
      icon: <Phone className="w-5 h-5 text-accent-600" />,
      label: content.contact.phoneLabel,
      value: content.contact.phone,
      href: `tel:${content.contact.phone}`,
    },
    {
      icon: WHATSAPP_ICON,
      label: content.contact.whatsappLabel,
      value: content.contact.phone,
      href: `https://wa.me/${content.contact.phone.replace(/\s/g, '')}`,
    },
    {
      icon: <Mail className="w-5 h-5 text-accent-600" />,
      label: content.contact.emailLabel,
      value: constants.email,
      href: `mailto:${constants.email}`,
    },
  ];

  return (
    <section id="contact" className="py-28 relative overflow-hidden scroll-mt-28">
      {/* Soft background flourish */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-corporate-100/60 rounded-full blur-3xl -mr-20 -mt-20" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent-100/50 rounded-full blur-3xl -ml-10 -mb-10" aria-hidden="true"></div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          eyebrow={content.contact.eyebrow}
          title={content.contact.title}
          subtitle={content.contact.subtitle}
        />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="card">
              <div className="divide-y divide-neutral-100">
                {infoItems.map((info, i) => (
                  <div key={i} className="flex items-start space-x-5 py-6 first:pt-0 last:pb-0">
                    <div className="p-3 rounded-xl bg-accent-50 border border-accent-200/60 flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-[11px] font-semibold text-corporate-600 uppercase tracking-[0.25em] mb-1.5 font-sans">
                        {info.label}
                      </h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-corporate-900 hover:text-accent-600 transition-colors font-sans text-lg leading-relaxed"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-corporate-900 font-sans text-base leading-relaxed block">
                          {info.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl shadow-[0_24px_60px_-20px_rgba(13,27,46,0.3)] border border-neutral-200/70 overflow-hidden">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.339852367718!2d27.25808037611591!3d37.85233770768796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bea9ad239d057d%3A0x4118e50953b94b7a!2zw5Z6dGHFnyBQbGF6YQ!5e0!3m2!1sen!2str!4v1731249380297!5m2!1sen!2str"
                className="w-full h-[300px] grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="card !p-10">
              <h3 className="font-serif text-2xl text-corporate-900 mb-2">{content.contact.formTitle}</h3>
              <span className="block h-px w-14 bg-accent-400 mb-8" />
              <div className="space-y-6">
                <div>
                  <label className="field-label">
                    {content.contact.formName}
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="input-field"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="field-label">
                    {content.contact.formEmail}
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="input-field"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="field-label">
                    {content.contact.formPhone}
                  </label>
                  <input
                    type="tel"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="input-field"
                    placeholder="+90 XXX XXX XXXX"
                  />
                </div>

                <div>
                  <label className="field-label">
                    {content.contact.formMessage}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="input-field resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-corporate-900 text-white px-6 py-4 rounded-full
                           hover:bg-accent-600 disabled:opacity-70 disabled:cursor-not-allowed
                           transition-all duration-300 font-medium tracking-wide
                           shadow-lg hover:shadow-accent-500/30 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  {isSubmitting ? '...' : content.contact.formSubmit}
                </button>
              </div>
            </form>

            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl shadow-md"
              >
                <p className="text-green-800 text-center font-medium">
                  Thank you for your message. We will get back to you soon!
                </p>
              </motion.div>
            )}

            {errorMessage && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl shadow-md"
              >
                <p className="text-red-800 text-center font-medium">
                  {errorMessage}
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
