(function() {

  var Tag = function($q) {
    var vm = this;

    var tags = [
      {id: 1, name: "guide"},
      {id: 2, name: "wave"},
      {id: 3, name: "warding"},
      {id: 4, name: "bottom"}
    ];

    var query = function(params) {
      var deferred = $q.defer();

      deferred.resolve({data: tags});

      return deferred.promise;
    };

    var get = function(id) {
      var deferred = $q.defer();

      var tag = _.find(tags, function(tag) {
        return tag.id == id;
      });

      if (!!tag) {
        deferred.resolve({data: tag});
      } else {
        deferred.resolve({errors: ["can't find tag"]});
      }

      return deferred.promise;
    };

    vm.query = query;
    vm.get = get;

    return vm;
  };

  Tag.$inject = ['$q'];

  angular.module('yujihomo')
    .service('Tag', Tag);
})();
