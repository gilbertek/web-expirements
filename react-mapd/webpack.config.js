const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env = {}, argv) => {
  return {
    context: resolve(__dirname, 'src'),
    devtool: argv.mode === 'production' ? '' : 'inline-cheap-source-map',
    entry: {
      app: ['react-hot-loader/patch', '../client/index.js'],
      vendor: [
        'react',
        'react-dom',
        'prop-types',
        'react-router-dom',
        'redux',
        'react-redux',
      ],
    },
    output: {
      path: resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: '[name].bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: ['babel-loader'],
          exclude: /node_modules/,
        },
        {
          test: /\.s?css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [{ loader: 'css-loader' }],
          }),
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: { minimize: true },
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader'],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ['file-loader'],
        },
      ],
    },
    resolve: {
      modules: ['node_modules', resolve(__dirname, 'src')],
      extensions: ['.js', '.jsx', '.json', '.css'],
    },
    optimization: {
      namedModules: true,
      splitChunks: {
        name: 'vendor',
        minChunks: 2,
      },
    },
    devServer: {
      contentBase: './dist',
      hot: true,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: '../client/index.html',
      }),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
  };
};
