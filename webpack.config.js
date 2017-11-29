/* eslint-env node */
const autoprefixer = require('autoprefixer');
const CompressionPlugin = require('compression-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SystemBellPlugin = require('system-bell-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const env=process.env.NODE_ENV;
const isProd = (env.toLowerCase().trim() === 'production')? true: false;
const vendor = [
      'react',
      'react-dom',
      'react-router-dom',
      'prop-types',
      'redux',
      'react-redux',
      'redux-thunk',
      'axios',
      'babel-polyfill',
      'browser-detect'
      ];
// Configuration object
const config = {
  devtool: isProd ? 'source-map' : 'source-map',
  entry: ['babel-polyfill','./src/index'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isProd ? '[name].[chunkhash].js' : 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
  },
  target: 'web',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css|scss|sass)$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          }, {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins() {
                return [autoprefixer('last 2 versions', 'ie 10')];
              },
            },
          }, {
            loader: 'sass-loader',
            options: { sourceMap: true },
          }],
        }),
      },
      { test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader?name=assests/fonts/[name].[ext]' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader?mimetype=application/font-woff&name=assests/fonts/[name].[ext]' },
      { test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader?mimetype=application/octet-stream&name=assests/fonts/[name].[ext]' },
      { test: /\.svg(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader?mimetype=image/svg+xml&name=assests/fonts/[name].[ext]' },
      { test: /\.(jpe?g|png|gif|ico)$/i, loader: 'file-loader?name=assests/images/[name].[ext]' },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 8000,
    historyApiFallback: true,
    hot: true
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
      disable: !isProd,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new SystemBellPlugin(),
    new CopyWebpackPlugin( [{from:'src/web.config',to:'./'}])

  ],
};

if (isProd) {
  Array.prototype.push.apply(config.plugins, [
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      minChunks(module) {
        const { context } = module;
        if (typeof context !== 'string') {
          return false;
        }
        return context.indexOf('node_modules') !== -1;
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks(module, count) {
        return count >= 2;
      },
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|html)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      noInfo: true,
      options: {
        context: './',
      },
    }),
    new HtmlWebpackPlugin({
      title: 'KM Q&A',
      filename: 'index.html',
      template: './src/index.ejs',
      favicon: './src/favicon.ico',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]);
} else {
  config.entry.splice(1, 0, 'react-hot-loader/patch');
  Array.prototype.push.apply(config.plugins, [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      title: 'KM Q&A',
      filename: 'index.html',
      template: './src/index.ejs',
      inject: true,
      favicon: './src/favicon.ico',
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true,
      noInfo: false,
      options: {
        context: './',
      },
    }),
  ]);
}


module.exports = config;
