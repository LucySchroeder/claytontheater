'use strict';

/**
 * @ngdoc function
 * @name cctApp.controller:CalendarCtrl
 * @description
 * # CalendarCtrl
 * Controller of the cctApp
 */
angular.module('cctApp')
  .controller('CalendarCtrl', function ($scope, $compile, uiCalendarConfig) {
    // jshint unused: false
    /* date info */
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    /* event source that pulls from google.com */
    $scope.googleCalendarApiKey = 'AIzaSyANLHV8--YB2Bu_sskFWTVBWDbbh9d1spQ';
    $scope.eventSource = {
            googleCalendarId: 'cctcalendar@gmail.com',
            url: 'https://calendar.google.com/calendar/embed?src=cctcalendar%40gmail.com&ctz=America/Chicago?key=AIzaSyANLHV8--YB2Bu_sskFWTVBWDbbh9d1spQ',
            googleCalendarApiKey: 'AIzaSyANLHV8--YB2Bu_sskFWTVBWDbbh9d1spQ',
    };
    /* event source that contains custom events on the scope */
    $scope.showevents = [
      {title: 'The Women',start: new Date(y, 2, 10, 20,0), end: new Date(y, 2, 10, 21,0),allDay:false},
      {title: 'The Women',start: new Date(y, 2, 11, 20,0),allDay:false},
      {title: 'The Women',start: new Date(y, 2, 12, 20,0),allDay:false},
      {title: 'The Women',start: new Date(y, 2, 13, 14,0),allDay:false},
      {title: 'The Women',start: new Date(y, 2, 18, 20,0),allDay:false},
      {title: 'The Women',start: new Date(y, 2, 19, 20,0),allDay:false},
      {title: 'The Women',start: new Date(y, 2, 20, 14,0),allDay:false}
    ];

    $scope.auditionevents = {
       color: '#f00',
       textColor: 'yellow',
       events: [ 
          {title: 'Auditions: Inherit the Wind',start: new Date(y, 1, 27, 10, 0), allDay: false},
          {title: 'Auditions: Inherit the Wind',start: new Date(y, 1, 24, 18), allDay: false}
        ]
    };

    $scope.workevents = {
      color: 'green',
      textColor: 'pink',
      events: [
        {title: 'Set Build', start: new Date(y, 1, 6, 9, 0), allDay: false},
        {title: 'Set Build', start: new Date(y, 1, 13, 8, 0), allDay: false},
        {title: 'Light Hang', start: new Date(y, 1, 20, 9, 0), allDay: false},
        {title: 'Set Build', start: new Date(y, 1, 27, 9, 0), allDay: false}
      ]
    };

    $scope.otherevents = {
      color: 'gray',
      textColor: 'black',
      events: [
        {title: 'CCT Board Meeting', start: new Date(y, 1, 22, 19, 30), allDay: false},
        {title: 'CCT Board Meeting', start: new Date(y, 2, 28, 19, 30), allDay: false}
      ]
    };
    
    /* add custom event*/
    $scope.addEvent = function() {
      $scope.events.push({
        title: 'Open Sesame',
        start: new Date(y, m, 28),
        end: new Date(y, m, 29),
        className: ['openSesame']
      });
    };
    /* remove event */
    $scope.remove = function(index) {
      $scope.events.splice(index,1);
    };

    /* config object */
    $scope.uiConfig = {
      calendar:{
        height: 500,
        editable: true,
        header:{
          left: 'title',
          center: '',
          right: 'today prev,next'
        },
        eventClick: $scope.alertOnEventClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize,
        eventRender: $scope.eventRender
      }
    };

    /* event sources array*/
    $scope.eventSources = [$scope.showevents, $scope.auditionevents, $scope.workevents, $scope.otherevents];
    $scope.eventSources2 = [$scope.eventSource];
  });
