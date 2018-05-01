const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  resolve: {
    extensions: [' ', '.js', '.json', '.vue', '.css'],
    alias: {
      component: path.resolve(__dirname, 'src/component'),
      common: path.resolve(__dirname, 'src/common'),
      api: path.resolve(__dirname, 'src/api'),
      base: path.resolve(__dirname, 'src/base'),
      main: path.resolve(__dirname, 'src/main'),
      store: path.resolve(__dirname, 'src/store'),
      hoc: path.resolve(__dirname, 'src/hoc')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'stage-1'],
            plugins: ['syntax-dynamic-import']
          }
        }
      },
      {
        test: /\.css$/,

        use: [
          process.env.NODE_ENV === 'development' ? 'vue-style-loader'
            : MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            preserveWhitespace: true
          }
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'static/img/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    // new ExtractTextPlugin("css/[name].css"),
    new VueLoaderPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 1069,
    historyApiFallback: true,
    hot: true,
    proxy: {
      '/user/': {
        target: 'http://www.idanmu.cc'
      },
      '/article/': {
        target: 'http://www.idanmu.cc'
      },
      '/option/': {
        target: 'http://www.idanmu.cc'
      }
    }
  }
}