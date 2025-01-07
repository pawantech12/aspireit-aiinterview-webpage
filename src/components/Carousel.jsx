import React, { useEffect, useState } from "react";

const Carousel = () => {
  const items = [
    {
      title: "Unique Question Sets",
      description: "Tailored questions for authenticity",
      icon: "https://s3-alpha-sig.figma.com/img/0ada/0b19/29f4e3cd9705c3665842a066214dad2c?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cNa18WcxqtOG-nlClftHrxRYs0PxDgD~HlMG-diHlHCZl6K4l4NrKRHPUAUGv~TOvQJwcqutdvCjb3CFKy15CRVfBwL2o-v8Libb98gb4ktbpm~PvUp7nzCu0viXcHMr7EnwQToo4FSk726TIBwv8RVuLgGKvTM0eDNXxdMfr9xIDTH79aSzQdber~fuW3Y~0dy6~yv-oX4pUIWjsm2DNnGc3cyskc-XkbtHyS~99ZGP4utHBMgQkdlzCwjwuwleornnIwdgjTCzzrzFdjxYGtB2YgZuMGSKaqKPS7D95m-~iETujYrTy0D4NKLejesSqBSS0nMpS8fBnMCJUSY-xA__",
      backgroundColor: "#FFD8FF",
      gradient: "270.94deg, #FFB5FF -4.62%, #FF69B4 85.86%",
    },
    {
      title: "Multilingual Interviews",
      description: "Assess in any language",
      icon: "https://s3-alpha-sig.figma.com/img/9c7b/c700/7f7ea02700f5dacd86d8ae0cb3f8d7c2?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MNfwxyznqTLMgh2AFstjjorMrBF-tz-4a52eVa-HmsFruTNKDjbgRJZPSrse2E5MwEhrrK0IuJ-QWXTSuc1LdxcaNA0DYLxeJX4YaRv7qEl4Rsbvm3lL1Z3IVL6oBxL~ZXlkZhqSxuj9oekSixuoU9fT0qamq38YU7E2fkWbq1QdhvQtBDfXe-~xL9WpnVuBLham3h6J7QlG3CnCtZIhdyvoZ5QajIYdmag6qi1lJ6268HBhBRlgFDgM91Kfibc9-uCEqfeAC7ZGBhcpRB0d49tiXLYRoyEuW1m~npfSIUoYZ1dat0JVcPoIqTv6UiamJZJxOwka~qvcckFPCsH2kg__",
      backgroundColor: "#CBDEFF",
      gradient: "270.65deg, #A0C2FF -5.19%, #6495ED 88.7%",
    },
    {
      title: "Bulk Invitations",
      description: "Invite multiple candidates",
      icon: "https://s3-alpha-sig.figma.com/img/566b/7ce5/9af10d3068323170cfcefd4a38402623?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WOnOHqgC09faom2m54RBPtzlvaXkYUGNAYdoCvx~ajXSlgQEQuBn450rKq7bVxu~Z26lsK-gbqGpilk3ZPYOWGFEw~6iSLRpyQj5bkb5XMR58~quZDpnkj5tsb-K5kjTYL2Wj9XY2mgRFNth2KH3K4fuJOhqEjqzWBKZoBf~vhM9~QCLZAv2nUMWM7~7Pa7XRChmlVUEHkfEmbt79TDp2D5t7SV69MIByR5~CJC4uCztWmTek-AXM5IVelM8spQNj1VMddAA42H~X9A1gE-acoF7kn2ipwnbcq7Vqpe~9M5j5FnVpWULZV~G8Hql6zq2jgKwAqbVlYgaV~vFvmKJzA__",
      backgroundColor: "#E1E1FF",
      gradient: "270.53deg, #9C9CFF -5.39%, #7B68EE 95.75%",
    },
    {
      title: "Advanced Analytics",
      description: "Insights into performance",
      icon: "https://s3-alpha-sig.figma.com/img/1752/d54a/17294c06a2b965af11f2e7d8080aec69?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=boqWv0Pgy6yVyNK--jlWoGIqh1mo7-Kz9Oz6-6g5DhBQQNYzCrFpjnfK6TLx7-awYxzCN~29JBVHIEcwI4WKHy06HKkKhzjt4Udw8sSC5ircmHOthL5TNe5dPDMPxlidUlgS56uF5rXwzlePNRFsLrgmsHv2gh0GJ8QsHCtbAWw94xVJS5UpbQBeIg09zWabYdVwsLgHiGTsnq7AzOLQm-HfXQ1Vxu5f1ZrEqbe~feWaDUa1TeKJaeeJblHg7kM4vEFua6gE1sMlJscjuA8BrZmYFnuYbINFMvHzv4Geyatp0Sd5BEPZ48exmr9hSuiLm0sqZdvSc-ZzPAhal8tU6A__",
      backgroundColor: "#FFE8D4",
      gradient: "271.03deg, #FFD1A9 -6.14%, #FF8C42 90.21%",
    },
    {
      title: "Custom Questions",
      description: "Fully customizable interviews",
      icon: "https://s3-alpha-sig.figma.com/img/7ac9/a16e/d67f1c878b3f1b92fd430427ee90861b?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VccOh6W9Pb~R-m6E8WKJvmsr5sLV0X-CUumgOem58Zn9BEKN5TiCZeO8edZKlMtHPPhW0E6Yf8-3ycsRRxW1D8qa5RYSM9PZDrf5SZramJKhMKJFiZ6w37keGornjb2LrB7YhfM7wMMtSgZSGB6cOBT4fKdXQqGHIyZPt6MT8zLhoGl9QzZQgQLMBFijtU7Kh0iA8fpIhR7HE64iiDrtc8uZwU5MyKMcj1nHbh7wNfEpGPcVdVHskjVQOO-57wqtGEJTib2i8S6~Lina1hLIBS07l2NjzULUTk6l7yY7GJX15t9rvMHnVhqmLMmONuOdz2WaAyHU6vqHjut83H9H5w__",
      backgroundColor: "#ECD2FF",
      gradient: "270.68deg, #D59BFF -4.16%, #8A2BE2 99.98%",
    },
    {
      title: "Secure Data",
      description: "Built with privacy in mind",
      icon: "https://s3-alpha-sig.figma.com/img/9cd3/9bfc/56659c27beb85bf3038f5c89d47e43cb?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O6NUR2ti-YOozyGJ4nb~cVjl4SMwbtyfQWTAJ8Z4sGvJKXkH92XiPAfVX5gUAjDbzgxZ~37wEPPs~Oiv97mpPPqfSNtunccYqMkbS0AygpzmccE0PaHoakpo5I38PsFmyoLlc-dyI~mzgpe0x6FyNPlMKr5ZTZKv9x7T~~goq6P4MWeZrmg3aTGtp6D~KXCQg4UZWi064XhPCZyLqen5GHSE52OF13ZazWVwAmBZ5J5A5H0iTi9zsZqECkjj10g3g2A6DASW~bNYvUwWOeahusfIu4CcR35oD1fxbrtW91X~9Esr1DUSGqJtogQ6Qeo85Ajqh6qPL6WRHw13UpY3rQ__",
      backgroundColor: "#DCFFFF",
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
                <figure
                  className={`w-full h-[170px] flex justify-center items-center rounded-[24px] shadow-[0px_0px_4px_0px_#00000040_inset]`}
                  style={{
                    backgroundColor: item.backgroundColor,
                  }}
                >
                  <img
                    src={item.icon} // Using the image URL here
                    alt={item.title}
                    className="w-[150px]"
                  />
                </figure>
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
