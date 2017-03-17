(function() {

  var loadashWrapper = function($window) {
    return $window._;
  };

  loadashWrapper.$inject = ['$window'];

  angular.module('yujihomo')
    .factory('_', loadashWrapper);
})();
