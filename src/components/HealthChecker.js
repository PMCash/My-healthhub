import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const HealthChecker = () => {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    symptoms: '',
    duration: '',
    severity: '',
    medicalHistory: ''
  });
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.symptoms) {
      setError('Please describe your symptoms.');
      return;
    }

    setLoading(true);
    setError('');
    setResponse('');

    const BACKEND_URL = 'https://ai-health-coach-dr-ai-backend-41va.onrender.com';
    
    try {
      const ENDPOINT = `${BACKEND_URL}/api/analyze-symptoms`;
      console.log('Attempting to connect to:', ENDPOINT);
      
      // Prepare data for backend - convert symptoms string to array
      const backendData = {
        ...formData,
        symptoms: formData.symptoms.split(/[,;.]/).map(s => s.trim()).filter(s => s.length > 0)
      };
      
      console.log('Sending data to backend:', backendData);
      console.log('Symptoms array:', backendData.symptoms);
      
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(backendData),
      });

      console.log('Response status:', response.status);
      
      // Handle 404 specifically - API endpoint not implemented
      if (response.status === 404) {
        const textResponse = await response.text();
        console.log('404 Response:', textResponse);
        throw new Error(`API endpoint not found. Your backend at ${BACKEND_URL} is running but the health analysis API (/api/analyze-symptoms) is not implemented yet.`);
      }
      
      // Check if response is actually JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const textResponse = await response.text();
        console.log('Non-JSON response received:', textResponse);
        
        if (textResponse.includes('<!DOCTYPE html>')) {
          throw new Error(`Backend returned HTML instead of JSON. This usually means the API endpoint is not implemented. Status: ${response.status}`);
        }
        
        throw new Error(`Backend returned non-JSON response. Status: ${response.status}. Content: ${textResponse.substring(0, 200)}...`);
      }
      
      const data = await response.json();
      console.log('Backend response:', data);

      if (!response.ok) {
        // Handle specific error about symptoms array format
        if (data.error && data.error.includes('array')) {
          throw new Error('Backend expects symptoms in array format. Please check backend implementation.');
        }
        throw new Error(data.error || 'Failed to analyze symptoms');
      }

      setResponse(data.analysis);
    } catch (err) {
      console.error('Error calling backend:', err);
      setError(err.message || 'Failed to get response from Dr. AI. Please try again or contact support if the issue persists.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      age: '',
      gender: '',
      symptoms: '',
      duration: '',
      severity: '',
      medicalHistory: ''
    });
    setResponse('');
    setError('');
  };

  return (
    <div>
      {/* Professional Header */}
      <Header />
      
      <div className="health-checker">
        <div className="main-content-header">
          <h2 className="section-title">Health Assessment Form</h2>
          <p className="section-subtitle">
            Provide your symptoms and medical information for AI-powered analysis
          </p>
          <div className="tech-studio-credit">
            <span className="tech-badge">⚡ Powered by Techstudio24-365 Limited Technology</span>
          </div>
        </div>

        {/* Live AI Status Banner */}
        <div className="demo-banner" style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '15px',
          borderRadius: '12px',
          marginBottom: '20px',
          textAlign: 'center',
          boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
        }}>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '18px' }}>Live AI-Powered Analysis</h3>
          <p style={{ margin: '0', fontSize: '14px', opacity: '0.9' }}>
            Experience our intelligent health analysis system. Currently in active-mode with live AI responses.
          </p>
        </div>

      <form onSubmit={handleSubmit} className="symptoms-form">
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            placeholder="Enter your age"
            min="1"
            max="120"
          />
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer-not-to-say">Prefer not to say</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="symptoms">Symptoms *:</label>
          <textarea
            id="symptoms"
            name="symptoms"
            value={formData.symptoms}
            onChange={handleInputChange}
            placeholder="Describe your symptoms in detail..."
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="duration">How long have you had these symptoms?</label>
          <select
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleInputChange}
          >
            <option value="">Select duration</option>
            <option value="less-than-24-hours">Less than 24 hours</option>
            <option value="1-3-days">1-3 days</option>
            <option value="4-7-days">4-7 days</option>
            <option value="1-2-weeks">1-2 weeks</option>
            <option value="2-4-weeks">2-4 weeks</option>
            <option value="more-than-month">More than a month</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="severity">Severity:</label>
          <select
            id="severity"
            name="severity"
            value={formData.severity}
            onChange={handleInputChange}
          >
            <option value="">Select severity</option>
            <option value="mild">Mild</option>
            <option value="moderate">Moderate</option>
            <option value="severe">Severe</option>
            <option value="very-severe">Very Severe</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="medicalHistory">Medical History:</label>
          <textarea
            id="medicalHistory"
            name="medicalHistory"
            value={formData.medicalHistory}
            onChange={handleInputChange}
            placeholder="Any relevant medical history, current medications, allergies..."
          />
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? '🤖 Dr. AI is analyzing...' : '🔍 Get Dr. AI Analysis'}
        </button>
      </form>

      {loading && (
        <div className="loading">
          <div>🤖 Dr. AI is examining your symptoms...</div>
          <div style={{ fontSize: '14px', marginTop: '10px' }}>Analyzing with advanced AI technology...</div>
        </div>
      )}

      {error && (
        <div className="error">
          <strong>Error:</strong> {error}
        </div>
      )}

      {response && (
        <div className="response">
          <h3>
            �� Dr. AI's Analysis
          </h3>
          <div className="response-content">
            {response.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
          <button 
            onClick={resetForm}
            style={{
              marginTop: '15px',
              background: '#28a745',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            🔄 New Consultation
          </button>
        </div>
      )}

      <div className="disclaimer">
        <strong>⚠️ Important Disclaimer:</strong> This AI health checker is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read here. If you think you may have a medical emergency, call your doctor or emergency services immediately.
      </div>

      {/* Professional Footer */}
      <Footer />
      </div>
    </div>
  );
};

export default HealthChecker;
