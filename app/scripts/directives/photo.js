'use strict';

/**
 * @ngdoc directive
 * @name cctApp.directive:photos
 * @description
 * # photos
 */
angular.module('cctApp')
  .directive('photo', function ($timeout) {
    return {
      restrict: 'E',
      scope: {
      	photos: '='
      	},

      // jshint unused: false
      link: function (scope, elem, attr) {
      	scope.currentIndex = 0;
        console.log(scope.currentIndex);
        console.log(scope.photos);

      	scope.next = function() {
      		if (scope.currentIndex < scope.photos.length - 1) { //scope.photos.length -1
            scope.currentIndex ++;
          } 
          else {
            scope.currentIndex = 0;
          }
          console.log(scope.currentIndex);
      	};

      	scope.prev = function() {
      		if (scope.currentIndex > 0) {
            scope.currentIndex --;
          }
          else {
            scope.currentIndex = scope.photos.length - 1; // scope.photos.length - 1
          }
          console.log(scope.currentIndex);
      	};

      	scope.$watch('currentIndex', function() {
      		scope.photos.forEach(function(photo) {
      			photo.visible = false;
      		});
          scope.photos[scope.currentIndex].visible = true;
      	});

        // transition through slideshow on a timer
        var timer;
        var sliderFunc = function() {
          timer = $timeout(function() {
            scope.next();
            timer = $timeout(sliderFunc, 5000);
          }, 5000);
        };

        sliderFunc();

        scope.$on('$destroy', function() {
          $timeout.cancel(timer); // when the scope is getting destroyed, cancel the timer
        });
      },

      templateUrl: 'views/photos.html'
    };
  });
