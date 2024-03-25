const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const commonConfig = require('../webpack.config.js');

const devConfig = merge(commonConfig, {
  mode: 'production',
  module: {
    rules: [],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
  ],
});

module.exports = devConfig;
