// variable declarations
var express = require('express'),
  app = express(),
  port = 9001,
  cors = require('cors'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  monguUri = 'mongodb://localhost:27017/dallascommerce',
  middleware = require('./server-assets/middleware/header');

// middleware
app.use(cors(), bodyParser.json(), express.static(__dirname + '/public'), middleware.poop);

// endpoints

app.listen(port, function() {
  console.log('listening on port: ', port);
});
mongoose.connect(monguUri);
mongoose.connection.once('open', function() {
  console.log('db connected');
});
