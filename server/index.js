var port = process.env.PORT || 3010;

var app = require('express')();
var webpack = require('webpack');
var webpackConfig = require('../webpack.config');
var compiler = webpack(webpackConfig);
var path = require('path');
var setup = require('./middleware')(app, compiler, webpackConfig);

// webpack file middleware
app.get('*', function (req, res) {
  res.sendFile(path.join(compiler.context, 'index.html'))
});

app.listen(port, function (err) {
  console.log('Listening at http://localhost:' + port + '/')
});














