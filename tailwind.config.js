/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      redPrimary: "#DD0000",
      redSecondary: "#B30000",
      white: "#FFFFFF",
      blue: "#337AB7",
      success: "#04CC0C",
      lightGreen: "#F3FFF5",
      error: "#FB184E",
      warning: "#D39C25",
      warningLight: "#FBF5E2",
      grayLine: "#ADADAD",
      grayBg: "#EEEEEE",
      defaultBg: "#F7F9FA",
      lightGrayText: "#888888",
      darkText: "#333333",
      blueHover: "#5897FB",
    },
    fontSize: {
      h4: [
        "30px",
        {
          lineHeight: "45px",
          fontWeight: "600",
        },
      ],
      h5: [
        "24px",
        {
          lineHeight: "36px",
          fontWeight: "600",
        },
      ],
      h6: [
        "24px",
        {
          lineHeight: "30px",
          fontWeight: "600",
        },
      ],
      sub1: [
        "14px",
        {
          lineHeight: "21px",
          fontWeight: "600",
        },
      ],
      sub2: [
        "12px",
        {
          lineHeight: "28px",
          fontWeight: "600",
        },
      ],
      body1: [
        "14px",
        {
          lineHeight: "21px",
          fontWeight: "400",
        },
      ],
      body2: [
        "12px",
        {
          lineHeight: "18px",
          fontWeight: "400",
        },
      ],
      caption: [
        "10px",
        {
          lineHeight: "15px",
          fontWeight: "400",
        },
      ],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
