// Disregard. Not using at the moment

var mongoose = require('mongoose');

var cartSchema = new mongoose.Schema({
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, default: 1, min: 0 },
  }],
  updated: { type: Date, default: Date.now },
});

cartSchema.pre('save', function(next) {
  this.updated = new Date();
  next();
});

module.exports = cartSchema;
