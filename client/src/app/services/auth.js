(function() {

  var Auth = function($http, AuthToken) {
    var vm = this;

    var current_user = {
      name: "Yuji Ogasawara",
      email: "jkug@gmail.com",
      receive_email: true
    };

    var getCurrentUser = function() {
      return $http.get('/api/me');
    };

    var login = function(email, password) {
      return $http.post('/api/login', {
        email: email,
        password: password
      }).then(function (response) {
        AuthToken.setToken(response.data);
        return response;
      });
    };

    vm.getCurrentUser = getCurrentUser;
    vm.login = login;

    return vm;
  };

  Auth.$inject = ['$http', 'AuthToken'];

  angular.module('yujihomo')
    .service('Auth', Auth);
})();
