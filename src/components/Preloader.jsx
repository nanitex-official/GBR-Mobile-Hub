import React, { useEffect, useState } from 'react';

const Preloader = ({ onLoaded }) => {
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFade(true);
            setTimeout(() => {
                if (onLoaded) onLoaded();
            }, 500); // Wait for fade out animation
        }, 2000); // Display time

        return () => clearTimeout(timer);
    }, [onLoaded]);

    return (
        <div className={`preloader flex-center ${fade ? 'fade-out' : ''}`}>
            <div className="preloader-content">
                <div className="logo-container">
                    <img src="/logo.png" alt="GBR Mobile Hub" className="preloader-logo" />
                    <div className="pulse-ring"></div>
                </div>
                <h2 className="loading-text text-gradient">GBR Mobile Hub</h2>
            </div>

            <style jsx>{`
        .preloader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--bg-dark);
          z-index: 9999;
          transition: opacity 0.5s ease, visibility 0.5s ease;
          flex-direction: column;
        }

        .preloader.fade-out {
          opacity: 0;
          visibility: hidden;
        }

        .preloader-content {
          text-align: center;
          position: relative;
        }

        .logo-container {
          position: relative;
          width: 120px;
          height: 120px;
          margin: 0 auto 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .preloader-logo {
          width: 80px;
          height: auto;
          z-index: 2;
          position: relative;
        }

        .pulse-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 2px solid var(--primary);
          animation: pulse 2s infinite;
        }

        .pulse-ring::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
          height: 80%;
          border-radius: 50%;
          border: 2px solid var(--secondary);
          animation: pulse 2s infinite reverse;
        }

        .loading-text {
          font-size: 1.5rem;
          font-weight: 700;
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards 0.5s;
        }

        @keyframes pulse {
          0% {
            width: 80%;
            height: 80%;
            opacity: 1;
          }
          100% {
            width: 140%;
            height: 140%;
            opacity: 0;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
    );
};

export default Preloader;
