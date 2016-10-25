(function() {

  var Comment = function($q) {
    var vm = this;

    var comments = [
      {
        id: 1,
        episode_id: 1,
        content: "If we're changing our \"foundation_and_overrides.scss\" file, what happens if we update zurb foundation? Will this file be overwritten?",
        created_at: "over 3 years ago",
        user: {
          id: 2,
          name: "Stephanie Hekker",
          avatar_url: "/assets/images/guest.png"
        },
        replies: [
          {
            id: 2,
            content: "Simply updating the 'zurb-foundation' gem will not overwrite 'foundation_and_overrides.scss' or any of the other files in your assets folder. However, if you then proceed to run rails generate foundation:install again, it will overwrite 'foundation_and_overrides.scss' (but not without prompting you for confirmation first). That generator will also modify 'application.css', 'application.js', and 'application.html.erb'.",
            created_at: "over 3 years ago",
            user: {
              id: 3,
              name: "Thomas Hopkins",
              avatar_url: "/assets/images/guest.png"
            },
            replies: [
              {
                id: 3,
                content: "hello",
                created_at: "over 3 years ago",
                user: {
                  id: 4,
                  name: "Sourav Kumar",
                  avatar_url: "/assets/images/guest.png"
                }
              },
              {
                id: 4,
                content: "It's good !",
                created_at: "over 3 years ago",
                user: {
                  id: 5,
                  name: "Référencemen à Marseille",
                  avatar_url: "/assets/images/guest.png"
                }
              }
            ]
          },
          {
            id: 5,
            content: "I handle this by keeping my edits clean, and in place of the existing options. So, rather than putting all of my customizations in one place in the file, they're spread out in the locations where the options originally appeared.",
            created_at: "over 3 years ago",
            user: {
              id: 6,
              name: "James Chevalier",
              avatar_url: "/assets/images/guest.png"
            }
          },
          {
            id: 6,
            content: "It's best to just browse the gem's github repo for changes. I organize my files a little differently than default, so I don't want those changes over ride.",
            created_at: "over 3 years ago",
            user: {
              id: 7,
              name: "Keil Miller Jr",
              avatar_url: "/assets/images/guest.png"
            }
          }
        ]
      }
    ];

    var findCommentsByEpisodeId = function(episodeId) {
      return _.filter(comments, function(episode) {
        return episode.id == episodeId;
      });
    };

    var query = function(params) {
      var deferred = $q.defer();

      if (!!params.episodeId) {
        deferred.resolve({data: findCommentsByEpisodeId(params.episodeId)});
      } else {
        deferred.reject({errors: ["params is empty"]});
      }

      return deferred.promise;
    };

    vm.query = query;

    return vm;
  };

  Comment.$inject = ['$q'];

  angular.module('yujihomo')
    .service('Comment', Comment);
})();
