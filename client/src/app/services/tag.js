(function() {

  var Tag = function($http) {
    var vm = this;

    var query = function() {
      var req = {
        method: 'GET',
        url: '/api/tags'
      };

      return $http(req);
    };

    var get = function(id) {
      var req = {
        method: 'GET',
        url: '/api/tags/' + id
      };

      return $http(req);
    };

    vm.query = query;
    vm.get = get;

    return vm;
  };

  Tag.$inject = ['$http'];

  angular.module('yujihomo')
    .service('Tag', Tag);
})();
