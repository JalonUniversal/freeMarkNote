const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: '[name]-[contenthash:8].js',
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        use: 'babel-loader'
      },
      {
        test: /\.(sa|sc|le|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'postcss-loader',
          // 当解析antd.less，必须写成下面格式，否则会报Inline JavaScript is not enabled错误
          {
            loader: "less-loader",
            options: {
              lessOptions: { javascriptEnabled: true }
            }
          },
        ]
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        type: 'asset/inline'
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: "fonts/[hash][ext][query]"
        },
      }
    ]
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    mainFiles: ["index", "main"],
  },
  plugins: [
    new ProgressBarPlugin({
      format: `  :msg [:bar] [:percent] (:elapsed s)`
    }),
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, "./public/index.html"),
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css'
    }),
  ],
  devServer: {
    historyApiFallback: true,
    open: true,
    hot: true,
    compress: true,
    port: 8000,
  }
}