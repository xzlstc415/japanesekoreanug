(function() {

  var User = function($http, $auth) {
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

  User.$inject = ['$http', '$auth'];

  angular.module('yujihomo')
    .service('User', User);
})();
