/**
 * webpack은 모던 JavaScript 애플리케이션을 위한 "정적 모듈 번들러" 이다.
 * 간단하게 Webpack은 여러 파일을 하나 이상의 파일로 합쳐주는 자바스크립트 번들러이다.
 */

const path = require('path');

module.exports = {
  name: 'word-relay-setting',

  // 실 서비스: production.
  mode: 'development',
  devtool: 'inline-source-map',

  // 확장자 작성 시, entry에서 경로 작성할 때, 파일의 확장자를 작성하지 않아도 된다.
  resolve: {
    extensions: ['.jsx', '...'],
  },

  // 입력.
  entry: {
    app: [
      './client',
      // './WordRelay.jsx', -> client.jsx 에서 WordRelay를 불러오기 때문에 자동으로 불러온다.
    ],
  },

  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
      },
    }],
  },

  // 출력.
  output: {
    path: path.join(__dirname, 'dist'), // __dirname: 현재 폴더 경로.
    filename: 'app.js',
  },
}