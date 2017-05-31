const path = require('path');
const webpack = require('webpack');
let FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');

const HtmlWebpackPluginConfigIndex = new HtmlWebpackPlugin({
  title: 'Viraj Chitnis',
  template: './src/App/index.ejs',
  filename: 'index.pug',
  filetype: 'pug',
  inject: 'body'
});

module.exports = {
  entry: './src/App/index.jsx',
  output: {
    path: path.resolve('public'),
    filename: 'bundle.[hash].js'
  },
  plugins: [
    new FaviconsWebpackPlugin('./src/favicon.png'),
    HtmlWebpackPluginConfigIndex,
    new HtmlWebpackPugPlugin()
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
