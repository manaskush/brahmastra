import Image from "next/image";

const JourneyToFitness = () => {
  return (
    <section className="bg-gray-500 py-16 px-6 md:px-20">
      {/* Top Section: Image + Text */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
        <div className="w-full md:w-1/2">
          <Image
            src="/images/gym.jpg"
            alt="Gym Interior"
            width={600}
            height={400}
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Journey to Fitness
          </h2>
          <p className="text-gray-700 mb-4">
            At BrahmAstra, we are dedicated to transforming lives through
            fitness. Our state-of-the-art gym offers a plethora of options for
            all fitness levels.
          </p>
          <p className="text-gray-700 mb-6">
            Founded by fitness enthusiasts, BrahmAstra was born with a vision
            to create a community-focused space that promotes health, wellness,
            and camaraderie among members.
          </p>
          <a
            href="#"
            className="text-purple-700 font-semibold hover:underline flex items-center"
          >
            Learn More <span className="ml-1">→</span>
          </a>
        </div>
      </div>

      {/* Bottom Section: Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left border-t border-gray-200 pt-12">
        <div>
          <h4 className="text-purple-700 font-bold text-sm mb-1">01</h4>
          <h3 className="text-xl font-semibold mb-2">Personal Training</h3>
          <p className="text-gray-600">
            Get personalized fitness guidance from our certified trainers to
            achieve your goals effectively and efficiently.
          </p>
        </div>

        <div className="border-l border-r border-gray-200 px-4">
          <h4 className="text-purple-700 font-bold text-sm mb-1">02</h4>
          <h3 className="text-xl font-semibold mb-2">Diverse Group Classes</h3>
          <p className="text-gray-600">
            From Yoga to HIIT, we offer a wide array of classes to keep your
            workouts exciting and engaging.
          </p>
        </div>

        <div>
          <h4 className="text-purple-700 font-bold text-sm mb-1">03</h4>
          <h3 className="text-xl font-semibold mb-2">Wellness Amenities</h3>
          <p className="text-gray-600">
            Enjoy our steam rooms, showers, and nutrition options for a
            holistic fitness experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default JourneyToFitness;
