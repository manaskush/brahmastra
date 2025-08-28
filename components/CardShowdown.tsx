"use client"
import React from 'react';
import BlurText from "./BlurText/BlurText";
import TiltedCard from "./TiltedCard/TiltedCard";
import GlitchText from './GlitchText/GlitchText';

const cardData = [
  {
    imageSrc: "./images/weightlifting.jpg",
    altText: "Weight Lifting Training",
    captionText: "Weight Lifting",
    description: "Build strength with professional equipment",
    icon: "💪"
  },
  {
    imageSrc: "./images/unisex.jpg",
    altText: "Unisex Fitness Classes",
    captionText: "Zumba Classes",
    description: "Dance your way to fitness",
    icon: "💃"
  },
  {
    imageSrc: "./images/rope.jpg",
    altText: "Rope Exercises",
    captionText: "Typer & Rope",
    description: "High-intensity cardio training",
    icon: "🔥"
  },
  {
    imageSrc: "./images/yoga.jpg",
    altText: "Yoga Classes",
    captionText: "Yoga Classes",
    description: "Find balance and flexibility",
    icon: "🧘‍♀️"
  },
  {
    imageSrc: "./images/sauna.jpg",
    altText: "Steam Bath",
    captionText: "Steam Bath",
    description: "Relax and rejuvenate",
    icon: "♨️"
  },
  {
    imageSrc: "./images/boxing.jpg",
    altText: "Boxing Classes",
    captionText: "Boxing",
    description: "Train like a champion",
    icon: "🥊"
  },
];

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

const CardShowdown = () => {
  return (
    <>
      <style jsx>{`
        .floating-orbs {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
          animation: float 20s infinite linear;
        }

        .orb:nth-child(1) {
          width: 80px;
          height: 80px;
          left: 10%;
          animation-delay: 0s;
        }

        .orb:nth-child(2) {
          width: 120px;
          height: 120px;
          left: 70%;
          animation-delay: -5s;
        }

        .orb:nth-child(3) {
          width: 60px;
          height: 60px;
          left: 40%;
          animation-delay: -10s;
        }

        .orb:nth-child(4) {
          width: 100px;
          height: 100px;
          left: 85%;
          animation-delay: -15s;
        }

        @keyframes float {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        .grid-bg {
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .service-card-glow {
          transition: all 0.3s ease;
        }

        .service-card-glow:hover {
          filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.3));
        }

        .section-divider {
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent);
          height: 1px;
          margin: 2rem 0;
        }
      `}</style>

      <div className="relative py-20 bg-black grid-bg overflow-hidden">
        {/* Floating Background Orbs */}
        <div className="floating-orbs">
          <div className="orb"></div>
          <div className="orb"></div>
          <div className="orb"></div>
          <div className="orb"></div>
        </div>

        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950/20 to-black opacity-90"></div>
        
        {/* Radial Gradient Accent */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block">
              <div className="bg-gradient-to-r from-blue-600/20 to-blue-400/20 backdrop-blur-sm px-6 py-2 rounded-full border border-blue-500/30 mb-6">
                <span className="text-blue-400 font-semibold text-sm tracking-wider uppercase">
                  ⚡ Premium Fitness Services
                </span>
              </div>
            </div>
            
            <div className="relative">
              <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 font-bold text-center">
               <GlitchText
  speed={1}
  enableShadows={true}
  enableOnHover={true}
  className='custom-class'
>
  Our Services!
</GlitchText>
              </h2>
              {/* Glow effect behind text */}
              <div className="absolute inset-0 blur-2xl opacity-30">
                <h2 className="text-blue-400 font-bold text-6xl md:text-8xl mb-4 text-center">
                  Our Services!
                </h2>
              </div>
            </div>
            
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Transform your fitness journey with our comprehensive range of professional services
              designed to help you achieve your goals and push your limits.
            </p>
            
            <div className="section-divider"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
            {cardData.map((card, index) => (
              <div key={index} className="group relative">
                {/* Card Background Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                
                {/* Service Number Badge */}
                <div className="absolute -top-4 -left-4 z-20 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg border-2 border-blue-400/30">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Icon Badge */}
                <div className="absolute -top-4 -right-4 z-20 w-12 h-12 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl border border-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>

                <div className="service-card-glow relative bg-black/40 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-4 group-hover:border-blue-400/40 transition-all duration-300">
                  <TiltedCard
                    imageSrc={card.imageSrc}
                    altText={card.altText}
                    captionText={card.captionText}
                    containerHeight="380px"
                    containerWidth="300px"
                    imageHeight="380px"
                    imageWidth="300px"
                    rotateAmplitude={8}
                    scaleOnHover={1.1}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <div className="text-center p-6 bg-gradient-to-t from-black/90 via-black/70 to-transparent">
                        <h3 className="text-white font-bold text-xl mb-2">
                          {card.captionText}
                        </h3>
                        <p className="text-blue-300 text-sm font-medium">
                          {card.description}
                        </p>
                      </div>
                    }
                  />
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 rounded-full text-white font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 cursor-pointer border border-blue-400/30">
              <span>Start Your Journey Today</span>
              <span className="text-2xl">⚡</span>
            </div>
            
            <p className="text-gray-400 text-sm mt-4">
              Join thousands of satisfied members at FitLightning Gym
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardShowdown;