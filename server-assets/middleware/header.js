module.exports = {
  poop: function(req, res, next) {
    res.set({'jacob eats poop': true});
    next();
  },
};
