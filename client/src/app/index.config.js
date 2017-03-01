(function() {
  'use strict';

  angular
    .module('yujihomo')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $authProvider, API_URL) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 999999999999;
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
  }
})();
