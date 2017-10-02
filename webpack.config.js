const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
     { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
     { test: /\.css$/, use: [{ loader: 'style-loader' }, { loader: 'css-loader' }] },
   ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
    // new UglifyJSPlugin()
  ]
}

module.exports = config