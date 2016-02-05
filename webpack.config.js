var webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client',
    __dirname + '/src/index.js'
  ],
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: __dirname + "/target/index.js",
    filename: "bundle.js",
    publicPath: "http://localhost:9090/build/"
  },
  resolve: {
    extensions: ['', '.js', '.json']
  },
  module: {
    loaders: [{
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};