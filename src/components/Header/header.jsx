import React, { useEffect, useState } from 'react';
import './header.css';
import img1 from '../Assets/White Logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    scrollToSection('home');

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsHeaderFixed(scrollPosition > 50);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${isHeaderFixed ? 'fixed' : ''}`}>
      <div className="header-container">
        <div className="company-menu-container">
          <img className="company-name" src={img1} onClick={() => scrollToSection('hero')} alt="ATDigital" />
          <div className="menu-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <nav className={menuOpen ? 'show' : ''}>
          <ul>
            <li onClick={() => scrollToSection('services')}>Services</li>
            <li onClick={() => scrollToSection('aboutus')}>About Us</li>
            <li onClick={() => scrollToSection('contactus')}>Contact Us</li>
            <li onClick={() => scrollToSection('careers')}>Careers</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;