/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        card1: "linear-gradient(270.94deg, #FFB5FF -4.62%, #FF69B4 85.86%)",
        card2: "linear-gradient(270.65deg, #A0C2FF -5.19%, #6495ED 88.7%)",
        card3: "linear-gradient(270.53deg, #9C9CFF -5.39%, #7B68EE 95.75%)",
        card4: "linear-gradient(271.03deg, #FFD1A9 -6.14%, #FF8C42 90.21%)",
        card5: "linear-gradient(270.68deg, #D59BFF -4.16%, #8A2BE2 99.98%)",
        card6: "linear-gradient(270.74deg, #99FFFF -4.72%, #00CED1 91.2%)",
        "gradient-btn":
          "linear-gradient(135.45deg, #002DBF -1.89%, #4396F7 45.88%, #FF9BD2 76.85%, #C9FFFC 108.11%)",
        "para-text-gradient":
          "linear-gradient(318.5deg, #D388FF 5.96%, #4B94F7 95.49%)",
      },
    },
  },
  plugins: [],
};
