const webpack = require('webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env = {}, options) => {
  const platform = env.platform || 'web'; // web by default
  const isProduction = options.mode === 'production';
  const sourceMap = isProduction ? '' : 'inline-cheap-source-map';

  return {
    devtool: sourceMap,
    target: platform,
    entry: resolve(__dirname, 'demo/index.js'),
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
        template: resolve(__dirname, 'demo', 'index.html'),
      }),
      new webpack.NamedModulesPlugin(),
      new ExtractTextPlugin('styles.css'),
    ],
    devServer: {
      contentBase: './demo',
      hot: true,
    },
  };
};
