import {join} from 'path'
import {HotModuleReplacementPlugin} from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const SRC_PATH = join(__dirname, '/src')
const APP_PATH = join(__dirname, '/demo')

export default {
  context: APP_PATH,
  entry: './',
  output: {
    path: join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: 'http://localhost:3000/dist'
  },
  resolve: {
    alias: {
      'bob': SRC_PATH
    },
    extensions: ['', '.js', '.scss']
  },
  module: {
    loaders: [{
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass'],
      include: [APP_PATH, SRC_PATH]
    }, {
      test: /\.js$/,
      loaders: ['babel'],
      include: [APP_PATH, SRC_PATH]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: APP_PATH,
    port: 8080,
    historyApiFallback: true,
    stats: { colors: true },
    inline: true,
    publicPath: '/dist/'
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin()
  ]
}
