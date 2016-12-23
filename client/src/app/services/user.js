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

    var currentUser = function() {
      if ($auth.isAuthenticated()) {
        return $auth.getPayload();
      } 
    };

    vm.signup = signup;
    vm.currentUser = currentUser;

    return vm;
  };

  User.$inject = ['$http', '$auth'];

  angular.module('yujihomo')
    .service('User', User);
})();
