"use client"
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

const CardShowdown = () => {
  return (
    <div className="py-16 bg-white">
      {/* <h2 className="text-center text-3xl font-bold text-red-700 mb-12">
        OUR SERVICES
      </h2> */}

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
