(function() {

  var Authorization = function($rootScope, $state, $auth) {
    var vm = this;

    var authorize = function(event) {
      var currentUser = $auth.getPayload();
      switch($rootScope.toState.name) {
        case 'youtube':
          if (!(currentUser && currentUser.role == 'admin')) {
            event.preventDefault();
            $state.go('unauthorized');
          }
          break;
        case 'profile':
          if (!currentUser) {
            event.preventDefault();
            $state.go('unauthorized');
          }
          break;
      }
    };

    vm.authorize = authorize;

    return vm;
  };

  Authorization.$inject = ['$rootScope', '$state', '$auth'];

  angular.module('yujihomo')
    .service('Authorization', Authorization);
})();
