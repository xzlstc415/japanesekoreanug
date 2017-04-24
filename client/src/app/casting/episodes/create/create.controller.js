(function() {
  'use strict';

  var EpisodesCreateController = function(User, Episode, $state, toastr, Tag, ErrorMessageHandler, episodeTypes, usSpinnerService) {
    var vm = this;
    vm.episodeTypes = episodeTypes.data;
    vm.episode = {};
    vm.episode.tag_ids = [];
    vm.currentUser = User.currentUser();

    var saveEpisode = function() {
      usSpinnerService.spin('spinner-1');
      Episode.save({episode: vm.episode}).then(function() {
        usSpinnerService.stop('spinner-1');
        $state.go('home');
        toastr.success('You have created a new episode');
      }).catch(function(res) {
        usSpinnerService.stop('spinner-1');
        ErrorMessageHandler.displayErrors(res);
      });
    };

    var searchTags = function(key) {
      return Tag.autocomplete({name_cont: key});
    };

    var createTag = function($tag) {
      if ($tag.id) {
        return true;
      } else {
        return Tag.save({tag: {name: $tag.text}})
          .then(function(res) {
            $tag.id = res.data.id;
            return true;
          })
          .catch(function() {
            return false;
          });
      }
    };

    var addTag = function($tag) {
      vm.episode.tag_ids.push($tag.id);
    };

    var removeTag = function($tag) {
      var index = vm.episode.tag_ids.indexOf($tag);
      vm.episode.tag_ids.splice(index, 1);
    };

    vm.saveEpisode = saveEpisode;
    vm.searchTags = searchTags;
    vm.addTag = addTag;
    vm.createTag = createTag;
    vm.removeTag = removeTag;
  };

  EpisodesCreateController.$inject = ['User', 'Episode', '$state', 'toastr', 'Tag', 'ErrorMessageHandler', 'episodeTypes', 'usSpinnerService'];

  angular.module('yujihomo')
    .controller('EpisodesCreateController', EpisodesCreateController);
})();
