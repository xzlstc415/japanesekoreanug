(function() {
  'use strict';

  var HeaderController = function(Auth, $auth) {
    var vm = this;
    vm.loginWndOpen = false;

    Auth.getCurrentUser().then(function(res) {
      vm.currentUser = res.data;
    }).then(function(res) {
      vm.currentUser = null;
    });

    var closeLoginModal = function() {
      vm.loginWndOpen = false;
    };

    var loginWithTwitch = function() {
      $auth.authenticate('twitch').then(function(res) {
        console.log(res);
      });
    };

    vm.closeLoginModal = closeLoginModal;
    vm.loginWithTwitch = loginWithTwitch;
  };

  HeaderController.$inject = ['Auth', '$auth'];

  angular.module('yujihomo')
    .controller('HeaderController', HeaderController);
})();
