import React from 'react';
import '../pages/Student.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/footer/footer-logo.svg" alt="Math Mentor" />
          </div>
          <p className="footer-tagline">Empowering students to master mathematics</p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4><a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</a></h4>
            <h4><a href="/services" style={{ color: 'inherit', textDecoration: 'none' }}>Services</a></h4>
            <h4><a href="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About Us</a></h4>
            <h4><a href="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>Blog</a></h4>
          </div>

          <div className="footer-column">
            <h4>Follow us</h4>
            <div className="social-links">
              {/* Facebook */}
              <a href="#" className="social-link" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987H7.898v-2.892h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.261c-1.243 0-1.631.771-1.631 1.562v1.875h2.773l-.443 2.892h-2.33v6.987C18.343 21.128 22 16.991 22 12z" fill="white"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="social-link" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="white"/>
                </svg>
              </a>
              {/* X (Twitter) */}
              <a href="#" className="social-link" aria-label="X">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M18.244 2H21l-7.53 8.593L22 22h-6.756l-5.33-6.51L4.756 22H2l8.12-9.344L2 2h6.756l5.02 6.136L18.244 2zM16.91 20h2.006L7.17 4H5.165L16.91 20z" fill="white"/>
                </svg>
              </a>
            </div>
            <p className="contact-email">hello@mathmentor.com</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-divider"></div>
        <p className="footer-copyright">
          &copy; 2025 Mathmentor. All rights reserved.{' '}
          <a href="/privacy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
          <span className="footer-separator"> | </span>
          <a href="/terms" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
