(function() {
  'use strict';

  var HeaderController = function($auth, toastr, User, $state, usSpinnerService, ErrorMessageHandler) {
    var vm = this;
    vm.loginWndOpen = false;
    vm.signupWndOpen = false;
    vm.currentUser = User.currentUser();

    vm.$state = $state;

    var closeLoginModal = function() {
      vm.loginWndOpen = false;
    };

    var closeSignupModal = function() {
      vm.signupWndOpen = false;
    };

    var openLoginModal = function() {
      if (vm.signupWndOpen === false) {
        vm.loginWndOpen = true;
      }
    };

    var openSignupModal = function() {
      if (vm.loginWndOpen === false) {
        vm.signupWndOpen = true;
      }
    };

    var authenticate = function(provider) {
      usSpinnerService.spin('spinner-1');
      $auth.authenticate(provider)
        .then(function(res) {
          usSpinnerService.stop('spinner-1');
          vm.currentUser = $auth.getPayload();
          closeLoginModal();
          $state.go('home', {
            episode_type_name_eq: null,
            tags_name_eq: null,
            name_or_tags_name_or_episode_type_name_cont: null,
            starred: null
          }, { reload: true });
          $state.reload();
          toastr.success('You have logged in successfully!');
        })
        .catch(function() {
          usSpinnerService.stop('spinner-1');
          toastr.error('Sorry we cannot connect to twitch :(');
        });
    };

    var login = function(user) {
      usSpinnerService.spin('spinner-1');
      $auth.login(user).then(function(res) {
        vm.currentUser = $auth.getPayload();
        usSpinnerService.stop('spinner-1');
        closeLoginModal();
        $state.go('home', {
          episode_type_name_eq: null,
          tags_name_eq: null,
          name_or_tags_name_or_episode_type_name_cont: null,
          starred: null
        }, { reload: true });
        $state.reload();
        toastr.success('You have logged in successfully!');
      }).catch(function() {
        usSpinnerService.stop('spinner-1');
        toastr.error('Sorry we cannot connect to twitch :(');
      });
    };

    var logout = function() {
      usSpinnerService.spin('spinner-1');
      $auth.logout();
      vm.currentUser = null;
      toastr.success('You have logged out successfully!');
      usSpinnerService.stop('spinner-1');
      $state.go('home', {
        episode_type_name_eq: null,
        tags_name_eq: null,
        name_or_tags_name_or_episode_type_name_cont: null,
        starred: null
      }, { reload: true });
    };

    var signup = function(user) {
      usSpinnerService.spin('spinner-1');
      User.signup(user).then(function(res) {
        $auth.setToken(res.data.token);
        closeSignupModal();
        toastr.success('You have signed up successfully!');
        usSpinnerService.stop('spinner-1');
        $state.go('home', {
          episode_type_name_eq: null,
          tags_name_eq: null,
          name_or_tags_name_or_episode_type_name_cont: null,
          starred: null
        }, { reload: true });
      }).catch(function(res) {
        ErrorMessageHandler.displayErrors(res);
        usSpinnerService.stop('spinner-1');
      });
    };

    var searchEpisodes = function () {
      $state.go('home', {name_or_tags_name_or_episode_type_name_cont: vm.keyword});
      vm.keyword = "";
    };

    vm.searchEpisodes = searchEpisodes;
    vm.closeLoginModal = closeLoginModal;
    vm.closeSignupModal = closeSignupModal;
    vm.openLoginModal = openLoginModal;
    vm.openSignupModal = openSignupModal;
    vm.authenticate = authenticate;
    vm.login = login;
    vm.logout = logout;
    vm.signup = signup;
  };

  HeaderController.$inject = ['$auth', 'toastr', 'User', '$state', 'usSpinnerService', 'ErrorMessageHandler'];

  angular.module('yujihomo')
    .controller('HeaderController', HeaderController);
})();
