module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.antlers.php',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'cursive'],
      },
      backgroundImage: {
        'cafe': "url('/public/assets/sugarndiceshelf.webp')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
