var port = process.env.PORT || 3010;

var app = require('express')();
var webpack = require('webpack');
var webpackConfig = require('../webpack.config');
var compiler = webpack(webpackConfig);
var path = require('path');
var setup = require('./middleware')(app, compiler, webpackConfig);

app.get('*', function(req, res, next) {
  if(req.get('Accept').indexOf('application/json') > -1){
    next();
  }
  else {
    res.sendFile(path.join(compiler.context, 'index.html'));
  }

});

app.get('/table', function(req, res) {
  res.json(
    {
      "@class": "table",
      cols: {
        id: "number",
        name: "string"
      }
    }
  );
});

app.listen(port, function (err) {
  console.log('Listening at http://localhost:' + port + '/')
});














