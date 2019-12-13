const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
const path = require('path')

module.exports = {
  mode: 'development',
  // エントリーポイントの設定
  entry: './src/index.ts',
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: 'js/bundle.js',
    // 出力先のパス（v2系以降は絶対パスを指定する必要がある）
    path: path.join(__dirname, 'public'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        // 拡張子 .ts もしくは .tsx の場合
        test: /\.tsx?$/,
        // TypeScript をコンパイルする
        use: 'ts-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: 'url-loader?limit=100000'
      },
      {
        test: /\.(jpg|jpeg|png)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images'
        }
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/bundle.css'
    }),
    new HtmlWebpackPlugin()
  ],
  // import 文で .ts や .tsx ファイルを解決するため
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  }
}
