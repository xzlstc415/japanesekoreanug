(function() {
  'use strict';

  angular
    .module('yujihomo')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $authProvider, API_URL, $provide) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 2000;
    toastrConfig.positionClass = 'toast-top-center';
    toastrConfig.preventDuplicates = false;
    toastrConfig.preventOpenDuplicates = true;
    toastrConfig.progressBar = true;

    $authProvider.baseUrl = API_URL;

    // config of satellizer
    $authProvider.twitch({
      url: '/auth/twitch',
      clientId: '2spt1bzwb5s6amg8fxnqrctif4p8p40'
    });

    $authProvider.google({
      url: '/auth/google',
      clientId: '853689657196-i21roetdbidgcs42ch6bgnu1kn9jfqgh.apps.googleusercontent.com',
      scope: [
        'profile',
        'email',
        'https://www.googleapis.com/auth/youtube',
        'https://www.googleapis.com/auth/youtube.force-ssl',
        'https://www.googleapis.com/auth/youtube.readonly	',
        'https://www.googleapis.com/auth/youtube.upload	',
        'https://www.googleapis.com/auth/youtubepartner',
        'https://www.googleapis.com/auth/youtubepartner-channel-audit'
      ],
      optionalUrlParams: ['access_type', 'approval_prompt'],
      accessType: 'offline',
      approvalPrompt: 'force'
    });

    // angularText
    $provide.decorator('taOptions', ['taRegisterTool', 'taSelection', 'taTranslations', 'taToolFunctions', '$delegate', '$window', function(taRegisterTool, taSelection, taTranslations, taToolFunctions, taOptions, $window) { // $delegate is the taOptions we are decorating
      var blockJavascript = function (link) {
          if (link.toLowerCase().indexOf('javascript')!==-1) {
              return true;
          }
          return false;
      };

      taOptions.toolbar = [
        ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'pre', 'quote'],
        ['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol', 'redo', 'undo', 'clear'],
        ['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'],
        ['html', 'insertImage', 'insertResponsiveImage','insertLink', 'insertVideo', 'wordcount', 'charcount'],
        []
      ];
      taRegisterTool('calloutDanger', {
        iconclass: "fa fa-exclamation-triangle",
        action: function() {
          this.$editor().wrapSelection('formatBlock', '<div class="bs-callout bs-callout-danger"></div>', true);
        }
      });
      taRegisterTool('calloutInfo', {
        iconclass: "fa fa-info-circle",
        action: function() {
          this.$editor().wrapSelection('formatBlock', '<div class="bs-callout bs-callout-info"></div>', true);
        }
      });
      taRegisterTool('calloutWarning', {
        iconclass: "fa fa-hashtag",
        action: function() {
          this.$editor().wrapSelection('formatBlock', '<div class="bs-callout bs-callout-warning"></div>', true);
        }
      });
      taRegisterTool('blackText', {
        iconclass: "fa fa-font",
        action: function() {
          this.$editor().wrapSelection('forecolor', 'black');
        }
      });
      taRegisterTool('redText', {
        iconclass: "fa fa-font red-text",
        action: function() {
          this.$editor().wrapSelection('forecolor', '#b22222');
        }
      });
      taRegisterTool('greenText', {
        iconclass: "fa fa-font green-text",
        action: function() {
          this.$editor().wrapSelection('forecolor', '#149b14');
        }
      });
      taRegisterTool('insertResponsiveImage', {
          iconclass: 'fa fa-file-image-o',
          tooltiptext: taTranslations.insertImage.tooltip,
          action: function(){
              var imageLink;
              imageLink = $window.prompt(taTranslations.insertImage.dialogPrompt, 'http://');
              if(imageLink && imageLink !== '' && imageLink !== 'http://'){
                  /* istanbul ignore next: don't know how to test this... since it needs a dialogPrompt */
                  // block javascript here
                  if (!blockJavascript(imageLink)) {
                      if (taSelection.getSelectionElement().tagName && taSelection.getSelectionElement().tagName.toLowerCase() === 'a') {
                          // due to differences in implementation between FireFox and Chrome, we must move the
                          // insertion point past the <a> element, otherwise FireFox inserts inside the <a>
                          // With this change, both FireFox and Chrome behave the same way!
                          taSelection.setSelectionAfterElement(taSelection.getSelectionElement());
                      }
                      // In the past we used the simple statement:
                      //return this.$editor().wrapSelection('insertImage', imageLink, true);
                      //
                      // However on Firefox only, when the content is empty this is a problem
                      // See Issue #1201
                      // Investigation reveals that Firefox only inserts a <p> only!!!!
                      // So now we use insertHTML here and all is fine.
                      // NOTE: this is what 'insertImage' is supposed to do anyway!
                      var embed = '<img class="img-responsive" src="' + imageLink + '">';
                      return this.$editor().wrapSelection('insertHTML', embed, true);
                  }
              }
          },
          onElementSelect: {
              element: 'img',
              action: taToolFunctions.imgOnSelectAction
          }
      });
      // add the button to the default toolbar definition
      taOptions.toolbar[4].push('calloutDanger');
      taOptions.toolbar[4].push('calloutInfo');
      taOptions.toolbar[4].push('calloutWarning');
      taOptions.toolbar[1].push('blackText');
      taOptions.toolbar[1].push('redText');
      taOptions.toolbar[1].push('greenText');
      return taOptions;
    }]);
  }
})();
