(function() {
  'use strict';

  angular
    .module('yujihomo')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('yujihomo', {
        abstract: true,
        views: {
          '@': {
            template: "<header class='header' ui-view='header'></header><div class='container-fluid main-container-padding-btm well-lg' id='main-container' ui-view></div><footer ui-view='footer'></footer>"
          },
          'header@yujihomo': {
            templateUrl: 'app/header/header.tmpl.html',
            controller: 'HeaderController as vm'
          }
        }

      });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  }

})();
