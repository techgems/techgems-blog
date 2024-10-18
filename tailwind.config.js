/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ["Merriweather Sans"],
        body: ["Roboto"],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}