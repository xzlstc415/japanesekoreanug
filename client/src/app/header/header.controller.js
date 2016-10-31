(function() {
  'use strict';

  var HeaderController = function(Auth) {
    var vm = this;
    vm.loginWndOpen = true;

    Auth.getCurrentUser().then(function(res) {
      vm.currentUser = res.data;
    });
  };

  HeaderController.$inject = ['Auth'];

  angular.module('yujihomo')
    .controller('HeaderController', HeaderController);
})();
