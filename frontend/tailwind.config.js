/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "320px",
      md: "744px",
      lg: "1440px",
    },
    colors: {
      bg1: "#EAF4FD",
      bg2: "#3B744E",
      weather1: "#DFEDF4",
      weather2: "#68A97E",
      fontColor: "#020209",
      cardBg: "#FFFFFF",
    },
    fontSize: {
      logoLg: ["40px", { fontWeight: "600" }],
      logoMd: ["26px", { fontWeight: "600" }],
      logoSm: ["16px", { fontWeight: "600" }],
      h1lg: ["95px", { fontWeight: "700" }],
      h1md: ["50px", { fontWeight: "700" }],
      h1sm: ["30px", { fontWeight: "700" }],
      h2lg: ["40px", { fontWeight: "700" }],
      h2sm: ["20px", { fontWeight: "700" }],
      textlg: ["18px", { fontWeight: "700" }],
      textmd: ["16px", { fontWeight: "500" }],
      textsm: ["13px", { fontWeight: "500" }],
    },
    spacing: {
      1: "5px",
      2: "8px",
      3: "16px",
    },
    extend: {
      fontFamily: {
        avenir: ["Avenir", "sans-serif"],
      },
      backgroundImage: {},
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};

//h2 tablet font size: "h1sm"
//footer text and button text: text font size for each screen
//card gap in slides: 8px
//content in each card padding: 5px