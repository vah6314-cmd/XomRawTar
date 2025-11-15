'use client';

import { useState } from 'react';

interface FormData {
  fullName: string;
  businessName: string;
  email: string;
  projectDescription: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    businessName: '',
    email: '',
    projectDescription: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Business name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = 'Project description is required';
    } else if (formData.projectDescription.trim().length < 10) {
      newErrors.projectDescription = 'Please provide more details about your project';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create mailto link for GitHub Pages deployment (no backend)
      const subject = encodeURIComponent('New Website Project Request from Rayline Web Development');
      const body = encodeURIComponent(`Hello Rayline Web Development Team,

I would like to inquire about a website project with the following details:

Full Name: ${formData.fullName}
Business Name: ${formData.businessName}
Email: ${formData.email}
Project Description: ${formData.projectDescription}

I'm interested in your web design services and would appreciate more information about getting started.

Thank you!
${formData.fullName}`);

      // Open email client with pre-filled information
      window.location.href = `mailto:raylinewebdev@gmail.com?subject=${subject}&body=${body}`;

      // Show success message after a delay
      setTimeout(() => {
        setSubmitStatus('success');
        setIsSubmitting(false);
      }, 500);

    } catch {
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

  const whatsappNumber = '+917827599839';
  const whatsappMessage = encodeURIComponent('Hi! I\'m interested in your web design services');

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Get Started Today</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Ready to grow your business with a professional website? Let&apos;s discuss your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Send Us a Message</h3>

              {/* Form Fields */}
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base ${
                      errors.fullName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base ${
                      errors.businessName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Your Business LLC"
                  />
                  {errors.businessName && (
                    <p className="mt-1 text-sm text-red-600">{errors.businessName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="john@business.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleInputChange}
                    rows={4 sm:rows={5}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none text-sm sm:text-base ${
                      errors.projectDescription ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Tell us about your website project, your business, and what you're looking for..."
                  />
                  {errors.projectDescription && (
                    <p className="mt-1 text-sm text-red-600">{errors.projectDescription}</p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full mt-6 sm:mt-8 py-3 px-6 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base ${
                  isSubmitting
                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  <p className="font-semibold">Message sent successfully!</p>
                  <p className="text-sm">We&apos;ll get back to you within 24 hours.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  <p className="font-semibold">Something went wrong</p>
                  <p className="text-sm">Please try again or contact us directly via WhatsApp.</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6">
            {/* Email Card */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 012.828 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Email Us</h4>
              </div>
              <a
                href="mailto:raylinewebdev@gmail.com"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base"
              >
                raylinewebdev@gmail.com
              </a>
              <p className="text-xs sm:text-sm text-gray-600 mt-2">We respond to all emails within 24 hours</p>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.442.456-.597.872-1.82.144-.46.348-1.01.419-1.648.149-.386.591-.425 1.689-.133.237.885-.196 1.692.232.298.062.357-.038.376-.7.178.252-.862-.233-1.59.139-1.446-.62-.245-.632-.18-.44-.025-.662.095-1.059.218-1.57.105-.28-.088-.309-.06-.518-.017-.822.111-.234.02-.054-1.04-.109-.37-.105-.357.172-.251.396-.046.176.114-.025-.051-.03-.015-1.094-.151-.34-.479-.291-.066.178.068-.209-.018-.438-.13-.498-.057-.268.018-.943.268-.994-.067-.035-.098.11-.063.099-.014.149-.038.222.053.412.08.933-.111-.267.086-.747.44.673.314-1.854.054-.5.1.366-.018.884-.233.428.06-.896.447-.894.49.404.332-.302.044-.45-.025-.631-.155-.874-.186.592-.232-.545-.015-.949.104-.472.069-.67.024-.41-.026-.9-.016-.297-.017-.185-.051-.386-.023-.941.13-.563.074-.253.154-1.07.015-.144.048-1.11-.011-.403-.13-.496-.05-.005-.437-.119-.191-.17-.777-.003-.309.125-.398-.355-.467.04-.254.03-.288.057-.19.097-.098-.246-.08-.948.497-.983.095-.374-.121-.121-.067-.064-.125-.119-.192-.087-.39-.003-.006-.043-.058-.079-.068-.029-.12-.037-.08-.026-.137.09-.245-.059-.372-.09-.342-.048-.563-.033-.276-.12-.262-.077-.475-.053-.932-.032-.476-.036-.621-.053-.274-.08-.356.05-.364-.153-.57-.102-.752-.239-1.6.642-1.925z"/>
                  </svg>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Chat on WhatsApp</h4>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Get instant answers and quick project discussions</p>
              <a
                href={`https://wa.me/${whatsappNumber.replace('+', '')}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200 text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.442.456-.597.872-1.82.144-.46.348-1.01.419-1.648.149-.386.591-.425 1.689-.133.237.885-.196 1.692.232.298.062.357-.038.376-.7.178.252-.862-.233-1.59.139-1.446-.62-.245-.632-.18-.44-.025-.662.095-1.059.218-1.57.105-.28-.088-.309-.06-.518-.017-.822.111-.234.02-.054-1.04-.109-.37-.105-.357.172-.251.396-.046.176.114-.025-.051-.03-.015-1.094-.151-.34-.479-.291-.066.178.068-.209-.018-.438-.13-.498-.057-.268.018-.943.268-.994-.067-.035-.098.11-.063.099-.014.149-.038.222.053.412.08.933-.111-.267.086-.747.44.673.314-1.854.054-.5.1.366-.018.884-.233.428.06-.896.447-.894.49.404.332-.302.044-.45-.025-.631-.155-.874-.186.592-.232-.545-.015-.949.104-.472.069-.67.024-.41-.026-.9-.016-.297-.017-.185-.051-.386-.023-.941.13-.563.074-.253.154-1.07.015-.144.048-1.11-.011-.403-.13-.496-.05-.005-.437-.119-.191-.17-.777-.003-.309.125-.398-.355-.467.04-.254.03-.288.057-.19.097-.098-.246-.08-.948.497-.983.095-.374-.121-.121-.067-.064-.125-.119-.192-.087-.39-.003-.006-.043-.058-.079-.068-.029-.12-.037-.08-.026-.137.09-.245-.059-.372-.09-.342-.048-.563-.033-.276-.12-.262-.077-.475-.053-.932-.032-.476-.036-.621-.053-.274-.08-.356.05-.364-.153-.57-.102-.752-.239-1.6.642-1.925z"/>
                </svg>
                Start Chat
              </a>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 sm:mt-3">Phone: {whatsappNumber}</p>
            </div>

            {/* Why Choose Us Card */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4 4 2z" />
                  </svg>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Why Choose Us?</h4>
              </div>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-sm sm:text-base">Affordable pricing for small businesses</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-sm sm:text-base">Fast delivery (1-4 weeks)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-sm sm:text-base">Mobile-responsive designs</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-sm sm:text-base">Ongoing support included</span>
                </li>
              </ul>
            </div>

            {/* Response Time Badge */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 sm:p-4 text-center">
              <div className="inline-flex items-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-green-800 font-semibold text-sm sm:text-base">Usually responds within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}