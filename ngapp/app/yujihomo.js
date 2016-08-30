angular.module('yujihomo', [
  'ngAnimate',
  'ui.router'
])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('yujihomo', {
        url: '',
        abstract: true
    });
  $urlRouterProvider.otherwise('/');
});