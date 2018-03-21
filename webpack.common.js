const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './frontend/index'],
  module: {
    rules: [
      { test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.s?css$/, loader: 'style-loader!css-loader!sass-loader' }
    ]
  },
  resolve: {
    extensions: ['.js', '.scss']
  },
  output: {
    path: path.join(__dirname, '/public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [new webpack.optimize.OccurrenceOrderPlugin()]
};
