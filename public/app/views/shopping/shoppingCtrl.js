angular.module('jsonMart').controller('shoppingCtrl', function($scope, products, mainService) {
  $scope.products = products;
  $scope.addToCart = function(userId, productId) {
    mainService.addToCart(userId, productId);
  }
});
