(function() {
  'use strict';

  var headerCtrl = function(Auth) {
    var vm = this;

    Auth.getCurrentUser().then(function(res) {
      vm.currentUser = res.data;
    });
  };

  headerCtrl.$inject = ['Auth'];

  angular.module('yujihomo')
    .controller('headerCtrl', headerCtrl);
})();
