/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./**/*.{html,js,ts,jsx,tsx}"],
  content: ["./**/*.html", "./**/*.php", "./**/*.js"],
  theme: {
    fontFamily: {
      serif: ["Bricolage Grotesque", "serif"],
      Lato: ["Lato", "sans-serif"],
      Libre: ["Libre Baskerville", 'serif'],
      Caveat: ["Caveat Brush", 'cursive'],
    },
    // screens: {
    //   sm: "1440px",
    //   "2xl": "1536px",
    //   "3xl": "1921px",
    // },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.25rem",
        md: "2rem",
        lg: "2rem",
        xl: "2.5rem",
      },
    },
    // **********  Color  *************
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      whiteAlt: "#fdfdfd",
      black: "#1A1A1A",
      primary: "#5607D3",
      gray: "#546881",
      red: "#DA1B12",
      orange: "#FE8500",
      "card-color": "#FFF3E6",
      "card-color-alt": "#FBE8E7",
      "card-color-sky": "#E6F0FF",
      "subtitle-color": "#F4B8B6",
      "stroke-color": "#EBEEF2",
    },

    // **********  Extend  *************

    extend: {
      backgroundImage: {
        "title-gradient": "linear-gradient(to right, orange 0%,  red 90%)",
        'hero': "url('/Assets/images/HeroBackground.svg')",
        'hero-alt': "url('/Assets/images/Why We Are Better.svg')",
        'newsletter': "url('/Assets/images/Get Instant Support From Us.png')",
        'footer-texture': "url('/img/footer-texture.png')",
        'custom-gradient': 'linear-gradient(90deg, rgba(218,27,18,1) 0%, rgba(254,133,0,1) 100%)',
      },
      backgroundSize: {
        'auto-500': 'auto 650px',
      },
      backgroundPosition: {
        bottom: 'bottom',
        leftCenter: ' 37% center',
      },
      borderImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(218,27,18,1) 0%, rgba(254,133,0,1) 100%)',
      },
      screens: {
        '3xl': '1921px',
      },
    },
  },

  // **********  Plugins  *************

  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        '.custom-checklist': {
          listStyleType: 'none',
          paddingLeft: '10px',
        },
        '.custom-checklist li::before': {
          content: '"\\2713"',
          marginRight: theme('spacing.2'),
          background: 'linear-gradient(90deg, rgba(218,27,18,1) 0%, rgba(254,133,0,1) 100%)',
          color: 'transparent', // makes the color transparent so gradient shows through
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text', // for Safari support
        },

        '.news-box::after': {
        content: 'url("/Assets/images/sm-Get Instant Support From Us.png")', // Default empty content
        position: 'absolute',
        top: '50%', // Center vertically
        left: '0', // Position right after .subtitle-box with a margin
        overflow: 'visible',
        visibility: 'visible', // Hidden by default
      },

      // Responsive Variants
      [`@screen md`]: {
        '.news-box::after': {
          content: 'url("/Assets/images/md-Get Instant Support From Us.png")', // Image for small screens
          left: '200px',

        },
      },
      [`@screen lg`]: {
        '.news-box::after': {
          content: 'url("/Assets/images/Get Instant Support From Us.png")', // Image for medium screens
          left: 'calc(100% + 0.1rem)',
          overflow: 'hidden', // Position right after .subtitle-box with a margin,
        },
      },
      });
    },
  ],
  darkMode: "media", //'media' or 'class'
};
