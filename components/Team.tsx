"use client"

import ProfileCard from "./ProfileCard/ProfileCard"; // adjust path as needed

const teamMembers = [
  {
    name: "Aarav Mehta",
    title: "Founder & Trainer",
    handle: "aaravfit",
    status: "Online",
    avatarUrl: "/images/arjun.jpg",
  },
  {
    name: "Isha Verma",
    title: "Yoga Instructor",
    handle: "ishayoga",
    status: "Offline",
    avatarUrl: "./images/female.jpg",
  },
  {
    name: "Rohit Singh",
    title: "Strength Coach",
    handle: "rohitpower",
    status: "Online",
    avatarUrl: "./images/rohit.jpg",
  },
  {
    name: "Priya Kapoor",
    title: "Nutritionist",
    handle: "priyafit",
    status: "Online",
    avatarUrl: "./images/female.jpg",
  },
];

const TeamSection = () => {
  return (
    <section className="py-20 bg-gray-900 text-white px-4 md:px-20">
      <h2 className="text-center text-6xl md:text-8xl lg:text-9xl font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 relative">
  Meet Our Expert Team
  <div className="absolute inset-0 blur-2xl opacity-30 pointer-events-none">
    <span className="text-blue-400 font-bold text-6xl md:text-8xl lg:text-9xl">
      Meet Our Expert Team
    </span>
  </div>
</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {teamMembers.map((member, index) => (
          <ProfileCard
            key={index}
            name={member.name}
            title={member.title}
            handle={member.handle}
            status={member.status}
            contactText="Contact Me"
            avatarUrl={member.avatarUrl}
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log(`Contacting ${member.name}`)}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
