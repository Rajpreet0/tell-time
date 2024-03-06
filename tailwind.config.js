/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}",
            "./pages/**/*.{js,ts,jsx,tsx}",
            "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'bg': '#84CDF3',
        'bg-darker': '#71b0d1',
        'sec_bg': '#F9F5FF'
      }
    },
  },
  plugins: [],
}

