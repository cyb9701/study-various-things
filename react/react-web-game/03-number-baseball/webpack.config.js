const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  name: 'word-relay-setting',
  mode: 'development',
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.jsx', '...'],
  },
  entry: {
    app: [
      './client',
    ],
  },
  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 5% in KR'],
            },
          }],
          '@babel/preset-react'
        ],
        plugins: ['react-refresh/babel'],
      },
    }],
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },
  devServer: {
    devMiddleware: {
      publicPath: '/dist',
    },
    static: {
      directory: path.join(__dirname),
    },
    hot: true,
    port: 3000,
  }
}