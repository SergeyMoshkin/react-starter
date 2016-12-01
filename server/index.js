var port = process.env.PORT || 3010;

var app = require('express')();
var webpack = require('webpack');
var webpackConfig = require('../webpack.config');
var compiler = webpack(webpackConfig);
var path = require('path');
var setup = require('./middleware')(app, compiler, webpackConfig);

app.get('*', function (req, res, next) {
  if (req.get('Accept').indexOf('application/json') > -1) {
    next();
  }
  else {
    res.sendFile(path.join(compiler.context, 'index.html'));
  }

});

app.get('/table', function (req, res) {
  res.json(
    {
      "@class": "finch.community.model.Table",
      data: [
        {
          id: "1",
          name: "Bob"
        },
        {
          id: "2",
          name: "Pete"
        },
        {
          id: "3",
          name: "Ann"
        },
        {
          id: "4",
          name: "Etc"
        },
        {
          id: "5",
          name: "Etc"
        },
        {
          id: "6",
          name: "Etc"
        },
        {
          id: "7",
          name: "Etc"
        }
      ]
    }
  );
});

app.get('/row', function (req, res) {
  res.json(
    {
      "@class": "finch.community.model.Row",
      color: "red",
      highlight: "transparent"
    }
  );
});

app.listen(port, function (err) {
  console.log('Listening at http://localhost:' + port + '/')
});














