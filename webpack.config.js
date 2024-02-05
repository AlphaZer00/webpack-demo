const path = require('path');
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Development',
      filename: 'index.html',
      inject: 'head',
      scriptLoading: 'defer',
    })
  ]
};