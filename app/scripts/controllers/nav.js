'use strict';

/**
 * @ngdoc function
 * @name tweetApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the tweetApp
 */
angular.module('tweetApp')
  .controller('NavCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  }]);
