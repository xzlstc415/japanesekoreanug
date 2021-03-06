(function() {
  'use strict';

  var ScheduleController = function($auth, toastr, usSpinnerService, ErrorMessageHandler, uiCalendarConfig, Event, events, User, $window, $state, _) {
    var vm = this;
    var today = new Date();
    var tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
    var minDate = today;
    var maxDate = new Date(2030, 5, 22);
    var newEvents = [];
    vm.scheduleEvent = {
      date: null
    };

    vm.currentUser = User.currentUser();
    vm.datePopup = {
      opened: false
    };

    vm.dateOptions = {
      maxDate: maxDate,
      minDate: minDate,
      startingDay: 1
    };

    vm.calendarOptions = {
      minDate: new Date(),
      showWeeks: true
    };

    var translateFromBackend = function(event) {
      event.start = event.start_time;
      event.end = event.end_time;
    }

    var eventRender = function(event, element) {
      if (vm.eventType == 'streaming') {
        element.style = "color: yellow";
      }
    };

    var assignEvents = function(eventType) {
      var scheduleEvents = _.filter(events.data, ['event_type', eventType]);
      _.forEach(scheduleEvents, function(event) {
        event.className = eventType;
        translateFromBackend(event);
      });
      return scheduleEvents;
    };

    var initEvents = function() {
      var streamingEvents = assignEvents('streaming');
      var editingEvents = assignEvents('editing');
      var schoolEvents = assignEvents('school');
      var otherEvents = assignEvents('others');
      vm.eventSources = [
        streamingEvents,
        editingEvents,
        schoolEvents,
        otherEvents,
        newEvents
      ];
    };

    /* alert on eventClick */
    var onEventClick = function(date){
      if (vm.currentUser.role == 'admin') {
        var deleteEvent = $window.confirm('Are you sure you want to delete?');

        if (deleteEvent) {
          Event.destroy(date.id).then(function() {
            $state.reload();
          });
        }
      }
    };

    vm.calendarUiConfig = {
      calendar:{
        height: 1190,
        contentHeight: 1190,
        editable: false,
        header:{
          left: 'title',
          center: '',
          right: 'today prev,next'
        },
        timezone: 'local',
        eventClick: onEventClick,
        eventRender: eventRender
      }
    };

    vm.eventTypeMap = {
      streaming: '配信',
      editing: '編集',
      school: '学校',
      others: 'その他'
    };

    var openDatePopup = function() {
      vm.datePopup.opened = true;
    };

    var getToday = function() {
      vm.scheduleEvent.date = today;
    };

    var getTomorrow = function() {
      vm.scheduleEvent.date = tomorrow;
    };

    var setDateTime = function(date, time) {
      var resultDate = angular.copy(date);
      resultDate.setHours(time.getHours());
      resultDate.setMinutes(time.getMinutes());
      resultDate.setSeconds(0);
      return resultDate;
    };

    var createEvent = function(scheduleEvent) {
      if (scheduleEvent.date && scheduleEvent.start_time && scheduleEvent.end_time) {
        scheduleEvent.start_time = setDateTime(scheduleEvent.date, scheduleEvent.start_time);
        scheduleEvent.end_time = setDateTime(scheduleEvent.date, scheduleEvent.end_time);
        Event.save({event: scheduleEvent})
        .then(function(res) {
          var event = res.data;
          event.className = event.event_type;
          translateFromBackend(event);
          newEvents.push(event);
        })
        .catch(function(res) {
          ErrorMessageHandler.displayErrors(res);
        });
      } else {
        toastr.error('Date or Start At or Finished At is Empty!');
      }
    };

    var onCalendar = function(calendar) {
      calendar.fullCalendar('changeView', 'agendaWeek');
    };

    vm.openDatePopup = openDatePopup;
    vm.getToday = getToday;
    vm.getTomorrow = getTomorrow;
    vm.createEvent = createEvent;
    vm.uiCalendarConfig = uiCalendarConfig;
    vm.onCalendar = onCalendar;
    initEvents();
  };

  ScheduleController.$inject = [
    '$auth',
    'toastr',
    'usSpinnerService',
    'ErrorMessageHandler',
    'uiCalendarConfig',
    'Event',
    'events',
    'User',
    '$window',
    '$state',
    '_'
  ];

  angular.module('yujihomo')
    .controller('ScheduleController', ScheduleController);
})();
