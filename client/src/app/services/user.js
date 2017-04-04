(function() {

  var User = function($http, $auth, Upload, API_URL) {
    var vm = this;

    var signup = function(user) {
      var req = {
        method: 'POST',
        url: API_URL + '/auth/users',
        data: user
      };

      return $http(req);
    };

    var currentUser = function() {
      if ($auth.isAuthenticated()) {
        var currentUser = $auth.getPayload();
        return currentUser;
      }
    };

    var update = function(params, file) {
      return Upload.upload({
        url: API_URL + '/api/users',
        method: 'PUT',
        data: {
          user: {
            name: params.name,
            email: params.email,
            password: params.password,
            password_confirmation: params.password_confirmation,
            avatar: file
          }
        }
      });
    };

    vm.signup = signup;
    vm.currentUser = currentUser;
    vm.update = update;

    return vm;
  };

  User.$inject = ['$http', '$auth', 'Upload', 'API_URL'];

  angular.module('yujihomo')
    .service('User', User);
})();
