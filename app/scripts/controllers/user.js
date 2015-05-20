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

    $scope.loadNewTweet = function(page) {
      getUser($routeParams.name, page).then(function(user) {
        $scope.user = {
          id: user.id,
          name: user.name,
          email: user.email,
          meta: user.meta
        };
        $scope.tweets = user.Tweets;
        angular.forEach($scope.tweets, function(value, key) {
          value.User = $scope.user;
        });
      });
    };

    $scope.loadNewTweet();

  }]);

