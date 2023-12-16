import React from 'react';
import './footer.css';
import img1 from "../Assets/White Logo.png" 

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-column">
        <img src={img1} alt='logo' style={{marginBottom: "26px"}}/>
        <p>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
      </div>
      <div className="footer-column1" style={{textAlign: "left"}}>
        <h3>Technologies</h3>
        <p>ReactJS</p>
        <p>Gatsby</p>
        <p>NextJS</p>
        <p>NodeJS</p>
        <p>GraphQL</p>
        <p>Laravel</p>
      </div>
      <div className="footer-column1" style={{textAlign: "left"}}>
        <h3>Services</h3>
        <p>Our Services</p>
        <p>Social media Marketing</p>
        <p>Web & Mobile App Development</p>
        <p>Data & Analytics</p>
        <p>Google Marketing solutions</p>
        <p>Search Engine Optimization</p>
      </div>
      <hr style={{ width: '100%', borderTop: '1px solid white', marginBottom: '20px' }} />
      <div className="footer-column2">
        <p>Privacy Label | Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;