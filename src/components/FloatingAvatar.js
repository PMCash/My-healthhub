import React, { useState } from 'react';
import '../styles/FloatingAvatar.css';
import femaleAvatar from '../assets/female-avatar.png';

const FloatingAvatar = ({ 
  externalLink = '',
  bmiLink = 'https://bmi-health-checker.techstudio24-365.com/',
  gymLink = 'https://gym.techstudio24-365.com',
  dietShoppingLink = 'https://dietshop.techstudio24-365.com'
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleAvatarClick = () => {
    if (externalLink && externalLink.trim() !== '') {
      window.open(externalLink, '_blank');
    } else {
      setShowModal(!showModal);
    }
  };

  const handleBMIClick = () => {
    if (bmiLink) {
      window.open(bmiLink, '_blank');
    }
  };

  const handleGymClick = () => {
    if (gymLink) {
      window.open(gymLink, '_blank');
    }
  };

  const handleDietShoppingClick = () => {
    if (dietShoppingLink) {
      window.open(dietShoppingLink, '_blank');
    }
  };

  return (
    <>
      {/* Floating Avatar */}
      <div 
        className={`floating-avatar ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleAvatarClick}
      >
        {/* Avatar Container */}
        <div className="avatar-container">
          <img 
            src={femaleAvatar}
            className="avatar-image"
            alt="Female Avatar"
          />
        </div>

        {/* Message Bubble */}
        <div className={`message-bubble ${isHovered ? 'show' : ''}`}>
          <p>Hi! We can check your BMI, Shop for Healthy Diets, and You can also Visit our online Gym! In one click!</p>
          <div className="bubble-pointer"></div>
        </div>

        {/* Click Indicator */}
        <div className="click-indicator">
          {!showModal && <span>💬Hey! Lets take a Ride, Click me!</span>}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="avatar-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="avatar-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
            
            <h2>Welcome to Our Wellness Program! 💪</h2>
            
            <div className="modal-content">
              <div className="modal-section">
                <h3>📊 Check Your BMI</h3>
                <p>Calculate your Body Mass Index to understand your health status better.</p>
                <button className="modal-btn" onClick={handleBMIClick}>Calculate BMI Now</button>
              </div>

              <div className="modal-section">
                <h3>🏋️ Visit Our Gym</h3>
                <p>Join our Online-AI-powered state-of-the-art fitness facility and start your health journey today!</p>
                <button className="modal-btn" onClick={handleGymClick}>Explore Our Gym</button>
              </div>

              <div className="modal-section">
                <h3>🏥 Healthy Diet Shop</h3>
                <p>Get personalized healthy diet advice from our AI-powered health checker. Also available for purchase are healthy diet eBooks, foods, beverages and supplements tailored to your needs.</p>
                <button className="modal-btn" onClick={handleDietShoppingClick}>Visit Healthy Diet Shop</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingAvatar;
