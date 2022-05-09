const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
mode:'',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Be Vietnam Pro',
          ...defaultTheme.fontFamily.sans,
        ],
        fancy: ['Overpass'],
      },
      colors: {
        'higia-colortext': '#0B573B',
        'higia-buttons':'#01402E',
        'higia-buttons2':'#02733E',
        'higia-light':'#38F29B',
        'testv-text': '#9d0208',
        'higia-border':'#4BDDA8',
        'higia-colortext2': '#34735C',
        'higia-colortext3': '#09D68B',
      }
    },
  
  },
  variants: {
    extend: {},
  },plugins: [
    require( 'tailwindcss' ),	
    require('@tailwindcss/forms'),	
  require( 'postcss' ),		
  require( 'autoprefixer' ),
 require('flowbite/plugin')],
 content: [
  "./node_modules/flowbite/**/*.js"
],
}
