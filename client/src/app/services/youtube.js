(function() {

  var YoutubeVideo = function($http, API_URL) {
    var vm = this;

    var query = function(params) {
      var req = {
        method: 'GET',
        url: API_URL + '/api/youtube_videos',
        params: params
      };

      return $http(req);
    };

    var save = function() {
      req = {
        method: 'POST',
        url: API_URL + '/api/youtube_videos'
      };

      return $http(req);
    };

    var update = function(id, params) {
      var req = {
        method: 'PUT',
        url: API_URL + '/api/youtube_videos/' + id,
        data: params
      };

      return $http(req);
    };

    var autocomplete = function(keyParams) {
      var req = {
        method: 'GET',
        url: API_URL + '/api/youtube_videos/autocomplete',
        params: keyParams
      };

      return $http(req);
    };

    var accountStatus = function() {
      var req = {
        method: 'GET',
        url: API_URL + '/api/youtube_videos/status'
      };

      return $http(req);
    };

    vm.query = query;
    vm.save = save;
    vm.update = update;
    vm.autocomplete = autocomplete;
    vm.accountStatus = accountStatus;

    return vm;
  };

  YoutubeVideo.$inject = ['$http', 'API_URL'];

  angular.module('yujihomo')
    .service('YoutubeVideo', YoutubeVideo);
})();
