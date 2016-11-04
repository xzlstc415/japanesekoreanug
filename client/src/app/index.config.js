(function() {
  'use strict';

  angular
    .module('yujihomo')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $authProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 1000;
    toastrConfig.positionClass = 'toast-top-center';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    // config of satellizer
    $authProvider.twitch({
      clientId: '2spt1bzwb5s6amg8fxnqrctif4p8p40',
      url: '/auth/twitch'
    });
  }

})();
