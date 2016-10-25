(function() {

  var EpisodeType = function($q) {
    var vm = this;

    var episodeTypes = [
      {id: 1, name: "Beginner Episodes"},
      {id: 2, name: "Intermediate Episodes"},
      {id: 3, name: "Advanced Episodes"}
    ];

    var query = function() {
      var deferred = $q.defer();

      deferred.resolve({data: episodeTypes});

      return deferred.promise;
    };

    var get = function(id) {
      var deferred = $q.defer();

      var episodeType = _.find(episodeTypes, function(episodeType) {
        return episodeType.id == id;
      });

      if (episodeType) {
        deferred.resolve({data: episodeType});
      } else {
        deferred.resolve({errors: ["can't find episodeType"]});
      }

      return deferred.promise;
    };

    vm.query = query;
    vm.get = get;

    return vm;
  };

  EpisodeType.$inject = ['$q'];

  angular.module('yujihomo')
    .service('EpisodeType', EpisodeType);
})();
