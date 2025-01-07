import React, { useEffect, useState } from "react";
import img1 from "../assets/card1.png";
import img2 from "../assets/card2.png";
import img3 from "../assets/card3.png";
import img4 from "../assets/card4.png";
import img5 from "../assets/card5.png";
import img6 from "../assets/card6.png";
const Carousel = () => {
  const items = [
    {
      title: "Unique Question Sets",
      description: "Tailored questions for authenticity",
      icon: img1,
      gradient: "270.94deg, #FFB5FF -4.62%, #FF69B4 85.86%",
    },
    {
      title: "Multilingual Interviews",
      description: "Assess in any language",
      icon: img2,
      gradient: "270.65deg, #A0C2FF -5.19%, #6495ED 88.7%",
    },
    {
      title: "Bulk Invitations",
      description: "Invite multiple candidates",
      icon: img3,
      gradient: "270.53deg, #9C9CFF -5.39%, #7B68EE 95.75%",
    },
    {
      title: "Advanced Analytics",
      description: "Insights into performance",
      icon: img4,
      gradient: "271.03deg, #FFD1A9 -6.14%, #FF8C42 90.21%",
    },
    {
      title: "Custom Questions",
      description: "Fully customizable interviews",
      icon: img5,
      gradient: "270.68deg, #D59BFF -4.16%, #8A2BE2 99.98%",
    },
    {
      title: "Secure Data",
      description: "Built with privacy in mind",
      icon: img6,
      gradient: "270.74deg, #99FFFF -4.72%, #00CED1 91.2%",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  // Effect to handle the number of cards per slide based on screen size
  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth <= 640) {
        setCardsPerSlide(1); // 1 card per slide on small screens
      } else if (window.innerWidth <= 768) {
        setCardsPerSlide(2); // 2 cards per slide on medium screens
      } else {
        setCardsPerSlide(3); // 3 cards per slide on large screens
      }
    };

    updateCardsPerSlide();
    window.addEventListener("resize", updateCardsPerSlide);

    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsPerSlide >= items.length ? 0 : prevIndex + cardsPerSlide
    );
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 sm:w-[90%] bg-none ">
      <div className="relative  mx-auto overflow-hidden">
        {/* AfterSelection Items */}
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${(currentIndex / cardsPerSlide) * 100}%)`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 px-4"
              style={{ minWidth: `${100 / cardsPerSlide}%` }} // Adjusting the width based on cardsPerSlide
            >
              <div className="flex flex-col items-center gap-[24px] justify-center bg-white border-[1.24px] border-[#B9B9B9]  rounded-[32px] p-[16px]">
                <img
                  src={item.icon} // Using the image URL here
                  alt={item.title}
                  className="w-full"
                />
                <div className="flex flex-col gap-[12px]">
                  <h3 className=" text-[#6F6F6F] text-center text-[22px] leading-[2vh]">
                    {item.title}
                  </h3>
                  <p
                    className="text-center text-transparent  font-bold text-[24px] leading-[29px] h-[60px]"
                    style={{
                      backgroundImage: `linear-gradient(${item.gradient})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex space-x-2 mt-4">
        {Array(Math.ceil(items.length / cardsPerSlide))
          .fill()
          .map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * cardsPerSlide)}
              className={`p-[1vh] rounded-full ${
                currentIndex / cardsPerSlide === index
                  ? "bg-black"
                  : "bg-gray-300"
              }`}
            ></button>
          ))}
      </div>
    </div>
  );
};

export default Carousel;
