const path = require('path')

const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { DefinePlugin } = require('webpack')

const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  mode: 'development',
  stats: 'errors-only',
  entry: './main.js',
  output: {
    clean: true,
    publicPath: 'http://localhost:3020/',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.vue', '.ts', '.tsx', '.js']
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new DefinePlugin({
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false
    }),
    new ModuleFederationPlugin({
      name: 'component_app',
      filename: 'componentEntry.js',
      exposes: {
        './Federation': './src/components/Federation.vue'
      }
    })
  ]
}