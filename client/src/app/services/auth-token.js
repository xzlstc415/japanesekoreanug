(function() {

  var AuthToken = function($window) {
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

  AuthToken.$inject = ['$window'];

  angular.module('yujihomo')
    .service('AuthToken', AuthToken);
})();
