'use strict';

/**
 * @ngdoc function
 * @name tweetApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tweetApp
 */
angular.module('tweetApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
