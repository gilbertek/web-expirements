const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (options = {}) => {
  const isProduction = options.mode === 'production';
  const sourceMap = isProduction ? '' : 'inline-cheap-source-map';

  return {
    devtool: sourceMap,
    target: 'web',
    entry: './src/app.js',
    output: {
      filename: '[name].bundle.js',
      path: resolve(__dirname, 'dist')
    },

    module: {
      rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.css$/,
          use: [{
              loader: 'style-loader'
            },
            {
              loader: 'css-loader'
            }
          ],
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [{
            loader: 'file-loader'
          }, ],
        },
      ]
    },
    devServer: {
      contentBase: './dist',
      open: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Webpack Output",
      }),
      new CleanWebpackPlugin()
    ],
  }
};
