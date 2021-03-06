var express = require('express');
var bodyParser = require('body-parser');
var insert = require('./src/insert');
var query = require('./src/query');
var failure = require('./src/failure');

var app = express();
app.use(bodyParser.json());
app.use('/insert', insert);
app.use('/query', query);

app.all(/.*/, function(req, res) {
  res.status(400).send(failure.route);
})

var server = app.listen(8080, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('listening at http://%s:%s', host, port);
});

module.exports = app;
