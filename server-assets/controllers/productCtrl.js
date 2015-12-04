var mongoose = require('mongoose'),
  Product = require('../models/product');

module.exports = {
  addProduct: function(req, res) {
    var newProduct = new Product(req.body);
    newProduct.save().then(function(doc) {
      return res.json(doc);
    }).catch(function(err) {
      return res.status(500).json(err);
    });
  },

  getProducts:  function(req, res) {
    Product.find(req.query).exec().then(function(docs) {
      return res.json(docs);
    }).catch(function(err) {
      return res.status(500).json(err);
    });
  },

  editProduct: function(req, res) {
    Product.findByIdAndUpdate(req.params.id, req.body, {new: true}).exec().then(function(doc) {
      return res.json(doc);
    }).catch(function(err) {
      return res.status(500).json(err);
    });
  },

  archiveProduct:  function(req, res) {
    Product.findById(req.params.id).exec().then(function(doc) {
      doc.status = 'archived';
      return doc.save().then(function(resu) {
        return res.json(resu);
      });
    }).catch(function(err) {
      return res.status(500).json(err);
    });
  },
};
