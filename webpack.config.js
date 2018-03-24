const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const isDevServer = process.argv.find(v => v.includes('webpack-dev-server'));

const common = {
  //common
  entry: ['./frontend/index'],
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
if (isDevServer) {
  //dev
  module.exports = merge(common, {
    devtool: 'cheap-eval-source-map',
    devServer: {
      contentBase: './public',
      hot: true,
      inline: true,
      port: 3000,
      proxy: {
        '/api': {
          target: 'http://localhost:8080',
          secure: false
        },
        '/': {
          target: 'http://localhost:8080',
          secure: false
        }
      }
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ]
  });
} else {
  //production
  module.exports = merge(common, {
    entry: ['babel-polyfill'],
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  });
}
