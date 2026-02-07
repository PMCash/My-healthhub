import React, { useState, useEffect } from 'react';

const NewsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Sample medical news data - in a real app, this would come from an API
  const medicalNews = [
    {
      id: 1,
      title: "WHO Announces New Global Health Guidelines for 2025",
      summary: "The World Health Organization releases comprehensive guidelines addressing emerging health challenges and preventive care strategies.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=350&fit=crop&q=80",
      date: "September 24, 2025",
      source: "WHO Press Release"
    },
    {
      id: 2,
      title: "Breakthrough in AI-Powered Early Disease Detection",
      summary: "Researchers develop new artificial intelligence system that can detect early signs of various diseases with 95% accuracy.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=350&fit=crop&q=80",
      date: "September 23, 2025",
      source: "Medical AI Journal"
    },
    {
      id: 3,
      title: "New Vaccine Shows Promise Against Multiple Viral Strains",
      summary: "Clinical trials demonstrate effectiveness of innovative multi-strain vaccine technology, offering broader protection.",
      image: "https://images.unsplash.com/photo-1584118624012-df056829fbd0?w=600&h=350&fit=crop&q=80",
      date: "September 22, 2025",
      source: "Global Health Research"
    },
    {
      id: 4,
      title: "Mental Health Support Systems Expand Globally",
      summary: "International initiative launches to provide accessible mental health resources in underserved communities worldwide.",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=350&fit=crop&q=80",
      date: "September 21, 2025",
      source: "Mental Health Alliance"
    },
    {
      id: 5,
      title: "Revolutionary Gene Therapy Shows Success in Rare Diseases",
      summary: "New gene therapy approach demonstrates remarkable results in treating previously incurable genetic conditions.",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=350&fit=crop&q=80",
      date: "September 20, 2025",
      source: "Gene Therapy Today"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % medicalNews.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, medicalNews.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % medicalNews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + medicalNews.length) % medicalNews.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className="news-carousel">
      <div className="carousel-header">
        <h2>Latest Global Medical Updates</h2>
        <p>Stay informed with the latest developments in healthcare and medical research</p>
        <div className="company-showcase">
          <span className="company-badge">🏢 Curated by Techstudio24-365 Limited Medical Research Team</span>
        </div>
        <div className="carousel-controls-header">
          <button 
            onClick={toggleAutoPlay}
            className={`autoplay-btn ${isAutoPlaying ? 'active' : ''}`}
          >
            {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
          </button>
        </div>
      </div>

      <div className="carousel-container">
        <button className="carousel-btn prev-btn" onClick={prevSlide}>
          ‹
        </button>

        <div className="carousel-content">
          <div className="news-card">
            <div className="news-image">
              <img 
                src={medicalNews[currentSlide].image} 
                alt={medicalNews[currentSlide].title}
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=350&fit=crop&q=80';
                }}
              />
              <div className="news-overlay">
                <span className="news-source">{medicalNews[currentSlide].source}</span>
                <span className="news-date">{medicalNews[currentSlide].date}</span>
              </div>
            </div>
            <div className="news-content">
              <h3>{medicalNews[currentSlide].title}</h3>
              <p>{medicalNews[currentSlide].summary}</p>
              <div className="news-meta">
                <span className="news-tag">Medical Research</span>
                <span className="read-more">Read More →</span>
              </div>
            </div>
          </div>
        </div>

        <button className="carousel-btn next-btn" onClick={nextSlide}>
          ›
        </button>
      </div>

      <div className="carousel-indicators">
        {medicalNews.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      <div className="carousel-progress">
        <div 
          className="progress-bar"
          style={{ width: `${((currentSlide + 1) / medicalNews.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default NewsCarousel;