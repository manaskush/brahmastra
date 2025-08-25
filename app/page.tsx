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
        {/* Hero Heading */}
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-white z-30">
          Welcome to BrahmAstra
        </h1>
      </section>

      {/* Other Sections (Content Below Hero) */}
      <section className="flex-grow">
        {/* Other content like text, images, etc. */}
        <div className="">
          <CardShowdown />
        </div>
        <div className="">
         <JourneyToFitness />
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
