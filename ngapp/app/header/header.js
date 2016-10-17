(function() {
  'use strict';

  var headerCtrl = function(User) {
    var vm = this;

    User.getCurrentUser().then(function(res) {
      vm.currentUser = res.data;
    });
  };

  headerCtrl.$inject = ['User'];

  angular.module('yujihomo')
    .controller('headerCtrl', headerCtrl);
})();
