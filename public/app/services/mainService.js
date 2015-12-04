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

});
