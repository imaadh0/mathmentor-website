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
                <p className="hero-subtitle">Interactive lessons and<span className="mobile-and-br"><br /></span> practice<span className="desktop-practice-br"><br /></span> designed for<span className="mobile-for-br"><br /></span> students.</p>
                <h1 className="hero-title">Learn Math<span className="mobile-math-br"><br /></span> Smarter</h1>
              </div>

              {/* Left Signboard */}
              <div className="left-signboard">
                <p className="signboard-text">Access thousands of<br />lessons and practice<br />exercises tailored to<br />your grade and<br />skill level.</p>
              </div>

              {/* Right Signboard */}
              <div className="right-signboard">
                <p className="signboard-text">Master math concepts<br />step by step with<br />expert-designed<br />study plans for<br />better learning.</p>
              </div>
        </div>
      </section>

      {/* Math Made Better Section */}
      <section className="math-made-better-section">
        <div className="mmb-image-container">
          <img src="/student/MMB1.png" alt="Math Made Better" className="mmb-background-image" />
          
          {/* Text Overlay */}
          <div className="mmb-text-overlay">
            <h2 className="mmb-title">Math Made Better</h2>
            <p className="mmb-subtitle">Enhance your learning with powerful tools and features</p>
          </div>

          {/* MMB Feature Cards (5) */}
          <div className="mmb-cards">
            <div className="mmb-card-container">
              <img src="/student/MMB2.png" alt="Quizzes & Practice Papers" className="mmb-card" />
              <div className="mmb-card-text">
                <h3 className="mmb-card-title">Quizzes &<br />Practice<br />Papers</h3>
                <p className="mmb-card-description">Sharpen your skills<br />with curated tests and<br />instant results.</p>
              </div>
            </div>
            
            <div className="mmb-card-container">
              <img src="/student/MMB2.png" alt="Video Lessons" className="mmb-card" />
              <div className="mmb-card-text">
                <h3 className="mmb-card-title">Video<br />Lessons</h3>
                <p className="mmb-card-description">Learn from detailed,<br />step-by-step<br />tutorials.</p>
              </div>
            </div>
            
            <div className="mmb-card-container">
              <img src="/student/MMB2.png" alt="Progress Tracking" className="mmb-card" />
              <div className="mmb-card-text">
                <h3 className="mmb-card-title">Progress<br />Tracking</h3>
                <p className="mmb-card-description">See your improvement<br />over time with<br />analytics.</p>
              </div>
            </div>
            
            <div className="mmb-card-container">
              <img src="/student/MMB2.png" alt="24/7 Access" className="mmb-card" />
              <div className="mmb-card-text">
                <h3 className="mmb-card-title">24/7<br />Access</h3>
                <p className="mmb-card-description">Study anytime,<br />from any<br />device.</p>
              </div>
            </div>
            
            <div className="mmb-card-container">
              <img src="/student/MMB2.png" alt="Community Support" className="mmb-card" />
              <div className="mmb-card-text">
                <h3 className="mmb-card-title">Community<br />Support</h3>
                <p className="mmb-card-description">Sharpen your skills<br />with curated tests<br />and instant results.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="section3">
        <div className="section3-container">
          <img src="/student/section3.png" alt="Section 3" className="section3-image" />
        </div>
      </section>

      {/* Plans That Work for You Section */}
      <section className="plans-section">
        <div className="plans-container">
          {/* Text Overlay */}
          <div className="plans-text-overlay">
            <h2 className="plans-title">Plans That Work for You<span className="mobile-br"><br /></span></h2>
            <p className="plans-subtitle">No hidden fees, just clear and simple<br /> learning options.</p>
          </div>

          {/* Pricing Cards */}
          <div className="pricing-cards-container">
            <div className="plan-card">
              <img src="/student/WFU1.png" alt="Free Plan" className="plan-card-image" />
              <div className="plan-card-text">
                <h3 className="pricing-card-title">Free Plan</h3>
                <p className="pricing-card-subtitle">Perfect for getting started</p>
                <div className="pricing-card-price">
                  <span className="price-amount">$0</span>
                  <span className="price-period">/MONTH</span>
                </div>
                <p className="pricing-card-description">Forever free</p>
                <ul className="pricing-features">
                  <li className="feature-item checked">Up to 3 projects</li>
                  <li className="feature-item checked">Basic templates</li>
                  <li className="feature-item checked">Community support</li>
                  <li className="feature-item checked">1GB storage</li>
                  <li className="feature-item disabled">Priority support</li>
                  <li className="feature-item disabled">Advanced analytics</li>
                </ul>
              </div>
              <button className="pricing-button orange">Get Started Free</button>
            </div>
            
            <div className="plan-card">
              <img src="/student/WFU2.png" alt="Free Plan" className="plan-card-image" />
              <div className="plan-card-text">
                <h3 className="pricing-card-title">Free Plan</h3>
                <p className="pricing-card-subtitle">Perfect for getting started</p>
                <div className="pricing-card-price">
                  <span className="price-amount">$0</span>
                  <span className="price-period">/MONTH</span>
                </div>
                <p className="pricing-card-description">Forever free</p>
                <ul className="pricing-features">
                  <li className="feature-item checked">Up to 3 projects</li>
                  <li className="feature-item checked">Basic templates</li>
                  <li className="feature-item checked">Community support</li>
                  <li className="feature-item checked">1GB storage</li>
                  <li className="feature-item disabled">Priority support</li>
                  <li className="feature-item disabled">Advanced analytics</li>
                </ul>
              </div>
              <button className="pricing-button blue">Get Started Free</button>
            </div>
            
            <div className="plan-card">
              <img src="/student/WFU3.png" alt="Free Plan" className="plan-card-image" />
              <div className="plan-card-text">
                <h3 className="pricing-card-title">Free Plan</h3>
                <p className="pricing-card-subtitle">Perfect for getting started</p>
                <div className="pricing-card-price">
                  <span className="price-amount">$0</span>
                  <span className="price-period">/MONTH</span>
                </div>
                <p className="pricing-card-description">Forever free</p>
                <ul className="pricing-features">
                  <li className="feature-item checked">Up to 3 projects</li>
                  <li className="feature-item checked">Basic templates</li>
                  <li className="feature-item checked">Community support</li>
                  <li className="feature-item checked">1GB storage</li>
                  <li className="feature-item disabled">Priority support</li>
                  <li className="feature-item disabled">Advanced analytics</li>
                </ul>
              </div>
              <button className="pricing-button pink">Get Started Free</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      

      
      

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
