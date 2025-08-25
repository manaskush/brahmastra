"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  achievement: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Fitness Enthusiast",
    content: "This gym completely transformed my life! The trainers are incredibly knowledgeable and the equipment is top-notch. I've never felt stronger or more confident.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    achievement: "Lost 30 lbs in 6 months"
  },
  {
    id: 2,
    name: "Mike Rodriguez",
    role: "Personal Trainer",
    content: "As a fellow trainer, I can say this facility sets the gold standard. The community here is supportive, and the results speak for themselves.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    achievement: "Built 20 lbs muscle mass"
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Yoga Instructor",
    content: "The holistic approach here is amazing. They focus not just on physical strength but mental wellness too. It's more than a gym - it's a lifestyle.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    achievement: "Improved flexibility by 200%"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Marathon Runner",
    content: "The cardio equipment and training programs helped me shave 15 minutes off my marathon time. The support from staff and members is unmatched.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    achievement: "Marathon PB: 3:12"
  }
];

const TestimonialsComponent: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 300);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 300);
    setIsAutoPlaying(false);
  };

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(5px) rotate(240deg); }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideOut {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(-50px);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fadeInScale {
          animation: fadeInScale 0.6s ease-out forwards;
        }

        .animate-rotate {
          animation: rotate 20s linear infinite;
        }

        .animate-pulse-custom {
          animation: pulse 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .slide-in {
          animation: slideIn 0.5s ease-out forwards;
        }

        .slide-out {
          animation: slideOut 0.3s ease-in forwards;
        }

        .bg-gradient-lightning {
          background: linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%);
        }

        .text-gradient-lightning {
          background: linear-gradient(135deg, #3b82f6, #60a5fa);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hover-glow:hover {
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
          transform: translateY(-2px);
          transition: all 0.3s ease;
        }

        .btn-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.4);
        }

        .profile-hover:hover {
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }
      `}</style>

      <section className="relative bg-black py-20 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400 rounded-full opacity-10 blur-3xl animate-rotate"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full opacity-5 blur-3xl animate-float"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500 rounded-full opacity-5 blur-2xl animate-pulse-custom"></div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-block p-1 rounded-full bg-gradient-lightning mb-6 hover-glow transition-all duration-300">
              <div className="bg-black px-6 py-2 rounded-full">
                <span className="text-blue-400 font-semibold text-sm tracking-wider uppercase">
                  Success Stories
                </span>
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              What Our
              <span className="block text-gradient-lightning mt-2">
                Members Say
              </span>
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
              Real transformations, real results, real people achieving their fitness goals
            </p>
          </div>

          {/* Main Testimonial Card */}
          <div className="relative mb-12">
            <div className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 border border-gray-700 shadow-2xl relative overflow-hidden hover-glow transition-all duration-500 ${isAnimating ? 'slide-out' : 'slide-in'}`}>
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-blue-400 opacity-20 animate-float">
                <Quote size={60} />
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Profile Image */}
                <div className="relative profile-hover">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg shadow-blue-400/20">
                    <img 
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-blue-400 text-black px-3 py-1 rounded-full text-sm font-bold animate-pulse-custom">
                    ⚡
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Stars */}
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-6 h-6 text-blue-400 fill-current mr-1 animate-fadeInScale" 
                        style={{animationDelay: `${i * 0.1}s`}}
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-white text-xl md:text-2xl leading-relaxed mb-6 font-light italic">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  {/* Member Info */}
                  <div className="space-y-2">
                    <h4 className="text-white text-2xl font-bold">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-blue-400 text-lg font-medium">
                      {testimonials[currentIndex].role}
                    </p>
                    <div className="inline-block bg-blue-400/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold border border-blue-400/30 hover:bg-blue-400/30 transition-all duration-300 hover:scale-105">
                      🏆 {testimonials[currentIndex].achievement}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevTestimonial}
                disabled={isAnimating}
                className="bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-full border border-gray-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-400/20 disabled:opacity-50"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Dots Indicator */}
              <div className="flex space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    disabled={isAnimating}
                    className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                      index === currentIndex 
                        ? 'bg-blue-400 animate-pulse-custom' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    } disabled:opacity-50`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                disabled={isAnimating}
                className="bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-full border border-gray-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-400/20 disabled:opacity-50"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center animate-fadeInUp">
            <button className="bg-gradient-lightning text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 btn-hover shadow-lg shadow-blue-500/25">
              Start Your Transformation Today ⚡
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsComponent;