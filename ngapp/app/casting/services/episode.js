(function() {

  var Episode = function($q) {
    var vm = this;

    var episodes = [
      {
        id: 1,
        number: 1,
        published_at: "Jun 16, 2016",
        comments_count: 173,
        name: "LOL講座 - レーン戦終わってからの動き方",
        starred: false,
        duration: "11",
        description: "LOL講座 - レーン戦終わってからの動き方(Bottom lane)",
        thumbnail_url: "/assets/img/thumbnail1.jpg",
        type: "Beginner Episodes",
        category: "LOL guide",
        tags: ["guide", "bottom"]
      },
      {
        id: 2,
        number: 2,
        published_at: "Mar 23, 2016",
        comments_count: 55,
        name: "ウェーブマネージメント講座",
        starred: false,
        duration: "5",
        description: "ウェーブマネージメント講座 (Wave Management)",
        thumbnail_url: "/assets/img/thumbnail3.jpg",
        type: "Intermediate Episodes",
        category: "LOL guide",
        tags: ["guide", "wave"]
      },
      {
        id: 3,
        number: 3,
        published_at: "May 12, 2016",
        comments_count: 23,
        name: "Warding講座",
        starred: true,
        duration: "30",
        description: "Warding講座(Warding lesson)",
        thumbnail_url: "/assets/img/thumbnail2.jpg",
        type: "Advanced Episodes",
        category: "LOL guide",
        tags: ["guide", "warding"]
      }
    ];

    var query = function(params) {
      var deferred = $q.defer();

      deferred.resolve({data: episodes});

      return deferred.promise;
    };

    var get = function(id) {
      var deferred = $q.defer();

      var episode = _.find(episodes, function(episode) {
        return episode.id == id;
      });

      if (!!episode) {
        deferred.resolve({data: episode});
      } else {
        deferred.resolve({errors: ["can't find episode"]});
      }

      return deferred.promise;
    };

    vm.query = query;
    vm.get = get;

    return vm;
  };

  Episode.$inject = ['$q'];

  angular.module('yujihomo')
    .service('Episode', Episode);
})();
