const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const marked = require("marked");
const renderer = new marked.Renderer();

module.exports = {
  entry: {
    index: './src/main.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-maps',
  devServer: {
    contentBase: './dist',
    port: 3035
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          'html-loader'
        ]
      },
      {
        test: /\.md$/,
        use: [
              {
                  loader: "html-loader"
              },
              {
                  loader: "markdown-loader",
                  options: {
                      pedantic: true,
                              renderer
                  }
              }
          ]
      },
      {
        test: /\.php$/,
        loaders: [
          'php-loader'
        ]
      },
      {
        test: /\.scss$|\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(mov|mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react', 'stage-2']
            }
          }
        ]
      }, 
      {
        test: /\.json$/,
        exclude: /(node_modules)/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
      // favicon: 'src/images/icon.png'
    }),
    new ExtractTextPlugin('styles.css')
  ]
}
