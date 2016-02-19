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
    $scope.eventSource = {
            url: 'http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic',
            className: 'gcal-event',           // an option!
            currentTimezone: 'America/Chicago' // an option!
    };
    /* event source that contains custom events on the scope */
    $scope.showevents = [
      {title: 'The Women',start: new Date(y, 2, 10, 19,0), end: new Date(y, 2, 10, 21,0),allDay:false},
      {title: 'The Women',start: new Date(y, 2, 11, 19,0),allDay:false},
      {title: 'The Women',start: new Date(y, 2, 12, 19,0),allDay:false},
      {title: 'The Women',start: new Date(y, 2, 13, 14,0),allDay:false},
      {title: 'The Women',start: new Date(y, 2, 17, 19,0), end: new Date(y, 2, 10, 21,0),allDay:false},
      {title: 'The Women',start: new Date(y, 2, 18, 19,0),allDay:false},
      {title: 'The Women',start: new Date(y, 2, 19, 19,0),allDay:false},
      {title: 'The Women',start: new Date(y, 2, 20, 14,0),allDay:false}
    ];

    /* event source that calls a function on every view switch 
    $scope.eventsF = function (start, end, timezone, callback) {
      var s = new Date(start).getTime() / 1000;
      var e = new Date(end).getTime() / 1000;
      var m = new Date(start).getMonth();
      var events = [{title: 'Feed Me ' + m,start: s + (50000),end: s + (100000),allDay: false, className: ['customFeed']}];
      callback(events);
    };
*/
    $scope.auditionevents = {
       color: '#f00',
       textColor: 'yellow',
       events: [ 
          {title: 'Auditions',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
          {title: 'Auditions',start: new Date(y, m, 28),end: new Date(y, m, 29)}
        ]
    };

    $scope.workevents = {
      color: 'green',
      textColor: 'pink',
      events: [
        {title: 'Light Hang', start: new Date(y, 2, 5, 12, 30), allDay: false}
      ]
    };
    /* alert on eventClick */
    $scope.alertOnEventClick = function( date, jsEvent, view){
        $scope.alertMessage = (date.title + ' was clicked ');
    };
    /* alert on Drop */
     $scope.alertOnDrop = function(event, delta, revertFunc, jsEvent, ui, view){
       $scope.alertMessage = ('Event Droped to make dayDelta ' + delta);
    };
    /* alert on Resize */
    $scope.alertOnResize = function(event, delta, revertFunc, jsEvent, ui, view ){
       $scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
    };
    /* add and removes an event source of choice */
    $scope.addRemoveEventSource = function(sources,source) {
      var canAdd = 0;
      angular.forEach(sources,function(value, key){
        if(sources[key] === source){
          sources.splice(key,1);
          canAdd = 1;
        }
      });
      if(canAdd === 0){
        sources.push(source);
      }
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
    /* Change View */
    $scope.changeView = function(view,calendar) {
      uiCalendarConfig.calendars[calendar].fullCalendar('changeView',view);
    };
    /* Change View */
    $scope.renderCalender = function(calendar) {
      if(uiCalendarConfig.calendars[calendar]){
        uiCalendarConfig.calendars[calendar].fullCalendar('render');
      }
    };
     /* Render Tooltip */
    $scope.eventRender = function( event, element, view ) { 
        element.attr({'tooltip': event.title,
                     'tooltip-append-to-body': true});
        $compile(element)($scope);
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
    $scope.eventSources = [$scope.showevents, $scope.eventSource, $scope.auditionevents, $scope.workevents]; //$scope.eventsF
  });
