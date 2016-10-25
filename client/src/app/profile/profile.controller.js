(function() {
  'use strict';

  var ProfileController = function(currentUser) {
    var vm = this;

    vm.currentUser = currentUser.data;
  };

  ProfileController.$inject = ['currentUser'];

  angular.module('yujihomo')
    .controller('ProfileController', ProfileController);
})();
