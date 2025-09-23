import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black/80 backdrop-blur-sm px-4 py-8 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 mb-8">
          {/* Left Section - Logo and Tagline */}
          <div className="flex flex-col gap-4 items-center md:items-start">
            <div className="footer-logo">
              <img 
                src="/footer/footer-logo.svg" 
                alt="Math Mentor" 
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
              />
            </div>
            <p 
              className="text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed max-w-sm text-center md:text-left"
              style={{ 
                fontFamily: '"Inter", sans-serif',
                fontWeight: 300,
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
              }}
            >
              Empowering students to master mathematics
            </p>
          </div>

          {/* Right Section - Links and Social */}
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-8 sm:gap-12 md:gap-8 lg:gap-12 items-center md:items-start">
            {/* Navigation Links */}
            <div className="flex flex-col gap-2 sm:gap-3 items-center md:items-start">
              <h4 
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white mb-2 sm:mb-3"
                style={{ 
                  fontFamily: '"Inter", sans-serif',
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
                }}
              >
                <a href="/" className="hover:text-gray-300 transition-colors" style={{ color: 'inherit', textDecoration: 'none' }}>Home</a>
              </h4>
              <h4 
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white mb-2 sm:mb-3"
                style={{ 
                  fontFamily: '"Inter", sans-serif',
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
                }}
              >
                <a href="/services" className="hover:text-gray-300 transition-colors" style={{ color: 'inherit', textDecoration: 'none' }}>Services</a>
              </h4>
              <h4 
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white mb-2 sm:mb-3"
                style={{ 
                  fontFamily: '"Inter", sans-serif',
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
                }}
              >
                <a href="/about" className="hover:text-gray-300 transition-colors" style={{ color: 'inherit', textDecoration: 'none' }}>About Us</a>
              </h4>
              <h4 
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white mb-2 sm:mb-3"
                style={{ 
                  fontFamily: '"Inter", sans-serif',
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
                }}
              >
                <a href="/blog" className="hover:text-gray-300 transition-colors" style={{ color: 'inherit', textDecoration: 'none' }}>Blog</a>
              </h4>
            </div>

            {/* Social Links and Contact */}
            <div className="flex flex-col gap-4 items-center md:items-start">
              <h4 
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white mb-2 sm:mb-3"
                style={{ 
                  fontFamily: '"Inter", sans-serif',
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
                }}
              >
                Follow us
              </h4>
              <div className="flex gap-3 sm:gap-4 mb-4">
                {/* Facebook */}
                <a 
                  href="#" 
                  className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors" 
                  aria-label="Facebook"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987H7.898v-2.892h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.261c-1.243 0-1.631.771-1.631 1.562v1.875h2.773l-.443 2.892h-2.33v6.987C18.343 21.128 22 16.991 22 12z" fill="white"/>
                  </svg>
                </a>
                {/* Instagram */}
                <a 
                  href="#" 
                  className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors" 
                  aria-label="Instagram"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="white"/>
                  </svg>
                </a>
                {/* X (Twitter) */}
                <a 
                  href="#" 
                  className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors" 
                  aria-label="X"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M18.244 2H21l-7.53 8.593L22 22h-6.756l-5.33-6.51L4.756 22H2l8.12-9.344L2 2h6.756l5.02 6.136L18.244 2zM16.91 20h2.006L7.17 4H5.165L16.91 20z" fill="white"/>
                  </svg>
                </a>
              </div>
              <p 
                className="text-sm sm:text-base md:text-lg lg:text-xl text-white text-center md:text-left"
                style={{ 
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 500,
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
                }}
              >
                hello@mathmentor.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="max-w-6xl mx-auto">
          <div className="h-px bg-gray-600 mb-4 sm:mb-6 md:mb-8"></div>
          <p 
            className="text-xs sm:text-sm md:text-base lg:text-lg text-white text-center"
            style={{ 
              fontFamily: '"Inter", sans-serif',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
            }}
          >
            &copy; 2025 Mathmentor. All rights reserved.{' '}
            <a 
              href="/privacy" 
              className="hover:text-gray-300 transition-colors" 
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              Privacy Policy
            </a>
            <span className="text-orange-500 mx-2"> | </span>
            <a 
              href="/terms" 
              className="hover:text-gray-300 transition-colors" 
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
