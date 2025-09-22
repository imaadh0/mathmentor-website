import React from 'react';
import Footer from '../components/Footer';
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
      

      
      

      <Footer />
    </div>
  );
};

export default Student;
