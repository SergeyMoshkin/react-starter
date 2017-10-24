const path = require('path');
const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV;

const PROD = 'production';
const DEV = 'development';
const isProd = NODE_ENV === PROD;

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
    rules: [
      {
        test: /\.js$/,
        use: ['react-hot-loader', 'babel-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        exclude: /\.useable\.css$/,
        use: [{
          'loader': 'style-loader'
        }, {
          'loader': 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        }]
      },
      {
        test: /\.useable\.css$/,
        use: [{
          'loader': 'style-loader/useable'
        }, {
          'loader': 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        }]
      },
      {
        test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
        use: 'url-loader?name=[path][name].[ext]&limit=4096-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

if(isProd){
}
