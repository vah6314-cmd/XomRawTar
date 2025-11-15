'use client';

import { useState } from 'react';
import Image from 'next/image';

interface PortfolioItem {
  id: string;
  category: string;
  title: string;
  description: string;
  images: string[];
  features: string[];
}

const portfolioData: PortfolioItem[] = [
  {
    id: 'ecommerce-1',
    category: 'E-commerce',
    title: 'Modern Online Store',
    description: 'Full-featured e-commerce platform with shopping cart and payment integration',
    images: ['/images/portfolio/e-commerce/portfolio-ecommerce-1.jpg'],
    features: ['Product Catalog', 'Shopping Cart', 'Payment Gateway', 'Admin Dashboard']
  },
  {
    id: 'ecommerce-2',
    category: 'E-commerce',
    title: 'Fashion Boutique',
    description: 'Elegant fashion retail website with size guides and product variations',
    images: ['/images/portfolio/e-commerce/portfolio-ecommerce-2.jpg'],
    features: ['Product Variations', 'Size Guide', 'Wishlist', 'Customer Reviews']
  },
  {
    id: 'ecommerce-3',
    category: 'E-commerce',
    title: 'Electronics Store',
    description: 'Tech-focused online store with specifications and comparison tools',
    images: ['/images/portfolio/e-commerce/portfolio-ecommerce-3.jpg'],
    features: ['Product Specs', 'Comparison Tool', 'Technical Support', 'Warranty Info']
  },
  {
    id: 'local-restaurant',
    category: 'Local Business',
    title: 'Fine Dining Restaurant',
    description: 'Restaurant website with online reservations and menu showcase',
    images: ['/images/portfolio/local-business/portfolio-restaurant.jpg'],
    features: ['Online Reservations', 'Interactive Menu', 'Events Calendar', 'Gallery']
  },
  {
    id: 'local-salon',
    category: 'Local Business',
    title: 'Beauty Salon',
    description: 'Modern salon website with appointment booking and service menu',
    images: ['/images/portfolio/local-business/portfolio-salon.jpg'],
    features: ['Appointment Booking', 'Service Menu', 'Team Profiles', 'Gallery']
  },
  {
    id: 'local-shop',
    category: 'Local Business',
    title: 'Retail Shop',
    description: 'Local retail store website with product highlights and location info',
    images: ['/images/portfolio/local-business/portfolio-shop.jpg'],
    features: ['Product Showcase', 'Store Locator', 'Business Hours', 'Contact Form']
  },
  {
    id: 'professional-consulting',
    category: 'Professional Services',
    title: 'Consulting Firm',
    description: 'Professional consulting website with case studies and expertise showcase',
    images: ['/images/portfolio/professional-services/portfolio-consulting.jpg'],
    features: ['Case Studies', 'Team Bios', 'Service Areas', 'Testimonials']
  },
  {
    id: 'professional-lawyer',
    category: 'Professional Services',
    title: 'Law Firm',
    description: 'Legal practice website with attorney profiles and practice areas',
    images: ['/images/portfolio/professional-services/portfolio-lawyer.jpg'],
    features: ['Attorney Profiles', 'Practice Areas', 'Case Results', 'Blog']
  },
  {
    id: 'professional-doctor',
    category: 'Professional Services',
    title: 'Medical Practice',
    description: 'Healthcare website with patient portal and appointment scheduling',
    images: ['/images/portfolio/professional-services/portfolio-doctor.jpg'],
    features: ['Patient Portal', 'Appointment Scheduling', 'Services', 'Insurance Info']
  },
  {
    id: 'creative-artist',
    category: 'Creative',
    title: 'Artist Portfolio',
    description: 'Creative portfolio showcasing artwork with gallery and commission info',
    images: ['/images/portfolio/creative/portfolio-artist.jpg'],
    features: ['Art Gallery', 'Artist Bio', 'Commission Info', 'Shop']
  },
  {
    id: 'creative-photographer',
    category: 'Creative',
    title: 'Photography Studio',
    description: 'Professional photography website with portfolio galleries and booking',
    images: ['/images/portfolio/creative/portfolio-photographer.jpg'],
    features: ['Photo Galleries', 'Service Packages', 'Booking Calendar', 'Blog']
  },
  {
    id: 'creative-designer',
    category: 'Creative',
    title: 'Design Studio',
    description: 'Design agency portfolio with project showcase and client work',
    images: ['/images/portfolio/creative/portfolio-designer.jpg'],
    features: ['Project Showcase', 'Process', 'Client List', 'Contact']
  },
  {
    id: 'agency-digital',
    category: 'Agency',
    title: 'Digital Agency',
    description: 'Full-service digital agency with comprehensive service offerings',
    images: ['/images/portfolio/agency/portfolio-digital-agency.jpg'],
    features: ['All Services', 'Case Studies', 'Team', 'Process']
  },
  {
    id: 'agency-marketing',
    category: 'Agency',
    title: 'Marketing Agency',
    description: 'Marketing agency website with campaign results and testimonials',
    images: ['/images/portfolio/agency/portfolio-marketing.jpg'],
    features: ['Campaign Results', 'Testimonials', 'Services', 'Free Audit']
  },
  {
    id: 'agency-seo',
    category: 'Agency',
    title: 'SEO Agency',
    description: 'SEO specialist website with ranking results and optimization services',
    images: ['/images/portfolio/agency/portfolio-seo.jpg'],
    features: ['Ranking Results', 'SEO Services', 'Free Analysis', 'Case Studies']
  }
];

const categories = ['All Projects', 'E-commerce', 'Local Business', 'Professional Services', 'Creative', 'Agency'];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = selectedCategory === 'All Projects'
    ? portfolioData
    : portfolioData.filter(item => item.category === selectedCategory);

  const openModal = (item: PortfolioItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse portfolio of websites designed for small businesses across various industries
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 transition-transform"
            >
              {/* Placeholder for portfolio image */}
              <div className="h-48 bg-gray-200 rounded-t-lg flex items-center justify-center">
                <div className="text-gray-400 text-center">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm">{item.category} Website</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>

                <button
                  onClick={() => openModal(item)}
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center transition-colors"
                >
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={closeModal}>
            <div
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedItem.title}</h3>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                      {selectedItem.category}
                    </span>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <p className="text-gray-600 mb-6">{selectedItem.description}</p>

                {/* Image placeholder */}
                <div className="h-64 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-gray-400 text-center">
                    <svg className="w-20 h-20 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p>Project Screenshots</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedItem.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}