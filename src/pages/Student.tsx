import React, { useEffect } from 'react';
import './Student.css';

const Student: React.FC = () => {
  // Parallax effect will be added back once background is confirmed working
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrolled = window.pageYOffset;
  //     const parallax = document.querySelector('.student-page') as HTMLElement;
  //     if (parallax) {
  //       const speed = scrolled * 0.5;
  //       parallax.style.setProperty('--scroll-offset', `${-speed}px`);
  //     }
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <div className="student-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image-container">
          <img src="/student/Hero1.png" alt="Math Learning Platform" className="hero-background-image" />
          <img src="/student/Hero2.png" alt="Learn Math Smarter" className="hero-overlay-image" />
          
              {/* Text Overlay */}
              <div className="hero-text-overlay">
                <p className="hero-subtitle">Interactive lessons and practice<br />designed for students.</p>
                <h1 className="hero-title">Learn Math Smarter</h1>
              </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <img src="/student/feature1.png" alt="Video Lessons" />
            </div>
            <h3 className="feature-title">Video Lessons</h3>
            <p className="feature-description">Learn from detailed, step-by-step tutorials.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <img src="/student/feature2.png" alt="Progress Tracking" />
            </div>
            <h3 className="feature-title">Progress Tracking</h3>
            <p className="feature-description">See your improvement over time with analytics.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <img src="/student/feature3.png" alt="24/7 Access" />
            </div>
            <h3 className="feature-title">24/7 Access</h3>
            <p className="feature-description">Study anytime, from any device.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <img src="/student/feature4.png" alt="Community Support" />
            </div>
            <h3 className="feature-title">Community Support</h3>
            <p className="feature-description">Sharpen your skills with curated tests and instant results.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <img src="/student/feature5.png" alt="Quizzes & Practice Papers" />
            </div>
            <h3 className="feature-title">Quizzes & Practice Papers</h3>
            <p className="feature-description">Sharpen your skills with curated tests and instant results.</p>
          </div>
        </div>
      </section>

      {/* Learn Math Smarter Section */}
      <section className="learn-section">
        <div className="learn-content">
          <h2 className="learn-title">Learn Math Smarter</h2>
          <p className="learn-subtitle">Interactive lessons and practice designed for students.</p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="pricing-header">
          <h2 className="pricing-title">Plans That Work for You</h2>
          <p className="pricing-subtitle">No hidden fees, just clear and simple learning options.</p>
        </div>

        <div className="pricing-cards">
          <div className="pricing-card">
            <div className="pricing-card-header">
              <h3 className="plan-name">Free Plan</h3>
              <p className="plan-description">Perfect for getting started</p>
              <div className="plan-price">
                <span className="price">$0</span>
                <span className="price-period">/month</span>
                <span className="price-note">Forever free</span>
              </div>
            </div>
            <div className="plan-features">
              <ul>
                <li>Up to 3 projects</li>
                <li>Basic templates</li>
                <li>Community support</li>
                <li>1GB storage</li>
                <li className="disabled">Priority support</li>
                <li className="disabled">Advanced analytics</li>
              </ul>
            </div>
            <button className="plan-button">Get Started Free</button>
          </div>

          <div className="pricing-card">
            <div className="pricing-card-header">
              <h3 className="plan-name">Free Plan</h3>
              <p className="plan-description">Perfect for getting started</p>
              <div className="plan-price">
                <span className="price">$0</span>
                <span className="price-period">/month</span>
                <span className="price-note">Forever free</span>
              </div>
            </div>
            <div className="plan-features">
              <ul>
                <li>Up to 3 projects</li>
                <li>Basic templates</li>
                <li>Community support</li>
                <li>1GB storage</li>
                <li className="disabled">Priority support</li>
                <li className="disabled">Advanced analytics</li>
              </ul>
            </div>
            <button className="plan-button">Get Started Free</button>
          </div>

          <div className="pricing-card">
            <div className="pricing-card-header">
              <h3 className="plan-name">Free Plan</h3>
              <p className="plan-description">Perfect for getting started</p>
              <div className="plan-price">
                <span className="price">$0</span>
                <span className="price-period">/month</span>
                <span className="price-note">Forever free</span>
              </div>
            </div>
            <div className="plan-features">
              <ul>
                <li>Up to 3 projects</li>
                <li>Basic templates</li>
                <li>Community support</li>
                <li>1GB storage</li>
                <li className="disabled">Priority support</li>
                <li className="disabled">Advanced analytics</li>
              </ul>
            </div>
            <button className="plan-button">Get Started Free</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">
              <img src="/student/logo.png" alt="Math Mentor" />
            </div>
            <p className="footer-tagline">Empowering students to master mathematics</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Home</h4>
              <h4>Services</h4>
              <h4>About Us</h4>
              <h4>Blog</h4>
            </div>
            
            <div className="footer-column">
              <h4>Follow us</h4>
              <div className="social-links">
                <a href="#" className="social-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" fill="white"/>
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="white"/>
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" fill="white"/>
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
            © 2025 Mathmentor. All rights reserved. Privacy Policy | Terms of Service
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Student;
