angular.module('jsonMart', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('shopping', {
    url: '/shopping',
    templateUrl: 'app/views/shopping/shoppingTmpl.html',
    controller: 'shoppingCtrl',
    resolve: {
      products: function(mainService) {
        return mainService.getProducts();
      },
    },
  }).state('admin', {
    url: '/admin',
    templateUrl: 'app/views/admin/adminTmpl.html',
    controller: 'adminCtrl',
  }).state('user', {
    url: '/user/:id',
    templateUrl: 'app/views/user/userTmpl.html',
    controller: 'userCtrl',
  });

  $urlRouterProvider.otherwise('/shopping');

});
