(function() {

  var Authorization = function($rootScope, $state, $auth) {
    var vm = this;

    var authorize = function(event) {
      var currentUser = $auth.getPayload();
      if ($rootScope.toState.data.roles && $rootScope.toState.data.roles.length &&
          (!currentUser || $rootScope.toState.data.roles.indexOf(currentUser.role) == -1)) {
            event.preventDefault();
            $state.go('unauthorized');
          }
    };

    vm.authorize = authorize;

    return vm;
  };

  Authorization.$inject = ['$rootScope', '$state', '$auth'];

  angular.module('yujihomo')
    .service('Authorization', Authorization);
})();
