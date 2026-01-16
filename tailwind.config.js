// /** @type {import('tailwindcss').Config} */
// export default {
//     content: [
//       "./index.html",
//       "./src/**/*.{js,ts,jsx,tsx}",
//     ],
//     theme: {
//       extend: {
//         colors: {
//           // Your custom palette
//           brand: {
//             black: '#121212', // Deep matte black for backgrounds
//             white: '#ffffff',
//             grey: '#f3f4f6',  // Light grey for sections
//             darkGrey: '#374151', // Dark grey for text/borders
//             blue: '#0ea5e9',  // Sky blue (Targeting energetic tech vibe)
//             yellow: '#facc15', // Vibrant yellow (Targeting innovation/ideas)
//           }
//         },
//         fontFamily: {
//           // We'll use a clean sans-serif (Inter or similar is default, but explicit is good)
//           sans: ['Inter', 'sans-serif'],
//         }
//       },
//     },
//     plugins: [],
//   }


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-black": "#121212", // The main dark background
        "brand-orange": "#FF6A00", // Sunset Orange
        "brand-magenta": "#D726FF", // Hot Magenta
        "brand-lavender": "#E0AAFF", // Lavender highlight
        "surface-dark": "#1E1E1E", // Card background
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"],
        "funky": ["Syne", "sans-serif"],
        "pixel": ["VT323", "monospace"], // or "Pixelify Sans"
        "body": ["Space Grotesk", "sans-serif"],
      },
      boxShadow: {
        "retro": "4px 4px 0px 0px #E0AAFF",
        "retro-hover": "6px 6px 0px 0px #D726FF",
        "neon": "0 0 15px rgba(215, 38, 255, 0.5)",
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}