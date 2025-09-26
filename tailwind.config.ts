import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        museo: ['"Museo Sans"', "sans-serif"],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
