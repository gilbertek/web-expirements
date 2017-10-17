const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const output = () => ({
  filename: '[name].js',
  path: resolve(__dirname, 'src'),
  publicPath: '/',
});

const jsLoader = () => ({
  test: /\.jsx?$/,
  exclude: /node_modules/,
  use: 'babel-loader',
});

const scssLoader = () => ({
  test: /\.s?css$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      { loader: 'css-loader' },
      {
        loader: 'postcss-loader',
      },
    ],
  }),
});

const imgLoader = () => ({
  test: /\.(jpe?g|png|gif|svg)$/i,
  use: [
    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
    {
      loader: 'image-webpack-loader',
      options: {
        mozjpeg: {
          progressive: true,
        },
        gifsicle: {
          interlaced: false,
        },
        optipng: {
          optimizationLevel: 4,
        },
        pngquant: {
          quality: '75-90',
          speed: 4,
        },
      },
    },
  ],
});

const fontLoader = (env = 'development') => ({
  test: /\.(ttf|otf|eot|svg|woff)$/,
  loader: 'url-loader',
  options: {
    limit: 10000,
    name: env === 'development' ? '[name].[ext]' : '[name].[hash:8].[ext]',
    mimetype: 'application/x-font-woff',
  },
});

const devServer = () => ({
  hot: true,
  overlay: false,
  historyApiFallback: true,
  inline: true,
  publicPath: '/',
  contentBase: resolve(__dirname, 'src'),
  disableHostCheck: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

const plugins = (env = 'development') =>
  [
    // enable HMR globally
    env === 'development' ? new webpack.HotModuleReplacementPlugin() : null,
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src', 'index.html'),
    }),
    new ExtractTextPlugin({ filename: '[name]-[hash].min.css' }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
      ENVIRONMENT: JSON.stringify(env),
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: env === 'production',
    }),
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
      PropTypes: 'props-types',
      rxjs: 'rxjs',
    }),
  ].filter(p => p !== null);

module.exports = (env = {}) => {
  // Variables set by npm scripts in package.json
  const platform = env.platform; // 'browser' by default
  const environment = env.environment;
  const isProduction = environment === 'production';

  /* eslint-disable no-console */
  console.log(
    `Running webpack in ${environment} mode, target: ${platform
      ? 'web'
      : 'server'}`
  );
  /* eslint-enable */

  return {
    context: resolve(__dirname, 'src'),
    devtool: isProduction ? '' : 'cheap-module-source-map',
    entry: {
      app: isProduction
        ? './index.js'
        : [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            './index.js',
          ],
      vendor: [
        'react',
        'react-dom',
        'prop-types',
        'react-router-dom',
        'redux',
        'react-redux',
      ],
    },
    output: output(),
    target: platform,
    devServer: devServer(),
    module: {
      rules: [jsLoader(), scssLoader(), imgLoader(), fontLoader(environment)],
    },
    resolve: {
      modules: [resolve(), 'src', 'node_modules'],
    },
    plugins: plugins(environment),
  };
};
