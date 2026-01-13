/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          // Your custom palette
          brand: {
            black: '#121212', // Deep matte black for backgrounds
            white: '#ffffff',
            grey: '#f3f4f6',  // Light grey for sections
            darkGrey: '#374151', // Dark grey for text/borders
            blue: '#0ea5e9',  // Sky blue (Targeting energetic tech vibe)
            yellow: '#facc15', // Vibrant yellow (Targeting innovation/ideas)
          }
        },
        fontFamily: {
          // We'll use a clean sans-serif (Inter or similar is default, but explicit is good)
          sans: ['Inter', 'sans-serif'],
        }
      },
    },
    plugins: [],
  }