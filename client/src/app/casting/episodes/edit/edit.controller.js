(function() {
  'use strict';

  var EpisodesUpdateController = function(User, Episode, episode, $state, toastr, Tag, ErrorMessageHandler, episodeTypes, usSpinnerService, tinymce) {
    var vm = this;
    vm.episode = episode.data;
    vm.episodeTypes = episodeTypes.data;
    vm.tag_ids = vm.episode.tag_ids;
    vm.tags = vm.episode.tags;
    vm.currentUser = User.currentUser();
    vm.tinymceOptions = {
      height: 500,
      max_height: 800,
      plugins: "image media autolink autosave charmap emoticons link lists paste preview tabfocus textcolor wordcount",
      menubar: "edit insert view format table tools",
      toolbar: "media restoredraft emoticons link numlist bullist paste forecolor backcolor preview"
    };

    var updateEpisode = function() {
      usSpinnerService.spin('spinner-1');
      Episode.update(vm.episode.id, {episode: vm.episode}).then(function() {
        usSpinnerService.stop('spinner-1');
        toastr.success('Episode is updated');
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
        Tag.save({tag: {name: $tag.text}})
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
      var index = vm.episode.tag_ids.indexOf($tag.id);
      vm.episode.tag_ids.splice(index, 1);
    };

    vm.updateEpisode = updateEpisode;
    vm.searchTags = searchTags;
    vm.createTag = createTag;
    vm.addTag = addTag;
    vm.removeTag = removeTag;
  };

  EpisodesUpdateController.$inject = [
    'User', 'Episode', 'episode', '$state', 'toastr', 'Tag',
    'ErrorMessageHandler', 'episodeTypes', 'usSpinnerService',
    'tinymce'
  ];

  angular.module('yujihomo')
    .controller('EpisodesUpdateController', EpisodesUpdateController);
})();
