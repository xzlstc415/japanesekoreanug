angular.module('yujihomo', [
  'ngAnimate',
  'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('yujihomo', {
      url: '',
      abstract: true,
      views: {
        'header@': {
          templateUrl: 'app/header/header.tmpl.html'
        }
      }
    })
    .state('home', {
      url:'/',
      parent: 'yujihomo'
    });
  $urlRouterProvider.otherwise('/');
})
.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
});