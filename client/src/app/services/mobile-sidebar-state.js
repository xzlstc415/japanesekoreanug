(function() {

  var MobileSidebarState = function($rootScope) {
    var vm = this;

    var open = function() {
      $rootScope.mobileSidebarIsOpen = true;
    };

    var close = function() {
      $rootScope.mobileSidebarIsOpen = false;
    };

    vm.open = open;
    vm.close = close;

    return vm;
  };

  MobileSidebarState.$inject = ['$rootScope'];

  angular.module('yujihomo')
    .service('MobileSidebarState', MobileSidebarState);
})();
