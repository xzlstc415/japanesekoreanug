(function() {
  'use strict';

  var EpisodesCreateController = function(User, Episode, $state, toastr, Tag, ErrorMessageHandler, episodeTypes, usSpinnerService) {
    var vm = this;
    vm.episodeTypes = episodeTypes.data;
    vm.episode = {};
    vm.episode.tag_ids = [];
    vm.currentUser = User.currentUser();
    vm.tinymceOptions = {
      height: 500,
      max_height: 800,
      body_class: 'blog-wrapper',
      plugins: [
        'advlist autolink lists link image charmap preview searchreplace',
        'visualblocks media contextmenu emoticons textcolor colorpicker'
      ],
      menubar: "",
      toolbar1: "undo redo | insert | styleselect | bold italic underline | bullist numlist | fontsizeselect forecolor backcolor | removeformat",
      toolbar2: "link image media emoticons charmap | preview visualblocks | alignleft aligncenter alignright alignjustify | outdent indent | blockquote",
      contextmenu: "link image media | removeformat",
      toolbar: 'fontsizeselect',
      fontsize_formats: '0.57em 0.71em 0.86em 1em 1.14em 1.71em 2.29em 2.57em',
      image_class_list: [
        { title: 'None', value: '' },
        { title: 'Responsive', value: 'img-responsive' }
      ],
      style_formats: [
        { title: 'Header 1', format: 'h1' },
        { title: 'Header 2', format: 'h2' },
        { title: 'Header 3', format: 'h3' },
        { title: 'Header 4', format: 'h4' },
        { title: 'Paragraph', format: 'p' },
        { title: 'Block', format: 'div' },
        { title: 'Orange Box', selector: 'div,dl,blockquote,pre,ol,ul,p', classes: 'orange-box' },
        { title: 'Grey Box', selector: 'div,dl,blockquote,pre,ol,ul,p', classes: 'gray-box' },
        { title: 'No Symbol List', selector: 'ol,ul', classes: 'no-disc-style' }
      ],
      formats: {
        h1: { block: 'h1', styles: { 'font-size': '2.29em', 'margin-bottom': '3rem' } },
        h2: { block: 'h2', classes: 'section-header' },
        h3: { block: 'h3', classes: 'bullet' },
        underline: { inline: 'span', classes: 'pink-underline' }
      },
      autosave_interval: "1s",
      content_css: 'https://s3-ap-northeast-1.amazonaws.com/japanesekoreanug-css/blogger.css'
    };

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

  EpisodesCreateController.$inject = [
    'User', 'Episode', '$state', 'toastr',
    'Tag', 'ErrorMessageHandler', 'episodeTypes',
    'usSpinnerService'
  ];

  angular.module('yujihomo')
    .controller('EpisodesCreateController', EpisodesCreateController);
})();
