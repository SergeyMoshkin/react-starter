var path = require('path');
var webpack = require('webpack');
var NODE_ENV = process.env.NODE_ENV;
var PROD = 'production';
var DEV = 'development';
var isProd = NODE_ENV === PROD;

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        exclude: /\.useable\.css$/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      },
      {
        test: /\.useable\.css$/,
        loader: 'style/useable!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      },
      {
        test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
        loader: 'url?name=[path][name].[ext]&limit=4096'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

if(isProd){
}
