(function() {
  'use strict';

  var HeaderController = function($auth) {
    var vm = this;
    vm.loginWndOpen = false;
    vm.currentUser = $auth.getPayload();

    var closeLoginModal = function() {
      vm.loginWndOpen = false;
    };

    var authenticate = function(provider) {
      $auth.authenticate(provider)
        .then(function(res) {
          vm.currentUser = $auth.getPayload();
          closeLoginModal();
        })
        .catch(function(res) {
          console.log('something is wrong');
        });
    };

    var login = function(user) {
      $auth.login(user).then(function(res) {
        vm.currentUser = $auth.getPayload();
        closeLoginModal();
      }).catch(function(res) {
        console.log('something is wrong');
      });
    };

    var logout = function() {
      $auth.logout();
      vm.currentUser = null;
    };

    vm.closeLoginModal = closeLoginModal;
    vm.authenticate = authenticate;
    vm.login = login;
    vm.logout = logout;
  };

  HeaderController.$inject = ['$auth'];

  angular.module('yujihomo')
    .controller('HeaderController', HeaderController);
})();
