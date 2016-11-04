(function() {

  var User = function($http) {
    var vm = this;

    var signup = function(user) {
      var req = {
        method: 'POST',
        url: '/auth/users',
        data: user
      };

      return $http(req);
    };

    vm.signup = signup;

    return vm;
  };

  User.$inject = ['$http'];

  angular.module('yujihomo')
    .service('User', User);
})();
