var User = require('../models/user');

module.exports = {
  addItem: function(req, res) {
    User.findById(req.params.id).exec().then(function(user) {
      var items = user.cart.items;
      console.log(111, items);
      var flag = true;
      for (var i = 0; i < items.length; i++) {
        if (req.body.product === items[i].product.toString()) {
          items[i].quantity++;
          flag = false;
        }
      }

      if (flag) {
        items.push(req.body);
      }

      return user.save().then(function(resu) {
        return res.json(resu);
      });
    }).catch(function(err) {
      return res.status(500).json(err);
    });
  },

  editCart: function(req, res) {
    User.findById(req.params.id).exec().then(function(user) {
      user.cart = req.body;
      var items = user.cart.items;
      for (var i = 0; i < items.length; i++) {
        if (items[i].quantity === 0) {
          items.splice(i, 1);
          i--;
        }
      }

      return user.save().then(function(resu) {
        return res.json(resu);
      });
    }).catch(function(err) {
      return res.status(500).json(err);
    });
  },

  removeItem: function(req, res) {
    User.findById(req.params.id).exec().then(function(user) {
      var items = user.cart.items;
      for (var i = 0; i < items.length; i++) {
        if (req.body.item === items[i].product.toString()) {
          items.splice(i, 1);
          i--;
        }
      }

      return user.save().then(function(resu) {
        return res.json(resu);
      });
    }).catch(function(err) {
      return res.status(500).json(err);
    });
  },
};
