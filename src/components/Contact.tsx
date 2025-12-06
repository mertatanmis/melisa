import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { LanguageContent } from '../types';
import { constants } from '../data/content';
import { motion } from 'framer-motion';

interface ContactProps {
  content: LanguageContent;
}

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
    } catch (error) {
      setErrorMessage('Failed to send message. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-neutral-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-corporate-100 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent-100 rounded-full blur-3xl opacity-20 -ml-10 -mb-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">
            {content.contact.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-corporate-400 to-accent-400 mx-auto mb-6 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20">
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-corporate-50 p-4 rounded-xl shadow-inner">
                    <MapPin className="w-6 h-6 text-corporate-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-corporate-800 mb-2">Office Address</h3>
                    <span className="text-body font-sans leading-relaxed block max-w-xs">{content.contact.address}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-corporate-50 p-4 rounded-xl shadow-inner">
                    <Phone className="w-6 h-6 text-corporate-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-corporate-800 mb-2">Phone</h3>
                    <a
                      href={`tel:${content.contact.phone}`}
                      className="text-body hover:text-accent-500 transition-colors font-sans block"
                    >
                      {content.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-corporate-50 p-4 rounded-xl shadow-inner">
                    <svg className="w-6 h-6 text-corporate-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-corporate-800 mb-2">WhatsApp</h3>
                    <a
                      href={`https://wa.me/${content.contact.phone.replace(/\s/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body hover:text-accent-500 transition-colors font-sans block"
                    >
                      {content.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-corporate-50 p-4 rounded-xl shadow-inner">
                    <Mail className="w-6 h-6 text-corporate-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-corporate-800 mb-2">Email</h3>
                    <a
                      href={`mailto:${constants.email}`}
                      className="text-body hover:text-accent-500 transition-colors font-sans"
                    >
                      {constants.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-xl border border-white/20 overflow-hidden">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.339852367718!2d27.25808037611591!3d37.85233770768796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bea9ad239d057d%3A0x4118e50953b94b7a!2zw5Z6dGHFnyBQbGF6YQ!5e0!3m2!1sen!2str!4v1731249380297!5m2!1sen!2str"
                className="w-full h-[300px] rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-md p-10 rounded-2xl shadow-xl border border-white/20">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-corporate-700 mb-2 font-sans uppercase tracking-wider">
                    {content.contact.formName}
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-4 rounded-lg bg-neutral-50/50 border border-neutral-200 text-body 
                             focus:ring-2 focus:ring-accent-400/20 focus:border-accent-400 
                             transition-all duration-300 outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-corporate-700 mb-2 font-sans uppercase tracking-wider">
                    {content.contact.formEmail}
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-4 rounded-lg bg-neutral-50/50 border border-neutral-200 text-body 
                             focus:ring-2 focus:ring-accent-400/20 focus:border-accent-400 
                             transition-all duration-300 outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-corporate-700 mb-2 font-sans uppercase tracking-wider">
                    {content.contact.formPhone}
                  </label>
                  <input
                    type="tel"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full px-4 py-4 rounded-lg bg-neutral-50/50 border border-neutral-200 text-body 
                             focus:ring-2 focus:ring-accent-400/20 focus:border-accent-400 
                             transition-all duration-300 outline-none"
                    placeholder="+90 XXX XXX XXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-corporate-700 mb-2 font-sans uppercase tracking-wider">
                    {content.contact.formMessage}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-4 rounded-lg bg-neutral-50/50 border border-neutral-200 text-body 
                             focus:ring-2 focus:ring-accent-400/20 focus:border-accent-400 
                             transition-all duration-300 resize-none outline-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-corporate-900 text-white px-6 py-4 rounded-lg 
                           hover:bg-accent-600 disabled:opacity-70 disabled:cursor-not-allowed
                           transition-all duration-300 font-medium tracking-wide
                           shadow-lg hover:shadow-accent-500/30 transform hover:-translate-y-1 active:translate-y-0"
                >
                  {isSubmitting ? '...' : content.contact.formSubmit}
                </button>
              </div>
            </form>

            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg shadow-md"
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
                className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg shadow-md"
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