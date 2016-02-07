'use strict';

/**
 * @ngdoc directive
 * @name cctApp.directive:photos
 * @description
 * # photos
 */
angular.module('cctApp')
  .directive('photo', function () {
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
      		if (scope.currentIndex < 3) { //scope.photos.length -1
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
            scope.currentIndex = 3; // scope.photos.length - 1
          }
          console.log(scope.currentIndex);
      	};

      	scope.$watch('currentIndex', function() {
      		scope.photos.forEach(function(photo) {
      			photo.visible = false;
      		});
          scope.photos[scope.currentIndex].visible = true;
      	});
      },

      templateUrl: 'views/photos.html'
    };
  });
