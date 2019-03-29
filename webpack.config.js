const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: __dirname + '/client/index.jsx',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ],
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  mode: 'development'


};