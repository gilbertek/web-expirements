const webpack = require('webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env = {}, options) => {
  const platform = env.platform || 'web'; // web by default
  const isProduction = options.mode === 'production';
  const sourceMap = isProduction ? '' : 'inline-cheap-source-map';

  return {
    context: resolve(__dirname, 'src'),
    devtool: sourceMap,
    target: platform,
    entry: {
      app: [resolve(__dirname, 'src/index.js')],
      vendor: ['react', 'react-dom', 'prop-types'],
    },
    output: {
      path: resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: isProduction
        ? '[name][chunkhash].bundle.js'
        : '[name].bundle.js',
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
      extensions: ['.js', '.jsx', '.json', '.css', 'scss'],
    },
    optimization: {
      namedModules: true,
      splitChunks: {
        name: 'vendor',
        minChunks: 2,
      },
    },
    plugins: [
      options.mode === 'development'
        ? new webpack.HotModuleReplacementPlugin()
        : () => {},
      new HtmlWebpackPlugin({
        template: resolve(__dirname, 'src', 'index.html'),
      }),
      new webpack.NamedModulesPlugin(),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new ExtractTextPlugin('styles.css'),
    ],
    devServer: {
      contentBase: './dist',
      hot: true,
    },
  };
};
