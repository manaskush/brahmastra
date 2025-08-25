"use client"
import RollingGallery from "./RollingGallery/RollingGallery";

const GallerySection = () => {
  return (
    <section className="bg-black text-white py-20 px-4 md:px-20">
      <div className="max-w-screen-xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Gallery</h2>
        <p className="text-gray-400">
          A rolling showcase of our latest moments, events, and achievements at BrahmAstra.
        </p>
      </div>

      <div className="overflow-hidden">
        <RollingGallery autoplay={true} pauseOnHover={true} />
      </div>
    </section>
  );
};

export default GallerySection;
