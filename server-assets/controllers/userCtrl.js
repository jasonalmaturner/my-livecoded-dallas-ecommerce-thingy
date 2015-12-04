var User = require('../models/user');

module.exports = {
  addUser: function(req, res) {
    newUser = new User(req.body);
    newUser.save().then(function(doc) {
      return res.json(doc);
    }).catch(function(err) {
      return res.status(500).json(err);
    });
  },

  getUser: function(req, res) {
    User.find(req.query).exec().then(function(docs) {
      return res.json(docs);
    }).catch(function(err) {
      return res.status(500).json(err);
    });
  },
};
