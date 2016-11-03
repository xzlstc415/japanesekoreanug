(function() {
  'use strict';

  var HeaderController = function($auth) {
    var vm = this;
    vm.loginWndOpen = false;

    // Auth.getCurrentUser().then(function(res) {
    //   vm.currentUser = res.data;
    // }).then(function(res) {
    //   vm.currentUser = null;
    // });

    var closeLoginModal = function() {
      vm.loginWndOpen = false;
    };

    var authenticate = function(provider) {
      $auth.authenticate(provider);
    };

    vm.closeLoginModal = closeLoginModal;
    vm.authenticate = authenticate;
  };

  HeaderController.$inject = ['$auth'];

  angular.module('yujihomo')
    .controller('HeaderController', HeaderController);
})();
