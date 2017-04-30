(function() {

  var Episode = function($http, API_URL, Upload, $q) {
    var vm = this;
    var latestEpisodes = [];
    var popularEpisodes = [];

    var query = function(params) {
      var req = {
        method: 'GET',
        url: API_URL + '/api/episodes',
        params: params
      };

      return $http(req);
    };

    var queryLatestEpisodes = function() {
      var deferred = $q.defer();

      if (latestEpisodes.length > 0) {
        deferred.resolve({data: latestEpisodes})
      } else {
        query({latest: true})
          .then(function(res) {
            deferred.resolve(res);
            latestEpisodes = res.data;
          })
          .catch(function(res) {
            deferred.reject(res);
          })
      }

      return deferred.promise;
    }

    var queryPopularEpisodes = function() {
      debugger
      var deferred = $q.defer();

      if (popularEpisodes.length > 0) {
        deferred.resolve({data: popularEpisodes})
      } else {
        query({popular: true})
          .then(function(res) {
            deferred.resolve(res);
            popularEpisodes = res.data;
          })
          .catch(function(res) {
            deferred.reject(res);
          })
      }

      return deferred.promise;
    }

    var get = function(id) {
      var req = {
        method: 'GET',
        url: API_URL + '/api/episodes/' + id
      };

      return $http(req);
    };

    var save = function(params) {
      var req = {
        method: 'POST',
        url: API_URL + '/api/episodes',
        data: params
      };

      return Upload.upload(req);
    };

    var update = function(id, params) {
      var req = {
        method: 'PUT',
        url: API_URL + '/api/episodes/' + id,
        data: params
      };

      return Upload.upload(req);
    };

    vm.query = query;
    vm.get = get;
    vm.save = save;
    vm.update = update;
    vm.queryPopularEpisodes = queryPopularEpisodes;
    vm.queryLatestEpisodes = queryLatestEpisodes;

    return vm;
  };

  Episode.$inject = ['$http', 'API_URL', 'Upload', '$q'];

  angular.module('yujihomo')
    .service('Episode', Episode);
})();
