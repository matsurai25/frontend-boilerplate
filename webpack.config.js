// UglifyJsPluginなどのプラグインを利用するためにwebpackを読み込んでおく必要がある。
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
const path = require('path');

module.exports = {
  // エントリーポイントの設定
  entry: './src/js/app.jsx',
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: 'bundle.js',
    // 出力先のパス（v2系以降は絶対パスを指定する必要がある）
    path: path.join(__dirname, 'public')
  },
  // ローダーの設定
  module: {
    rules: [{
      // ローダーの処理対象ファイル
      test: /\.jsx$/,
      // ローダーの処理対象から外すディレクトリ
      exclude: /node_modules/,
      use: [{
        // 利用するローダー
        loader: 'babel-loader',
        // ローダーのオプション
        options: {
          presets: [
            'env',
            'react'
          ]
        }
      }],
    }, {
      test: /\.pug$/,
      exclude: /node_modules/,
      loader: 'pug-loader',
    }, {
      test: /\.scss$/,
      use: ["style-loader", "css-loader?modules", "sass-loader"]
    }, {
      test: /\.(png|woff|woff2|eot|ttf|otf|svg)$/, loader: 'url-loader?limit=100000'
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }],
  },
  // プラグインの設定
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
      template: 'src/index.pug'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        // console.log（）などのconsole.*系の記述を取り除いて出力する
        drop_console: true
      },
    }),
    new webpack.ProvidePlugin({
      $: 'jquery'
    }),
  ],
  devtool: 'inline-source-map'
};
