module.exports = function (app, compiler, webpackConfig) {

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    stats: 'errors-only',
    aggregateTimeout: 300,
    poll: 1000
  }));

  app.use(require("webpack-hot-middleware")(compiler));

};