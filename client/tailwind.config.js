module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: "1rem",
    },
    extend: {
      zIndex: {
        2: "2",
      },
      gridTemplateColumns: {
        "1/2": "1fr 2fr",
        "2/1": "2fr 1fr",
        "1/3": "1fr 3fr",
        "1/4": "1fr 4fr",
        "1/5": "1fr 5fr",
        "1/6": "1fr 6fr",
        "3/1": "3fr 1fr",
        "auto/1": "auto 1fr",
      },
      height: {
        '70vh': '70vh',
      },
      inset: {
        '12rem': '12rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
