module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1da1f2',
        secondary: '#14171a',
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
};
