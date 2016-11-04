(function() {
  'use strict';

  var HeaderController = function($auth, toastr, User) {
    var vm = this;
    vm.loginWndOpen = false;
    vm.signupWndOpen = false;
    vm.currentUser = $auth.getPayload();

    var closeLoginModal = function() {
      vm.loginWndOpen = false;
    };

    var closeSignupModal = function() {
      vm.signupWndOpen = false;
    };

    var openLoginModal = function() {
      if (vm.signupWndOpen === false) {
        vm.loginWndOpen = true;
      }
    };

    var openSignupModal = function() {
      if (vm.loginWndOpen === false) {
        vm.signupWndOpen = true;
      }
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

    var signup = function(user) {
      User.signup(user).then(function(res) {
        closeSignupModal();
        toastr.success('You have signed up successfully!');
      }).catch(function(res) {
        toastr.error.apply(this, res.data.errors);
      });
    };

    vm.closeLoginModal = closeLoginModal;
    vm.closeSignupModal = closeSignupModal;
    vm.openLoginModal = openLoginModal;
    vm.openSignupModal = openSignupModal;
    vm.authenticate = authenticate;
    vm.login = login;
    vm.logout = logout;
    vm.signup = signup;
  };

  HeaderController.$inject = ['$auth', 'toastr', 'User'];

  angular.module('yujihomo')
    .controller('HeaderController', HeaderController);
})();
