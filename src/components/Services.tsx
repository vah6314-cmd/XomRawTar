'use client';

import { useState } from 'react';

interface ServicePackage {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  delivery: string;
  support: string;
  popular?: boolean;
}

const servicePackages: ServicePackage[] = [
  {
    id: 'starter',
    name: 'Starter Website',
    price: '$299-499',
    description: 'Perfect for small businesses needing a professional online presence',
    features: [
      '3-5 pages (Home, About, Services, Contact, Gallery)',
      'Mobile responsive design',
      'Basic SEO optimization',
      'Contact form integration',
      'Social media links',
      '1-year hosting included'
    ],
    delivery: '1-week delivery',
    support: 'Email support for 30 days'
  },
  {
    id: 'business',
    name: 'Business Website',
    price: '$599-999',
    description: 'Advanced website for growing businesses with custom features',
    features: [
      '6-10 pages with custom design',
      'Advanced mobile features',
      'SEO and Google Analytics setup',
      'Social media integration',
      'Blog functionality',
      'Photo gallery',
      'Testimonials section',
      '1-year hosting included'
    ],
    delivery: '2-week delivery',
    support: '1 month comprehensive support',
    popular: true
  },
  {
    id: 'ecommerce',
    name: 'E-commerce Website',
    price: '$999-1999',
    description: 'Complete online store with all e-commerce functionality',
    features: [
      'Full online store functionality',
      'Product catalog and shopping cart',
      'Payment gateway integration',
      'Inventory management system',
      'Customer account area',
      'Order tracking system',
      'SEO optimized product pages',
      '1-year hosting included'
    ],
    delivery: '3-4 week delivery',
    support: '3 months comprehensive support'
  }
];

export default function Services() {
  const [hoveredPackage, setHoveredPackage] = useState<string | null>(null);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Affordable web design packages specifically created for small businesses
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicePackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-lg shadow-lg transition-all duration-300 ${
                pkg.popular
                  ? 'ring-2 ring-blue-600 transform scale-105'
                  : 'hover:shadow-xl hover:-translate-y-1'
              } ${hoveredPackage === pkg.id ? 'shadow-2xl' : ''}`}
              onMouseEnter={() => setHoveredPackage(pkg.id)}
              onMouseLeave={() => setHoveredPackage(null)}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="bg-white rounded-lg p-8">
                {/* Package Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>

                {/* Price */}
                <div className="text-3xl font-bold text-blue-600 mb-4">{pkg.price}</div>

                {/* Description */}
                <p className="text-gray-600 mb-6">{pkg.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Delivery & Support Info */}
                <div className="border-t pt-4 mb-6">
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {pkg.delivery}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z"
                      />
                    </svg>
                    {pkg.support}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => scrollToContact(pkg.id)}
                  className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-200 ${
                    pkg.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Every business is unique. If our packages don't perfectly fit your needs,
              let's discuss a custom solution tailored specifically for your business goals.
            </p>
            <button
              onClick={() => scrollToContact('custom')}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Discuss Custom Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}