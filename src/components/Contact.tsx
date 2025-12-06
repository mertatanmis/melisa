import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { LanguageContent } from '../types';
import { constants } from '../data/content';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-corporate-700 mb-4">
            {content.contact.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-corporate-400 to-corporate-600 mx-auto mb-6 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-200">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-corporate-50 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-corporate-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-corporate-700 mb-1">Office Address</h3>
                    <span className="text-body">{content.contact.address}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-corporate-50 p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-corporate-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-corporate-700 mb-1">Phone</h3>
                    <a 
                      href={`tel:${content.contact.phone}`} 
                      className="text-body hover:text-corporate-600 transition-colors"
                    >
                      {content.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-corporate-50 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-corporate-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-corporate-700 mb-1">Email</h3>
                    <a 
                      href={`mailto:${constants.email}`} 
                      className="text-body hover:text-corporate-600 transition-colors"
                    >
                      {constants.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white p-4 rounded-2xl shadow-lg border border-neutral-200">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.339852367718!2d27.25808037611591!3d37.85233770768796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bea9ad239d057d%3A0x4118e50953b94b7a!2zw5Z6dGHFnyBQbGF6YQ!5e0!3m2!1sen!2str!4v1731249380297!5m2!1sen!2str"
                className="w-full h-[300px] rounded-xl"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-200">
              <div className="space-y-6">
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-semibold text-corporate-700 mb-2">
                    {content.contact.formName}
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-neutral-50 border-neutral-200 text-body 
                             focus:ring-2 focus:ring-corporate-400 focus:border-corporate-400 
                             transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-semibold text-corporate-700 mb-2">
                    {content.contact.formEmail}
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-neutral-50 border-neutral-200 text-body 
                             focus:ring-2 focus:ring-corporate-400 focus:border-corporate-400 
                             transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone Input */}
                <div>
                  <label className="block text-sm font-semibold text-corporate-700 mb-2">
                    {content.contact.formPhone}
                  </label>
                  <input
                    type="tel"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-neutral-50 border-neutral-200 text-body 
                             focus:ring-2 focus:ring-corporate-400 focus:border-corporate-400 
                             transition-colors duration-300"
                    placeholder="+90 XXX XXX XXXX"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-sm font-semibold text-corporate-700 mb-2">
                    {content.contact.formMessage}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-neutral-50 border-neutral-200 text-body 
                             focus:ring-2 focus:ring-corporate-400 focus:border-corporate-400 
                             transition-colors duration-300 resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-corporate-600 text-white px-6 py-4 rounded-lg 
                           hover:bg-corporate-700 active:bg-corporate-800 
                           transition-colors duration-300 font-medium
                           shadow-md hover:shadow-lg 
                           focus:outline-none focus:ring-2 focus:ring-corporate-400 focus:ring-opacity-50"
                >
                  {content.contact.formSubmit}
                </button>
              </div>
            </form>

            {/* Success Message */}
            {showSuccess && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-700 text-center">
                  Thank you for your message. We will get back to you soon!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}