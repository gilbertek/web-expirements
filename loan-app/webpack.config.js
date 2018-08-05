const { resolve } = require('path');
const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env = {}, options) => {
  const platform = env.platform || 'web'; // web by default
  const isProduction = options.mode === 'production';
  const sourceMap = isProduction ? '' : 'inline-cheap-source-map';

	return {
    context: resolve(__dirname, 'src'),
    target: platform,
    devtool: sourceMap,
    entry: { app: './index.tsx' },
    output: {
      path: resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: isProduction
        ? '[name][chunkhash].bundle.js'
        : '[name].bundle.js'
    },
    resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
      rules: [
        // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
        {
          test: /\.tsx?$/,
          loader: "awesome-typescript-loader"
        },
        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        {
          enforce: "pre",
          test: /\.js$/,
          loader: "source-map-loader"
        }
      ]
    }
  };
};
