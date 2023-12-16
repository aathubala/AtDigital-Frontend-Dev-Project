import React, { useEffect } from 'react';
import './hero.css';
import img2 from "../Assets/hero.png"

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToSection('home');
  }, []);

  return (
    <div className="hero-container" id='hero'>
      <div className="hero-content" style={{ backgroundImage: `url(${img2})` }}>
        <div className="shape-container">
          <div className="square-shape">
            <h2 className="shape-text">We crush your competitors, goals, and sales records - without the B.S.</h2>
            <button className="cta-button">Get free consultation</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;