(function() {
  'use strict';

  var ScheduleController = function($auth, toastr, usSpinnerService, ErrorMessageHandler, uiCalendarConfig, currentUser) {
    var vm = this;
    var today = new Date();
    var tomorrow = (new Date()).setDate(today.getDate() + 1);
    var minDate = today;
    var maxDate = new Date(2030, 5, 22);
    vm.eventSources = [];
    vm.currentUser = currentUser;
    vm.currentUser.role = 'user';
    vm.datePopup = {
      opened: false
    };

    vm.dateOptions = {
      maxDate: maxDate,
      minDate: minDate,
      startingDay: 1
    };

    var openDatePopup = function() {
      vm.datePopup.opened = true;
    };

    var getToday = function() {
      vm.dt = today;
    };

    var getTomorrow = function() {
      vm.dt = tomorrow;
    };

    vm.calendarOptions = {
      minDate: new Date(),
      showWeeks: true
    };

    vm.calendarUiConfig = {
      calendar:{
        editable: true,
        header:{
          left: 'title',
          center: '',
          right: 'today prev,next'
        }
        // eventClick: $scope.alertOnEventClick,
        // eventDrop: $scope.alertOnDrop,
        // eventResize: $scope.alertOnResize,
        // eventRender: $scope.eventRender
      }
    };

    vm.uiCalendarConfig = uiCalendarConfig;

    vm.openDatePopup = openDatePopup;
    vm.getToday = getToday;
    vm.getTomorrow = getTomorrow;
  };

  ScheduleController.$inject = [
    '$auth',
    'toastr',
    'usSpinnerService',
    'ErrorMessageHandler',
    'uiCalendarConfig',
    'currentUser'
  ];

  angular.module('yujihomo')
    .controller('ScheduleController', ScheduleController);
})();
