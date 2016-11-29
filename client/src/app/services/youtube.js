(function() {

  var YoutubeVideo = function($http) {
    var vm = this;

    // var query = function(params) {
    //   var req = {
    //     method: 'GET',
    //     url: '/api/comments',
    //     params: params
    //   };
    //
    //   return $http(req);
    // };

    var save = function() {
      req = {
        method: 'POST',
        url: '/api/youtube_videos'
      };

      return $http(req);
    };

    // vm.query = query;
    vm.save = save;

    return vm;
  };

  YoutubeVideo.$inject = ['$http'];

  angular.module('yujihomo')
    .service('YoutubeVideo', YoutubeVideo);
})();
