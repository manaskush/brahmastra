"use client"
import BlurText from "./BlurText/BlurText";
import TiltedCard from "./TiltedCard/TiltedCard";

const cardData = [
  {
    imageSrc: "./images/weightlifting.jpg",
    altText: "Kendrick Lamar - GNX Album Cover",
    captionText: "Weight Lifting",
  },
  {
    imageSrc: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
    altText: "Kendrick Lamar - GNX Album Cover",
    captionText: "Zumba Classes",
  },
  {
    imageSrc: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
    altText: "Kendrick Lamar - GNX Album Cover",
    captionText: "Typer & Rope",
  },
  {
    imageSrc: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
    altText: "Kendrick Lamar - GNX Album Cover",
    captionText: "Yoga Classes",
  },
  {
    imageSrc: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
    altText: "Kendrick Lamar - GNX Album Cover",
    captionText: "Steam Bath",
  },
  {
    imageSrc: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
    altText: "Kendrick Lamar - GNX Album Cover",
    captionText: "Boxing",
  },
];
 const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

const CardShowdown = () => {
  return (
    <div className="py-16 bg-grey-950">
      <div className="flex justify-center items-center w-full mb-12">
  <h2 className="text-blue-700 font-bold text-center">
    <BlurText
      text="Our Services!"
      delay={150}
      animateBy="words"
      direction="top"
      onAnimationComplete={handleAnimationComplete}
      className="text-6xl md:text-8xl mb-8"
    />
  </h2>
</div>
     

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
        {cardData.map((card, index) => (
          <TiltedCard
            key={index}
            imageSrc={card.imageSrc}
            altText={card.altText}
            captionText={card.captionText}
            containerHeight="400px"
            containerWidth="300px"
            imageHeight="400px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text text-white font-semibold">
                {card.captionText}
              </p>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default CardShowdown;
