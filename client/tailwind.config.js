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
        "3/1": "3fr 1fr",
      },
    },
  },
  plugins: [],
};
