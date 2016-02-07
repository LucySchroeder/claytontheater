'use strict';

/**
 * @ngdoc function
 * @name cctApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cctApp
 */
angular.module('cctApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
