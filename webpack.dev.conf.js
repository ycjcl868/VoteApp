const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:8899',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'app/web/app.jsx'),
  ],
  output: {
    path: path.resolve(__dirname, 'app/public'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|js)?$/,
        loader: 'react-hot-loader!babel-loader',
        exclude: /node_modules/,
      }, {
        test: /\.(png|jpg|jpeg|gif|woff|woff2)$/,
        loader: 'url-loader?limit=100000',
      }, {
        test: /\.svg$/,
        loader: 'svg-sprite-loader?runtimeCompat=true',
      }, {
        test: /(\.less)$/,
        loader: 'style!css!less',
      }, {
        test: /(\.css)$/,
        loader: 'style!css',
      }, {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=40000',
      }, {
        test: /\.json$/,
        loader: 'json',
      },
    ],
  },
  resolve: {
    extensions: [ '', '.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.json' ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'app/public'),
    hot: true,
    port: 8899,
    inline: true,
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, 'app/view/index.html'),
      inject: 'body',
      filename: 'index.html',
      hash: true,
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
};
