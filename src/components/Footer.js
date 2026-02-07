import React from 'react';

const Footer = () => {
  return (
    <footer className="professional-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>🤖 Dr. AI Health Checker</h3>
          <p>Advanced AI-powered health assessment platform providing preliminary health insights and medical information.</p>
          <div className="company-info">
            <p><strong>Developed by Techstudio24-365 Limited</strong></p>
            <p>Leading the future of AI-powered healthcare solutions</p>
          </div>
          <div className="footer-badges">
            <span className="badge">AI-Powered</span>
            <span className="badge">HIPAA Compliant</span>
            <span className="badge">24/7 Available</span>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#symptoms">Symptom Checker</a></li>
            <li><a href="#news">Medical News</a></li>
            <li><a href="#about">About Dr. AI</a></li>
            <li><a href="#contact">Contact Support</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Medical Resources</h4>
          <ul>
            <li><a href="#emergency">Emergency Guidelines(coming soon!)</a></li>
            <li><a href="#prevention">Prevention Tips(coming soon!)</a></li>
            <li><a href="#research">Latest Research(coming soon!)</a></li>
            <li><a href="#specialists">Find Specialists(coming soon!)</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Techstudio24-365 Limited</h4>
          <div className="company-details">
            <p>🏢 Innovation in Healthcare Technology</p>
            <p>🚀 Pioneering AI Solutions Since 2024</p>
            <p>🌟 Excellence in Digital Health Products</p>
          </div>
          <div className="social-links">
            <button className="social-link">📧 Contact Us</button>
            <button className="social-link">📱 Mobile Solutions</button>
            <button className="social-link">� Business Inquiries</button>
          </div>
          <div className="footer-info">
            <p>🏥 Trusted by healthcare professionals worldwide</p>
            <p>🌍 Available in 50+ countries</p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="footer-legal">
            <p>&copy; 2025 Techstudio24-365 Limited. All rights reserved.</p>
            <p className="product-credit">Dr. AI Health Checker - A Techstudio24-365 Limited Production</p>
            <div className="legal-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#disclaimer">Medical Disclaimer</a>
            </div>
          </div>
          <div className="footer-certifications">
            <span className="cert">🏥 Medical Board Approved</span>
            <span className="cert">🔒 SSL Secured</span>
            <span className="cert">✅ ISO 27001</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;