const { join } = require('path');

module.exports = {
  plugins: {
   'postcss-import': {},
   'tailwindcss/nesting': {},
   'postcss-nesting': {},
   tailwindcss: {  config: join(__dirname, 'tailwind.config.js'),},
   autoprefixer: {},
   'postcss-easy-import': { prefix: '_', extensions: ['.css', '.scss'] },
   'postcss-nested': {},
  
  }
}