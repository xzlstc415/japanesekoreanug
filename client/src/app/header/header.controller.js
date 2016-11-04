(function() {
  'use strict';

  var HeaderController = function($auth, toastr) {
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
          toastr.success('You have logged in successfully!');
        })
        .catch(function() {
          toastr.error('Sorry we cannot connect to twitch :(')
        });
    };

    var login = function(user) {
      $auth.login(user).then(function(res) {
        vm.currentUser = $auth.getPayload();
        closeLoginModal();
        toastr.success('You have logged in successfully!');
      }).catch(function() {
        toastr.error('Sorry we cannot connect to twitch :(')
      });
    };

    var logout = function() {
      $auth.logout();
      vm.currentUser = null;
      toastr.success('You have logged out successfully!');
    };

    var signup = function() {

    };

    vm.closeLoginModal = closeLoginModal;
    vm.authenticate = authenticate;
    vm.login = login;
    vm.logout = logout;
    vm.signup = signup;
  };

  HeaderController.$inject = ['$auth', 'toastr'];

  angular.module('yujihomo')
    .controller('HeaderController', HeaderController);
})();
