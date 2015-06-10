'use strict';

/**
 * @ngdoc function
 * @name tweetApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the tweetApp
 */
angular.module('tweetApp')
  .controller('UserCtrl', ['$scope', '$routeParams', '$http', 'getUser', function($scope, $routeParams, $http, getUser) {

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

    $scope.followUser = function(user) {
      $http.post('/api/users/follow', {follow: user.name})
        .success(function(data, status) {
          user.isFollowed = true;
        })
        .error(function(data, status) {
          console.log(data);
          console.log(status);
        });
    };
  }]);

