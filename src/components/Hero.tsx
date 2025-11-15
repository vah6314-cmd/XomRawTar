'use client';


export default function Hero() {
  const isLoaded = true;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="container mx-auto px-6 text-center">
        <div
          className={`transition-all duration-1000 transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Blue Accent Line */}
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4">
            We Build Websites That Grow Your Business
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            Beautiful, affordable websites designed specifically for small businesses
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform text-sm sm:text-base"
            >
              View Our Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-blue-600 font-semibold border-2 border-blue-600 rounded-full hover:bg-blue-50 transition-colors duration-200 text-sm sm:text-base"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}