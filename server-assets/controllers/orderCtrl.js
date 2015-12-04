var mongoose = require('mongoose'),
  Order = require('../models/order');

module.exports = {
  addCart: function(req, res) {
    newOrder = new Order(req.body);
    newOrder.save().then(function(order) {
      return res.json(order);
    }).catch(function(err) {
      return res.status(500).json(err);
    });
  },
};
