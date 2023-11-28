const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      blue: colors.blue,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
      slate: colors.slate,
      green: colors.green,
      sky: colors.sky,
      lime: colors.lime,
      pink: colors.pink,
      rose: colors.rose,
      primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
    },
    screens: {
      // s: { min: '374px' },
      // xs: { min: '512px'},
      // xxl: { min: '3000px'},
      // => @media (max-width: 374px) { ... }
      // => @media (min-width: 375px and max width: 575px ) { ... }
      // => @media (min-width: 576px and max width: 767px ) { ... }
      // md: { min: '768px', max: '1023px' },
      // // => @media (min-width: 768px and max width: 1023px ) { ... }
      // lg: { min: '1024px', max: '1279px' },
      // // => @media (min-width: 1024px and max-width: 1279px) { ... }
      // xl: { min: '1280px', max: '1535px' },
      // // => @media (min-width: 1280px and max-width: 1535px) { ... }
      // '2xl': { min: '1536px' },
      // // => @media (min-width: 1536px) { ... }
      ...defaultTheme.screens
    },
    extends: {},
    backgroundImage: {
      'login-img': "url('/src/assets/images/auths/Logins/bg-login-image.png')",
    }
  },
  plugins: []
};
