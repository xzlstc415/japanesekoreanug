(function() {

  var AuthTokenFactory = function($window) {
    var vm = this;
    var store = $window.localStorage;
    var key = 'auth-token';

    var getToken = function() {
      return store.getItem(key);
    };

    var setToken = function(token) {
      if (token) {
        store.setItem(key, token);
      } else {
        store.removeItem(key);
      }
    };

    return vm;
  };

  AuthTokenFactory.$inject = ['$window'];

  angular.module('yujihomo')
    .service('AuthTokenFactory', AuthTokenFactory);
})();
