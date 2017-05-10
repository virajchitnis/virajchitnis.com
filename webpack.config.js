const path = require('path');
const webpack = require('webpack');

const DEBUG = JSON.parse(process.env.DEBUG_ENV || '0');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfigIndex = new HtmlWebpackPlugin({
  title: 'Viraj Chitnis',
  template: './src/App/index.ejs',
  filename: 'index.html',
  inject: 'body'
});
const HtmlWebpackPluginConfigResume = new HtmlWebpackPlugin({
  title: 'Resumé - Viraj Chitnis',
  template: './src/App/index.ejs',
  filename: 'resume.html',
  inject: 'body'
});
const HtmlWebpackPluginConfigApps = new HtmlWebpackPlugin({
  title: 'Apps - Viraj Chitnis',
  template: './src/App/index.ejs',
  filename: 'apps.html',
  inject: 'body'
});
const HtmlWebpackPluginConfigWinery = new HtmlWebpackPlugin({
  title: 'Winery - Viraj Chitnis',
  template: './src/App/index.ejs',
  filename: 'winery.html',
  inject: 'body'
});
const HtmlWebpackPluginConfigCredits = new HtmlWebpackPlugin({
  title: 'Credits - Viraj Chitnis',
  template: './src/App/index.ejs',
  filename: 'credits.html',
  inject: 'body'
});
const HtmlWebpackPluginConfigError = new HtmlWebpackPlugin({
  title: 'Error - Viraj Chitnis',
  template: './src/App/index.ejs',
  filename: 'error.html',
  inject: 'body'
});

module.exports = {
  entry: './src/App/index.jsx',
  output: {
    path: path.resolve('public'),
    filename: DEBUG ? 'bundle.js' : 'bundle.min.js'
  },
  plugins: DEBUG ? [
    HtmlWebpackPluginConfigIndex,
    HtmlWebpackPluginConfigResume,
    HtmlWebpackPluginConfigApps,
    HtmlWebpackPluginConfigWinery,
    HtmlWebpackPluginConfigCredits,
    HtmlWebpackPluginConfigError
  ] : [
    HtmlWebpackPluginConfigIndex,
    HtmlWebpackPluginConfigResume,
    HtmlWebpackPluginConfigApps,
    HtmlWebpackPluginConfigWinery,
    HtmlWebpackPluginConfigCredits,
    HtmlWebpackPluginConfigError,
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
