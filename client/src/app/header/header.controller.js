(function() {
  'use strict';

  var HeaderController = function(Auth) {
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

    vm.closeLoginModal = closeLoginModal;
  };

  HeaderController.$inject = ['Auth'];

  angular.module('yujihomo')
    .controller('HeaderController', HeaderController);
})();
