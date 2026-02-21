import React from 'react';
import HealthChecker from './components/HealthChecker';
import FloatingAvatar from './components/FloatingAvatar';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* 
        Floating Avatar with External Links
        
        To use YOUR links, update the values below:
        - externalLink: Leave empty if you want the modal to show, or set to a URL to open directly
        - bmiLink: BMI calculator link
        - gymLink: Gym website link
        - consultationLink: Health consultation link
      */}
      <FloatingAvatar 
        externalLink=""
        bmiLink="https://bmi-health-checker.techstudio24-365.com/"
        gymLink="https://gym.techstudio24-365.com/"
        consultationLink="https://dietshop.techstudio24-365.com"
      />
      
      <div className="container">
        <HealthChecker />
      </div>
    </div>
  );
}

export default App;