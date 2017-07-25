const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
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
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: [ 'react', 'es2015', 'stage-0' ],
          plugins: [
            [ 'transform-runtime' ],
            [ 'import', { libraryName: 'antd', style: 'css' }],
          ],
        },
      }, {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader?limit=100000',
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
    extensions: [ '', '.js', '.jsx', '.ts', '.html', '.json' ],
  },
  plugins: [
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
