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
    $provide.decorator('taOptions', ['taRegisterTool', '$delegate', function(taRegisterTool, taOptions) { // $delegate is the taOptions we are decorating
      taOptions.toolbar = [
        ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'pre', 'quote'],
        ['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol', 'redo', 'undo', 'clear'],
        ['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'],
        ['html', 'insertImage','insertLink', 'insertVideo', 'wordcount', 'charcount'],
        []
      ];
      taRegisterTool('calloutDanger', {
        iconclass: "fa fa-exclamation-triangle",
        action: function() {
          this.$editor().wrapSelection('insertHtml', '<div class="bs-callout bs-callout-danger"></div>', true);
        }
      });
      taRegisterTool('calloutInfo', {
        iconclass: "fa fa-info-circle",
        action: function() {
          this.$editor().wrapSelection('insertHtml', '<div class="bs-callout bs-callout-info"></div>', true);
        }
      });
      taRegisterTool('calloutWarning', {
        iconclass: "fa fa-hashtag",
        action: function() {
          this.$editor().wrapSelection('insertHtml', '<div class="bs-callout bs-callout-warning"></div>', true);
        }
      });
      // taRegisterTool('underline_strong', {
      //   iconclass: "fa fa-star",
      //   action: function() {
      //     this.$editor().wrapSelection('formatBlock', '<strong>', true);
      //   }
      // });
      // add the button to the default toolbar definition
      taOptions.toolbar[4].push('calloutDanger');
      taOptions.toolbar[4].push('calloutInfo');
      taOptions.toolbar[4].push('calloutWarning');
      return taOptions;
    }]);
  }
})();
