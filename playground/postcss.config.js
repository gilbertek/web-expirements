module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: ['last 2 versions'],
      compress: true
    }),
    require('postcss-import')(),
    require('postcss-url')(),
    require('postcss-cssnext')()
  ],
};
