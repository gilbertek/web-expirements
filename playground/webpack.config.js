const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env = {}) => {
  // Variables set by npm scripts in package.json
  const platform = env.platform; // 'browser' by default
  const environment = env.environment;
  const isProduction = environment === 'production';

  /* eslint-disable no-console */
  console.log(`Running webpack in ${environment} mode on ${platform ? 'browser': 'server'}`);
  /* eslint-enable */

  return {
    context: resolve(__dirname, 'src'),
    devtool: 'inline-source-map',
    entry: [
      'react-hot-loader/patch',
      // 'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './index.js'
    ],
    output: {
      filename: 'bundle.js',
      path: resolve(__dirname, 'public'),
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
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              { loader: 'css-loader' },
              { loader: 'postcss-loader' },
            ]
          })
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [
            'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true
                },
                gifsicle: {
                  interlaced: false
                },
                optipng: {
                  optimizationLevel: 4
                },
                pngquant: {
                  quality: '75-90',
                  speed: 4
                }
              }
            }
          ]
        },
        {
          test:   /\.(ttf|otf|eot|svg|woff)$/,
          loader: 'url-loader',
          options:  {
            limit: 10000,
            name: '[name].[ext]',
            mimetype: 'application/x-font-woff'
          }
        }
      ],
    },
    resolve: {
      modules: [
        resolve(),
        'node_modules'
      ]
    },
    devServer: {
      hot: true,
      overlay: false,
      historyApiFallback: true,
      inline: true,
      publicPath: '/',
      contentBase: resolve(__dirname, 'public'),
      disableHostCheck: true,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    },
    plugins: [
      // enable HMR globally
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.DefinePlugin({
        ENVIRONMENT: JSON.stringify(environment),
        PLATFORM:    JSON.stringify(platform)
      }),
      new HtmlWebpackPlugin({
        template: resolve(__dirname, 'src', 'index.html')
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: false,
        debug: true,
        noInfo: true, // set to false to see a list of every file being bundled.
        options: {
          sassLoader: {
            includePaths: [resolve(__dirname, 'src', 'scss')]
          },
          context: '/',
        }
      }),
      new ExtractTextPlugin('css/app.css'),
      new webpack.optimize.UglifyJsPlugin({
        compress: isProduction,
      }),
      new webpack.ProvidePlugin({
        React: 'react',
        ReactDOM: 'react-dom',
        PropTypes: 'props-types',
        Immutable: 'immutable',
        I: 'immutable'
      })
    ]
  };
};
