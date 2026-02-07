import React from 'react';
import javaLogo from '../assets/java-logo2.png';

const Header = () => {
  return (
    <header className="professional-header">
      <div className="header-content">
        <div className="logo-section">
          <div className="logo">
            <img src={javaLogo} alt="Java Logo" className="logo-image" />
          </div>
          <div className="brand-info">
            <h1>My Health-Hub</h1>
            <p>Advanced AI-Powered Medical Assessment Platform</p>
            <div className="company-credit">
              <span className="powered-by">Powered by</span>
              <span className="company-name">Techstudio24-365 Limited</span>
            </div>
          </div>
        </div>
        
        <div className="header-stats">
          <div className="stat-item">
            <div className="stat-number">50K+</div>
            <div className="stat-label">Consultations</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">95%</div>
            <div className="stat-label">Accuracy</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Available</div>
          </div>
        </div>
      </div>
      
      <div className="header-features">
        <div className="feature-badge">
          <span className="feature-icon">🔒</span>
          <span>HIPAA Compliant</span>
        </div>
        <div className="feature-badge">
          <span className="feature-icon">⚡</span>
          <span>Instant Analysis</span>
        </div>
        <div className="feature-badge">
          <span className="feature-icon">🌍</span>
          <span>Global Access</span>
        </div>
        <div className="feature-badge">
          <span className="feature-icon">🎯</span>
          <span>Precision Medicine</span>
        </div>
      </div>
    </header>
  );
};

export default Header;