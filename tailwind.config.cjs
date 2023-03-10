/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      heading: ['Raleway', 'system-ui'],
      body: ['Roboto Mono', 'system-ui']
    },
    colors: {
      'color-1': '#ffffff',
      'color-2': '#1a1c20',
      'color-3': '#292733',
      'color-4': '#f0a500',
      navbar: 'rgba(41, 39, 51, 0.9)'
    },
    extend: {
      backgroundImage: {
        curveLines: "url('/assets/curve-lines.svg')"
      }
    }
  },
  plugins: []
}
