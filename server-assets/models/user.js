var mongoose = require('mongoose'),
  cartSchema = require('./cart');

var userSchema = new mongoose.Schema({
  name: { type: String, required: true, lowercase: true },
  cart: cartSchema,
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
});

module.exports = mongoose.model('User', userSchema);
