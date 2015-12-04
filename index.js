// variable declarations
var express = require('express'),
  app = express(),
  port = 9001,
  cors = require('cors'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  monguUri = 'mongodb://localhost:27017/dallascommerce',
  middleware = require('./server-assets/middleware/header'),
  userCtrl = require('./server-assets/controllers/userCtrl'),
  productCtrl = require('./server-assets/controllers/productCtrl');
  orderCtrl = require('./server-assets/controllers/orderCtrl');

// Replacing mpromise with q
mongoose.Promise = require('q').Promise;

// middleware
app.use(cors(), bodyParser.json(), express.static(__dirname + '/public'), middleware.poop);

// user endpoints
app.post('/api/user', userCtrl.addUser);
app.get('/api/user', userCtrl.getUser);

// // cart endpoints
// app.put('/api/cart', userCtrl.editCart);

// product endpoints
app.post('/api/product', productCtrl.addProduct);
app.get('/api/products', productCtrl.getProducts);
app.put('/api/product/:id', productCtrl.editProduct);
app.delete('/api/product/:id', productCtrl.archiveProduct);

// // order endpoints
// app.post('/api/order', orderCtrl.addCart);

// Connecting shiz
app.listen(port, function() {
  console.log('listening on port: ', port);
});

mongoose.connect(monguUri);
mongoose.connection.once('open', function() {
  console.log('db connected');
});
