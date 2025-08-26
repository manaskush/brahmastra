"use client"   


import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Dumbbell,
  Zap,
  Heart,
  Users,
  Award,
  ArrowUp,
  Send
} from 'lucide-react';

const FooterComponent: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <style jsx>{`
        @keyframes lightning {
          0%, 100% { opacity: 0.5; transform: translateX(0); }
          50% { opacity: 1; transform: translateX(5px); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(59, 130, 246, 0.6); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(5px) rotate(240deg); }
        }

        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(2); opacity: 0; }
        }

        @keyframes bounce-in {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes slide-up {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-lightning {
          animation: lightning 2s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-pulse-ring {
          animation: pulse-ring 2s ease-out infinite;
        }

        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-rotate-slow {
          animation: rotate-slow 20s linear infinite;
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
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
          transition: all 0.3s ease;
        }

        .social-hover:hover {
          transform: scale(1.2) rotate(10deg);
          transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .link-hover:hover {
          color: #60a5fa;
          transform: translateX(5px);
          transition: all 0.3s ease;
        }

        .success-message {
          background: linear-gradient(90deg, #10b981, #34d399);
          animation: bounce-in 0.5s ease-out;
        }
      `}</style>

      <footer className="relative bg-black text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400 rounded-full opacity-5 blur-3xl animate-rotate-slow"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-500 rounded-full opacity-10 blur-2xl animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-blue-300 rounded-full opacity-5 blur-xl animate-pulse-ring"></div>
          
          {/* Lightning Bolts */}
          <div className="absolute top-10 right-10 text-blue-400 opacity-20 animate-lightning">
            <Zap size={40} />
          </div>
          <div className="absolute bottom-40 left-20 text-blue-400 opacity-15 animate-lightning" style={{animationDelay: '1s'}}>
            <Zap size={30} />
          </div>
        </div>

        <div className="relative">
          {/* Main Footer Content */}
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              
              {/* Brand Section */}
              <div className="lg:col-span-1 animate-slide-up">
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <Dumbbell className="w-10 h-10 text-blue-400 animate-glow" />
                    <div className="absolute inset-0 bg-blue-400 rounded-full opacity-20 animate-pulse-ring"></div>
                  </div>
                  <h3 className="text-3xl font-bold ml-3 text-gradient-lightning">
                    FitLightning
                  </h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Transform your body, elevate your mind, and unleash your potential. 
                  Where fitness meets lightning-fast results.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-900 rounded-lg border border-gray-800 hover-glow">
                    <Users className="w-6 h-6 text-blue-400 mx-auto mb-1" />
                    <div className="text-2xl font-bold text-white">5000+</div>
                    <div className="text-xs text-gray-400">Members</div>
                  </div>
                  <div className="text-center p-3 bg-gray-900 rounded-lg border border-gray-800 hover-glow">
                    <Award className="w-6 h-6 text-blue-400 mx-auto mb-1" />
                    <div className="text-2xl font-bold text-white">15+</div>
                    <div className="text-xs text-gray-400">Awards</div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex space-x-4">
                  {[
                    { icon: Facebook, color: 'hover:text-blue-400' },
                    { icon: Instagram, color: 'hover:text-pink-400' },
                    { icon: Twitter, color: 'hover:text-blue-300' },
                    { icon: Youtube, color: 'hover:text-red-400' }
                  ].map(({ icon: Icon, color }, index) => (
                    <div 
                      key={index}
                      className={`bg-gray-800 p-3 rounded-full border border-gray-700 social-hover cursor-pointer ${color}`}
                    >
                      <Icon size={20} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
                <h4 className="text-xl font-bold mb-6 text-blue-400 flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {['About Us', 'Classes', 'Personal Training', 'Nutrition Plans', 'Membership', 'Success Stories'].map((link, index) => (
                    <li key={index}>
                      <a href="#" className="text-gray-400 link-hover cursor-pointer block py-1">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Programs */}
              <div className="animate-slide-up" style={{animationDelay: '0.4s'}}>
                <h4 className="text-xl font-bold mb-6 text-blue-400 flex items-center">
                  <Heart className="w-5 h-5 mr-2" />
                  Programs
                </h4>
                <ul className="space-y-3">
                  {['Strength Training', 'Cardio Blast', 'Yoga & Flexibility', 'CrossFit', 'Weight Loss', 'Muscle Building'].map((program, index) => (
                    <li key={index}>
                      <a href="#" className="text-gray-400 link-hover cursor-pointer block py-1">
                        {program}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact & Newsletter */}
              <div className="animate-slide-up" style={{animationDelay: '0.6s'}}>
                <h4 className="text-xl font-bold mb-6 text-blue-400 flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Get In Touch
                </h4>
                
                {/* Contact Info */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-gray-400">
                    <MapPin className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                    <span>123 Fitness Street, Gym City, GC 12345</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Phone className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Mail className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                    <span>hello@fitlightning.com</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Clock className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                    <div>
                      <div>Mon-Fri: 5:00 AM - 11:00 PM</div>
                      <div className="text-sm">Sat-Sun: 6:00 AM - 9:00 PM</div>
                    </div>
                  </div>
                </div>

                {/* Newsletter */}
                <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                  <h5 className="text-lg font-semibold mb-3 text-blue-400">⚡ Lightning Updates</h5>
                  <p className="text-gray-400 text-sm mb-4">Get fitness tips, workout plans, and exclusive offers!</p>
                  
                  {isSubscribed ? (
                    <div className="success-message text-white px-4 py-3 rounded-lg text-center font-semibold">
                      🎉 You're subscribed! Welcome to the lightning family!
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email"
                        className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                      />
                      <button
                        onClick={handleSubscribe}
                        className="bg-gradient-lightning px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300 hover-glow"
                      >
                        <Send size={16} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 bg-gray-900/50">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-gray-400 text-sm">
                  © 2024 FitLightning Gym. All rights reserved. Unleash your potential.
                </div>
                
                <div className="flex items-center space-x-6">
                  <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">
                    Privacy Policy
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">
                    Terms of Service
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">
                    Cookie Policy
                  </a>
                </div>

                {/* Back to Top Button */}
                <button
                  onClick={scrollToTop}
                  className="bg-blue-400 text-black p-3 rounded-full hover:bg-blue-300 transition-all duration-300 hover:scale-110 hover-glow animate-bounce-in"
                >
                  <ArrowUp size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;