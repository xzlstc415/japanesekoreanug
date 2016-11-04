(function() {

  var Auth = function($http) {
    var vm = this;

    var getCurrentUser = function() {
      return $http.get('/auth/me');
    };

    vm.getCurrentUser = getCurrentUser;

    return vm;
  };

  Auth.$inject = ['$http'];

  angular.module('yujihomo')
    .service('Auth', Auth);
})();
