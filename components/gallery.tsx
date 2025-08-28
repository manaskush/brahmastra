"use client"
import RollingGallery from "./RollingGallery/RollingGallery";

const GallerySection = () => {
  return (
    <section className="bg-black text-white py-20 px-4 md:px-20">
      <div className="max-w-screen-xl mx-auto text-center mb-12">
       <h2 className="text-center text-6xl md:text-8xl lg:text-9xl font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 relative">
  Gallery
  <div className="absolute inset-0 blur-2xl opacity-30 pointer-events-none">
    <span className="text-black-400 font-bold text-6xl md:text-8xl lg:text-9xl">
      Gallery
    </span>
  </div>
</h2>
        <p className="text-gray-400 text-2xl">
          A Rolling showcase of our latest moments, events, and achievements at BrahmAstra.
        </p>
      </div>

      <div className="overflow-hidden">
        <RollingGallery autoplay={true} pauseOnHover={true} />
      </div>
    </section>
  );
};

export default GallerySection;
