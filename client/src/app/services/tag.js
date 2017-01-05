(function() {

  var Tag = function($http, API_URL) {
    var vm = this;

    var query = function() {
      var req = {
        method: 'GET',
        url: API_URL + '/api/tags'
      };

      return $http(req);
    };

    var get = function(id) {
      var req = {
        method: 'GET',
        url: API_URL + '/api/tags/' + id
      };

      return $http(req);
    };

    var save = function(params) {
      var req = {
        method: 'POST',
        url: API_URL + '/api/tags',
        data: params
      };

      return $http(req);
    };

    var autocomplete = function(keyParams) {
      var req = {
        method: 'GET',
        url: API_URL + '/api/tags/autocomplete',
        params: keyParams
      };

      return $http(req);
    };

    vm.query = query;
    vm.get = get;
    vm.save = save;
    vm.autocomplete = autocomplete;

    return vm;
  };

  Tag.$inject = ['$http', 'API_URL'];

  angular.module('yujihomo')
    .service('Tag', Tag);
})();
