'use strict';

/**
 * @ngdoc function
 * @name tweetApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the tweetApp
 */
angular.module('tweetApp')
  .controller('UserCtrl', ['$scope', '$routeParams', 'getUser', function($scope, $routeParams, getUser) {

    $scope.tweets = [];

    getUser($routeParams.name).then(function(user) {
      $scope.user = user;
      $scope.tweets = user.Tweets;
    });

  }]);

