import Image from "next/image";
import Lightning from "./Lightning/Lightning";
import Header from "@/components/header";
import CardShowdown from "@/components/CardShowdown";
import JourneyToFitness from "@/components/journey";
import TeamSection from "@/components/Team";
import GallerySection from "@/components/gallery";
import TestimonialsComponent from "@/components/testimonial";
import FooterComponent from "@/components/footer";

export default function Home() {
  return (
   <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Lightning Background */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <Lightning hue={220} xOffset={0} speed={1} intensity={1} size={1} />
        </div>
        {/* Header on top of Lightning */}
        <div className="absolute top-0 left-0 w-full z-20">
          <Header />
        </div>
        {/* Hero Section */}
{/* Hero Section */}
{/* Hero Section */}
<div className="relative h-screen flex items-center justify-center overflow-hidden">
  {/* Hero Content Container */}
  <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-30 max-w-5xl px-4">
    
    {/* Main Heading with Enhanced Typography */}
    <div className="relative mb-6">
      <h1 className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-300 mb-2 tracking-tight leading-none">
        Welcome to
      </h1>
      <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 tracking-wider relative">
        BrahmAstra
        {/* Glowing effect behind text */}
        <div className="absolute inset-0 text-8xl md:text-9xl font-black text-blue-400 opacity-20 blur-lg -z-10">
          BrahmAstra
        </div>
      </h1>
    </div>
    
    {/* Stylish Divider */}
    <div className="flex items-center justify-center mb-8">
      <div className="h-px w-20 bg-gradient-to-r from-transparent to-blue-400"></div>
      <div className="mx-4 w-3 h-3 rounded-full bg-blue-400 animate-pulse"></div>
      <div className="h-px w-20 bg-gradient-to-l from-transparent to-blue-400"></div>
    </div>
    
    {/* Enhanced Subheading */}
    <h2 className="text-2xl md:text-3xl text-blue-200 mb-6 font-light tracking-widest uppercase">
      Unleash Your <span className="text-cyan-300 font-bold">Inner Warrior</span>
    </h2>
    
    {/* Description with Better Typography */}
    <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light opacity-90">
      Transform your body, mind, and spirit. Join the ultimate fitness experience where 
      <span className="text-blue-300 font-medium"> ancient strength meets modern training</span>.
    </p>
    
    {/* Enhanced CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
      <button className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-5 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 border border-blue-500/30 overflow-hidden">
        <span className="relative z-10">Start Your Journey</span>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </button>
      
      <button className="group relative border-2 border-blue-400 text-blue-300 hover:text-white font-bold py-5 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-blue-900/10 hover:bg-blue-600/20 shadow-lg hover:shadow-blue-400/25">
        <span className="relative z-10">View Programs</span>
        <div className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-300"></div>
      </button>
    </div>
    
    {/* Enhanced Stats Section */}
    <div className="flex flex-col sm:flex-row gap-12 justify-center items-center text-white">
      <div className="group text-center transform hover:scale-110 transition-all duration-300">
        <div className="relative">
          <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-300 to-blue-500 mb-2">500+</div>
          <div className="absolute inset-0 text-5xl font-black text-blue-400 opacity-20 blur-md">500+</div>
        </div>
        <div className="text-xs uppercase tracking-[0.2em] text-blue-200 font-medium">Active Members</div>
        <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-2 opacity-60"></div>
      </div>
      
      <div className="hidden sm:block w-px h-16 bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-50"></div>
      
      <div className="group text-center transform hover:scale-110 transition-all duration-300">
        <div className="relative">
          <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-blue-500 mb-2">24/7</div>
          <div className="absolute inset-0 text-5xl font-black text-cyan-400 opacity-20 blur-md">24/7</div>
        </div>
        <div className="text-xs uppercase tracking-[0.2em] text-blue-200 font-medium">Gym Access</div>
        <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-2 opacity-60"></div>
      </div>
      
      <div className="hidden sm:block w-px h-16 bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-50"></div>
      
      <div className="group text-center transform hover:scale-110 transition-all duration-300">
        <div className="relative">
          <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-300 to-cyan-500 mb-2">5★</div>
          <div className="absolute inset-0 text-5xl font-black text-blue-400 opacity-20 blur-md">5★</div>
        </div>
        <div className="text-xs uppercase tracking-[0.2em] text-blue-200 font-medium">Top Rated</div>
        <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-2 opacity-60"></div>
      </div>
    </div>
    
    {/* Enhanced Scroll Indicator */}
    {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
      <div className="flex flex-col items-center animate-bounce">
        <div className="text-blue-300 text-sm mb-2 opacity-70 font-light tracking-wide">Scroll Down</div>
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center relative overflow-hidden">
          <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full mt-2 animate-pulse"></div>
          <div className="absolute inset-0 bg-blue-400 opacity-10 rounded-full"></div>
        </div>
      </div>
    </div> */}
  </div>
  
  {/* Additional Floating Elements */}
  <div className="absolute top-20 right-20 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-30"></div>
  <div className="absolute top-40 left-20 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-40"></div>
  <div className="absolute bottom-40 right-40 w-1.5 h-1.5 bg-blue-300 rounded-full animate-bounce opacity-20"></div>
</div>
      </section>

      {/* Other Sections (Content Below Hero) */}
      <section className="flex-grow">
        {/* Other content like text, images, etc. */}
        <div className="">
         <JourneyToFitness />
        </div>
        
        <div className="">
          <CardShowdown />
        </div>
        
        <div className="">
         <TeamSection />
        </div>
        <div className="">
         <GallerySection />
        </div>
        <div className="">
         <TestimonialsComponent />
        </div>
        <div className="">
         <FooterComponent />
        </div>
        {/* Add more sections as needed */}
      </section>
    </div>

  );
}
