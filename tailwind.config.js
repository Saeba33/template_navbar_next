module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-bg": "#ffffff",
        "light-bg-items": "rgba(0, 0, 0, 0.1)",
        "light-text": "#000000",
        "dark-bg": "transparent",
        "dark-bg-items": "rgba(255, 255, 255, 0.1)",
        "dark-text": "#ffffff",
      },
    },
  },
  plugins: [],
};