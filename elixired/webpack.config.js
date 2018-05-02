const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = (env = {}, options) => {
  const platform = env.platform || 'web'; // web by default
  const isProduction = options.mode === 'production';
  const sourceMap = isProduction ? '' : 'inline-cheap-source-map';

  return {
    context: resolve(__dirname, 'src'),
    target: platform,
    devtool: sourceMap,
    entry: ['./index.js'],
    output: {
      path: resolve(__dirname, 'src'),
      publicPath: '/',
      filename: isProduction
        ? '[name][chunkhash].bundle.js'
        : '[name].bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: ['babel-loader'],
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [{ loader: 'css-loader' }, { loader: 'sass-loader' }]
          })
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: { minimize: true }
            }
          ]
        },
        {
          test: /\.png$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                mimetype: 'image/png'
              }
            }
          ]
        },
        {
          test: /\.svg$/,
          use: ['file-loader']
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader']
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ['file-loader']
        }
      ]
    },
    resolve: {
      modules: [resolve(), 'node_modules'],
      extensions: ['.js', '.jsx', '.json', '.css', 'scss']
    },
    optimization: {
      namedModules: true,
      splitChunks: {
        name: 'vendor',
        minChunks: 2
      }
    },
    devServer: {
      hot: true,
      overlay: false,
      historyApiFallback: true,
      inline: true,
      publicPath: '/',
      contentBase: resolve(__dirname, 'src'),
      disableHostCheck: true
    },
    plugins: [
      // enable HMR globally
      options.mode === 'development'
        ? new webpack.HotModuleReplacementPlugin()
        : () => {},
      new webpack.NamedModulesPlugin(),
      new HtmlWebpackPlugin({
        template: resolve(__dirname, 'src', 'index.html')
      }),
      new ExtractTextPlugin('css/app.css'),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new webpack.ProvidePlugin({
        React: 'react',
        ReactDOM: 'react-dom',
        PropTypes: 'props-types'
      }),
      new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
      new LodashModuleReplacementPlugin(),
      isProduction ? new UglifyJSPlugin() : () => {}
    ]
  };
};
