const { resolve } = require('path');
const webpack = require('webpack');

const output = () => ({
  filename: '[name].js',
  path: resolve(__dirname, 'build'),
  publicPath: '/',
  libraryTarget: 'umd'
});

const externals = () => ({
  react: 'react',
  'prop-types': 'prop-types'
});

const jsLoader = () => ({
  test: /\.js$/,
  include: resolve(__dirname, 'src'),
  exclude: ['node_modules', 'public'],
  use: 'babel-loader'
});

const plugins = () => [
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': 'production'
  }),
  new webpack.optimize.ModuleConcatenationPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      comparisons: false
    },
    output: {
      comments: false,
      ascii_only: true
    }
  })
];

module.exports = {
  entry: resolve(__dirname, 'src/index.js'),
  output: output(),
  target: 'web',
  externals: externals(),
  module: {
    rules: [jsLoader()]
  },
  plugins: plugins()
};
