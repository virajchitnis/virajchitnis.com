const path = require('path');
const webpack = require('webpack');

const DEBUG = JSON.parse(process.env.DEBUG_ENV || '0');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/App/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: './src/App/index.jsx',
  output: {
    path: path.resolve('public'),
    filename: DEBUG ? 'bundle.js' : 'bundle.min.js'
  },
  plugins: DEBUG ? [
    HtmlWebpackPluginConfig
  ] : [
    HtmlWebpackPluginConfig,
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ],
  module: {
    loaders: [
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
        include: __dirname + '/src',
        options: {
          limit: 25000,
        },
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        include: __dirname + '/src'
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: __dirname + '/src'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 8000
  }
}
