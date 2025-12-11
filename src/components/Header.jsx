import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container flex-between">
        <div className="logo">
          <span className="text-gradient">GBR</span> Mobile Hub
        </div>

        {/* Desktop Nav */}
        <nav className="nav desktop-nav">
          <ul className="flex-center">
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="flex-center" style={{ gap: '15px' }}>
          {/* Shop Now Button - Hidden on mobile via CSS */}
          <button className="btn">Shop Now</button>

          {/* Mobile Toggle */}
          <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="flex-column">
          <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
          <li><a href="#products" onClick={() => setMobileMenuOpen(false)}>Products</a></li>
          <li><a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a></li>
          <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
        </ul>
        {/* Mobile Menu Button */}
        <button className="btn mobile-shop-btn" onClick={() => setMobileMenuOpen(false)}>Shop Now</button>
      </div>
    </header>
  );
};

export default Header;
