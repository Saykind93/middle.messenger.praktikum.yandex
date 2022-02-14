module.exports = {
  plugins: [
      require('precss')({/* ...options */}),
      require('autoprefixer')({/* ...options */}),
      require('postcss-import')({/* ...options */}),
      require('postcss-nested')({/* ...options */}),
      require('postcss-url')({/* ...options */}),
      require('postcss-custom-properties')({/* ...options */}),
  ]
} 
