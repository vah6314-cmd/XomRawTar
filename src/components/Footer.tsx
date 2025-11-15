'use client';

import { useState, useEffect } from 'react';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Rayline Web Development</h3>
            <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 max-w-md">
              Professional, affordable websites designed specifically for small businesses. We help you establish a strong online presence that drives growth and success.
            </p>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 012.828 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a
                  href="mailto:raylinewebdev@gmail.com"
                  className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base"
                >
                  raylinewebdev@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.442.456-.597.872-1.82.144-.46.348-1.01.419-1.648.149-.386.591-.425 1.689-.133.237.885-.196 1.692.232.298.062.357-.038.376-.7.178.252-.862-.233-1.59.139-1.446-.62-.245-.632-.18-.44-.025-.662.095-1.059.218-1.57.105-.28-.088-.309-.06-.518-.017-.822.111-.234.02-.054-1.04-.109-.37-.105-.357.172-.251.396-.046.176.114-.025-.051-.03-.015-1.094-.151-.34-.479-.291-.066.178.068-.209-.018-.438-.13-.498-.057-.268.018-.943.268-.994-.067-.035-.098.11-.063.099-.014.149-.038.222.053.412.08.933-.111-.267.086-.747.44.673.314-1.854.054-.5.1.366-.018.884-.233.428.06-.896.447-.894.49.404.332-.302.044-.45-.025-.631-.155-.874-.186.592-.232-.545-.015-.949.104-.472.069-.67.024-.41-.026-.9-.016-.297-.017-.185-.051-.386-.023-.941.13-.563.074-.253.154-1.07.015-.144.048-1.11-.011-.403-.13-.496-.05-.005-.437-.119-.191-.17-.777-.003-.309.125-.398-.355-.467.04-.254.03-.288.057-.19.097-.098-.246-.08-.948.497-.983.095-.374-.121-.121-.067-.064-.125-.119-.192-.087-.39-.003-.006-.043-.058-.079-.068-.029-.12-.037-.08-.026-.137.09-.245-.059-.372-.09-.342-.048-.563-.033-.276-.12-.262-.077-.475-.053-.932-.032-.476-.036-.621-.053-.274-.08-.356.05-.364-.153-.57-.102-.752-.239-1.6.642-1.925z"/>
                  </svg>
                </div>
                <a
                  href={`https://wa.me/917827599839?text=${encodeURIComponent('Hi! I\'m interested in your web design services')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base"
                >
                  +91 7827599839
                </a>
              </div>
            </div>
            <div className="text-gray-400 text-sm sm:text-base">
              Designed with ❤️ for small businesses
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors text-left w-full text-sm sm:text-base"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors text-left w-full text-sm sm:text-base"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors text-left w-full text-sm sm:text-base"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors text-left w-full text-sm sm:text-base"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services Summary */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-300 text-sm sm:text-base">Starter Websites</span>
              </li>
              <li>
                <span className="text-gray-300 text-sm sm:text-base">Business Websites</span>
              </li>
              <li>
                <span className="text-gray-300 text-sm sm:text-base">E-commerce Stores</span>
              </li>
              <li>
                <span className="text-gray-300 text-sm sm:text-base">Custom Solutions</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-0">
              © 2024 Rayline Web Development. All rights reserved.
            </div>
            <div className="text-gray-400 text-xs sm:text-sm sm:text-right">
              Designed with ❤️ for small businesses
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 bg-blue-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200 hover:scale-110 z-40"
          aria-label="Back to top"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m-7-7v-2m14 0l10 10v2" />
          </svg>
        </button>
      )}
    </footer>
  );
}