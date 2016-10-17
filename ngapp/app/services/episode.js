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
        tags: ["guide", "bottom"],
        previous_episode_id: null,
        next_episode_id: 2,
        similar_episode_ids: [2, 3]
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
        tags: ["guide", "wave", "bottom"],
        previous_episode_id: 1,
        next_episode_id: 3,
        similar_episode_ids: [1, 3]
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
        tags: ["guide", "warding"],
        previous_episode_id: 2,
        next_episode_id: 4,
        similar_episode_ids: [1, 2]
      },
      {
        id: 4,
        number: 4,
        published_at: "May 12, 2016",
        comments_count: 553,
        name: "Warding講座2",
        starred: true,
        duration: "25",
        description: "Warding講座2(Warding lesson)",
        thumbnail_url: "/assets/img/thumbnail2.jpg",
        type: "Advanced Episodes",
        tags: ["guide", "warding"],
        previous_episode_id: 3,
        next_episode_id: null,
        similar_episode_ids: []
      }
    ];

    var findEpisodesByType = function(type, collection) {
      return _.filter(collection, function(episode) {
        return episode.type == type;
      });
    };

    var findEpisodesByTag = function(tag, collection) {
      return _.filter(collection, function(episode) {
        return episode.tags.includes(tag);
      });
    };

    var findEpisodesByIds = function(ids, collection) {
      return _.filter(collection, function(episode) {
        return ids.includes(episode.id);
      });
    };

    var query = function(params) {
      var deferred = $q.defer();

      if (params.tag || params.type || params.ids) {
        var tmpEp = episodes;
        if (params.tag) {
          tmpEp = findEpisodesByTag(params.tag, episodes);
        }
        if (params.type) {
          tmpEp = findEpisodesByType(params.type, tmpEp);
        }
        if (params.ids) {
          tmpEp = findEpisodesByIds(params.ids, tmpEp);
        }
        deferred.resolve({data: tmpEp});
      } else {
        deferred.resolve({data: episodes});
      }

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
