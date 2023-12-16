import React from 'react';
import './service.css';
import img1 from "../Assets/image 2.png"
import img2 from "../Assets/image 1.png"

const Service = () => {
  return (
    <section id="services" className="services-container">
      <div className="service-item">
        <div className="image-container">
          <img src={img1} alt="Service 1" />
        </div>
        <div className="text-container">
          <h2 style={{color: "#6b3cc9"}}>Web & Mobile App Development</h2>
          <p>
          Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.
          </p>
          <button>LEARN MORE</button>
        </div>
      </div>
      <div className="service-item reverse">
        <div className="image-container">
          <img src={img2} alt="Service 2" />
        </div>
        <div className="text-container">
        <h2 style={{color: "#6b3cc9"}}>Digital Strategy Consulting</h2>
          <p>
          Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
          </p>
          <button>LEARN MORE</button>
        </div>
      </div>
    </section>
  );
};

export default Service;