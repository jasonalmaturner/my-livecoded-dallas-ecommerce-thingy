var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
  status: { type: String, enum: ['placed', 'backordered', 'shipped', 'fulfilled'], default: 'placed'},
  products: [{
    name: { type: String },
    productId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Product' },
    quantity: { type: Number, default: 1, min: 1, required: true },
    price: { type: Number, min: 0, required: true },
  }],
  total: { type: Number, default: 0, min: 0 },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true },
});

// Handle product inventory in here at some point;
orderSchema.pre('save', function(next) {
  var total = 0;
  console.log(1111, this);
  for (var i = 0; i < this.products.length; i++) {
    total += (this.products[i].price * this.products[i].quantity);
  }

  this.total = total;
  next();
});

module.exports = mongoose.model('Order', orderSchema);
