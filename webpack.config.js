const path = require('path');
const webpack = require('webpack');
let FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfigIndex = new HtmlWebpackPlugin({
  title: 'Viraj Chitnis',
  template: './src/App/html/index.ejs',
  filename: 'index.html',
  inject: 'body'
});
const HtmlWebpackPluginConfigResume = new HtmlWebpackPlugin({
  title: 'Resumé - Viraj Chitnis',
  template: './src/App/html/index.ejs',
  filename: 'resume.html',
  inject: 'body'
});
const HtmlWebpackPluginConfigApps = new HtmlWebpackPlugin({
  title: 'Apps - Viraj Chitnis',
  template: './src/App/html/index.ejs',
  filename: 'apps.html',
  inject: 'body'
});
const HtmlWebpackPluginConfigWinery = new HtmlWebpackPlugin({
  title: 'Winery - Viraj Chitnis',
  template: './src/App/html/index.ejs',
  filename: 'winery.html',
  inject: 'body'
});
const HtmlWebpackPluginConfigCredits = new HtmlWebpackPlugin({
  title: 'Credits - Viraj Chitnis',
  template: './src/App/html/index.ejs',
  filename: 'credits.html',
  inject: 'body'
});
const HtmlWebpackPluginConfigError = new HtmlWebpackPlugin({
  title: 'Error - Viraj Chitnis',
  template: './src/App/html/index.ejs',
  filename: 'error.html',
  inject: 'body'
});
const HtmlWebpackPluginConfigError50x = new HtmlWebpackPlugin({
  title: 'Error - Viraj Chitnis',
  template: './src/App/html/error50x.ejs',
  filename: 'error50x.html',
  inject: false
});

module.exports = {
  entry: './src/App/index.jsx',
  output: {
    path: path.resolve('public'),
    filename: 'bundle.[hash].js'
  },
  plugins: [
    new FaviconsWebpackPlugin('./src/App/favicon.png'),
    HtmlWebpackPluginConfigIndex,
    HtmlWebpackPluginConfigResume,
    HtmlWebpackPluginConfigApps,
    HtmlWebpackPluginConfigWinery,
    HtmlWebpackPluginConfigCredits,
    HtmlWebpackPluginConfigError,
    HtmlWebpackPluginConfigError50x
  ],
  module: {
    loaders: [
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: './images/[name].[hash].[ext]',
        }
      },
      {
        test: /\.(jsx|js)$/,
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
