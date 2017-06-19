const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  context: resolve(__dirname, 'src'),
  devtool: 'inline-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'src'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [ 'babel-loader' ],
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: [ 'style-loader', 'css-loader?modules', 'postcss-loader' ]
      },
      {
        test:   /\.(ttf|otf|eot|svg|woff)$/,
        loader: "url-loader",
        options:  {
          limit: 10000,
          name: "[name].[ext]",
          mimetype: 'application/x-font-woff'
        }
      }
    ],
  },
  devServer: {
    hot: true,
    overlay: false,
    historyApiFallback: true,
    inline: true,
    publicPath: '/',
    contentBase: resolve(__dirname, 'src')
  },
  plugins: [
    // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      // 'process.env': { NODE_ENV: JSON.stringify('production') }
      __DEV__: true
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src', 'index.html')
    })
  ]
};
