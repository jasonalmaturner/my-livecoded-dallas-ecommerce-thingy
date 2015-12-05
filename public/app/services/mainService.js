// I might split this into two services

angular.module('jsonMart').service('mainService', function($http) {

  // Eventually, I'd build this function with a query
  this.getProducts = function(query) {
    return $http({
      method: 'GET',
      url: 'api/products',
    }).then(function(res) {
      return res.data;
    });
  };

  this.addToCart = function(userId, productId) {
    return $http({
      method: 'POST',
      url: '/api/products/' + userId,
      data: {
        product: productId,
      },
    }).then(function(res) {
      return res.data;
    });
  };

  this.getUser = function(id) {
    return $http({
      method: 'GET',
      url: 'api/user?_id=' + id,
    }).then(function(res) {
      return res.data;
    });
  };

  this.getUsers = function() {
    return $http({
      method: 'GET',
      url: 'api/user',
    }).then(function(res) {
      return res.data;
    });
  };

});
