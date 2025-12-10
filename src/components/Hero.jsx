import React from 'react';

const Hero = () => {
  const [currentImage, setCurrentImage] = React.useState(0);
  const images = [
    "/hero_group.png",
    "/product_ultra.png",
    "/product_fold.png"
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="home" className="hero section flex-center">
      <div className="container">
        <div className="hero-container flex-between">

          <div className="hero-content">
            <h1 className="hero-title">
              The Future of <br />
              <span className="text-gradient">Mobile Technology</span>
            </h1>
            <p className="hero-subtitle">
              Experience the latest in smartphone innovation. Top-tier
              performance meets elegant design at GBR Mobile Hub.
            </p>
            <div className="hero-actions">
              <button className="btn">Explore Collection</button>
              <button className="btn-outline">Watch Demo</button>
            </div>

            <div className="stats flex-between">
              <div className="stat-item">
                <h3>50+</h3>
                <p>Brands</p>
              </div>
              <div className="stat-item">
                <h3>1k+</h3>
                <p>Customers</p>
              </div>
              <div className="stat-item">
                <h3>24/7</h3>
                <p>Support</p>
              </div>
            </div>
          </div>

          <div className="hero-image animate-float">
            <div className="image-wrapper">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Premium Smartphone"
                  className={`hero-slide ${index === currentImage ? 'active' : ''}`}
                />
              ))}
              <div className="glow-effect"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
