"use client"
import React from 'react';

const InfiniteMarquee: React.FC = () => {
  // Replace this URL with your actual image
  const marqueeImage = "./images/main_logo.png";
  
  // Increased image count to ensure no empty spaces
  const imageCount = 20;
  const images = Array(imageCount).fill(marqueeImage);

  return (
    <>
      <style jsx>{`
        @keyframes marquee-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }

        @keyframes marquee-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0%); }
        }

        .marquee-left {
          animation: marquee-left 60s linear infinite;
        }

        .marquee-right {
          animation: marquee-right 60s linear infinite;
        }

        .marquee-container {
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
          );
        }

        .marquee-item {
          transition: all 0.3s ease;
        }

        .marquee-item:hover {
          transform: scale(1.05);
          filter: brightness(1.1) drop-shadow(0 0 15px rgba(59, 130, 246, 0.4));
        }

        /* Pause animation on hover */
        .marquee-container:hover .marquee-left,
        .marquee-container:hover .marquee-right {
          animation-play-state: paused;
        }

        /* Ensure seamless looping with proper width */
        .marquee-track {
          display: flex;
          width: max-content;
        }
      `}</style>

      <div className="bg-black overflow-hidden relative py-2 mb-">
        {/* First Marquee - Left to Right */}
        <div className="marquee-container mb-8">
          <div className="marquee-track marquee-left">
            {/* First set of images */}
            {images.map((image, index) => (
              <div
                key={`left-${index}`}
                className="marquee-item mx-6 flex-shrink-0"
              >
                <img
                  src={image}
                  alt={`Marquee item ${index + 1}`}
                  className="h-24 w-auto object-contain"
                  draggable={false}
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {images.map((image, index) => (
              <div
                key={`left-duplicate-${index}`}
                className="marquee-item mx-6 flex-shrink-0"
              >
                <img
                  src={image}
                  alt={`Marquee item duplicate ${index + 1}`}
                  className="h-24 w-auto object-contain"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second Marquee - Right to Left (Same size as first) */}
        <div className="marquee-container">
          <div className="marquee-track marquee-right">
            {/* First set of images */}
            {images.map((image, index) => (
              <div
                key={`right-${index}`}
                className="marquee-item mx-8 flex-shrink-0"
              >
                <img
                  src={image}
                  alt={`Marquee item ${index + 1}`}
                  className="h-24 w-auto object-contain"
                  draggable={false}
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {images.map((image, index) => (
              <div
                key={`right-duplicate-${index}`}
                className="marquee-item mx-8 flex-shrink-0"
              >
                <img
                  src={image}
                  alt={`Marquee item duplicate ${index + 1}`}
                  className="h-24 w-auto object-contain"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Center Branding/Text */}
        {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-black/90 backdrop-blur-sm px-8 py-4 rounded-full border border-blue-400/30 shadow-2xl">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              FitLightning Gym ⚡
            </h3>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default InfiniteMarquee;