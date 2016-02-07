'use strict';

/**
 * @ngdoc directive
 * @name cctApp.directive:showInfo
 * @description
 * # showInfo
 */
angular.module('cctApp')
  .directive('showInfo', function () {
    return {
      restrict: 'E',
      scope: {
      	info: '='
      },
      templateUrl: 'views/showinfo.html'
   };
  });