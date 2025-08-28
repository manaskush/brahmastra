import Image from "next/image";
import InfiniteMarquee from "./marquee";

const JourneyToFitness = () => {
  return (
    <section className="relative bg-gradient-to-br bg-black py-24 px-6 md:px-20 overflow-hidden">
      {/* Lightning-inspired background elements */}
      <InfiniteMarquee />
      {/* <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-1 h-32 bg-gradient-to-b from-cyan-400 to-transparent transform rotate-12 animate-pulse"></div>
        <div className="absolute bottom-40 left-10 w-1 h-24 bg-gradient-to-t from-blue-400 to-transparent transform -rotate-45 animate-pulse delay-500"></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-1 bg-gradient-to-r from-cyan-400 to-transparent animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 right-1/3 w-12 h-1 bg-gradient-to-l from-blue-400 to-transparent animate-pulse delay-700"></div>
      </div> */}

      {/* Top Section: Image + Text */}
      <div className="relative flex flex-col md:flex-row items-center gap-16 mb-20">
        <div className="w-full md:w-1/2 group">
          <div className="relative overflow-hidden rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105 border border-cyan-400/30">
            <Image
              src="/images/gym.jpg"
              alt="BrahmAstra Gym Interior"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
            {/* Lightning-inspired overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {/* Electric border effect */}
            <div className="absolute inset-0 rounded-xl ring-1 ring-cyan-400/40 group-hover:ring-cyan-300/80 group-hover:shadow-lg group-hover:shadow-cyan-400/20 transition-all duration-300"></div>
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-6">
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Our Journey to
              <span className="block text-cyan-400">
                Fitness Excellence
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-lg text-gray-200 leading-relaxed font-light">
              At <span className="text-cyan-300 font-semibold">BrahmAstra</span>, we are dedicated to transforming lives through
              fitness. Our state-of-the-art gym offers a plethora of options for
              all fitness levels, where ancient strength meets modern innovation.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed font-light">
              Founded by fitness enthusiasts, BrahmAstra was born with a vision
              to create a community-focused space that promotes health, wellness,
              and <span className="text-blue-300 font-medium">unbreakable camaraderie</span> among members.
            </p>
          </div>

          <div className="pt-4">
            <a
              href="#"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-400/30 border border-cyan-400/50"
            >
              <span className="mr-3">Discover Our Story</span>
              <span className="transform group-hover:translate-x-1 transition-transform duration-300 text-xl">⚡</span>
            </a>
          </div>
        </div>
      </div>

      {/* Stylish Divider */}
      <div className="flex items-center justify-center mb-16">
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        <div className="mx-6 flex space-x-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-200"></div>
          <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse delay-400"></div>
        </div>
        <div className="h-px w-32 bg-gradient-to-l from-transparent via-blue-400 to-transparent"></div>
      </div>

      {/* Bottom Section: Enhanced Features */}
      <div className="relative">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Why Choose <span className="text-cyan-400">BrahmAstra</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            {
              number: "01",
              title: "Elite Personal Training",
              description: "Get personalized fitness guidance from our certified trainers to achieve your goals with precision, power, and unwavering dedication.",
              icon: "⚡"
            },
            {
              number: "02", 
              title: "Dynamic Group Classes",
              description: "From intense HIIT sessions to mindful Yoga flows, we offer diverse classes that challenge your limits and ignite your passion.",
              icon: "🔥"
            },
            {
              number: "03",
              title: "Premium Wellness Hub",
              description: "Experience our luxurious steam rooms, recovery zones, and nutrition center for a complete mind-body transformation.",
              icon: "💪"
            }
          ].map((feature, index) => (
            <div key={index} className="group relative">
              {/* Card background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-blue-900/60 rounded-xl backdrop-blur-sm border border-cyan-400/30 group-hover:border-cyan-400/70 group-hover:shadow-lg group-hover:shadow-cyan-400/20 transition-all duration-300 transform group-hover:scale-105"></div>
              
              {/* Card content */}
              <div className="relative p-8 space-y-4">
                <div className="flex items-center justify-center mb-4">
                  <div className="text-4xl mb-2">{feature.icon}</div>
                </div>
                
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  {feature.number}
                </div>
                
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors duration-300">
                  {feature.title}
                </h4>
                
                <p className="text-gray-300 leading-relaxed font-light group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* Decorative line */}
                <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30"></div>
    </section>
  );
};

export default JourneyToFitness;