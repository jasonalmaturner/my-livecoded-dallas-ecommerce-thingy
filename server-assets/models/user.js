var mongoose = require('mongoose'),
  cartSchema = require('./cart');

var userSchema = new mongoose.Schema({
  email: { type: String, required: true, lowercase: true },
  cart: cartSchema,
  orders: [{ type: mongoose.Schema.types.ObjectId, ref: 'Order', required: true }],
});

module.exports = mongoose.model('User', userSchema);
