// webpack.dev.config.js
const webpack = require('webpack');
const { merge } = require('webpack-merge');

const commonConfig = require('../webpack.config.js');

const devConfig = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [],
  },
  devServer: {
    historyApiFallback: true, // will redirect 404s to /index.html.
    hot: true,
    // open: true,
    liveReload: true,
    port: 8000,
  },
});

module.exports = devConfig;
