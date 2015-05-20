'use strict';

/**
 * @ngdoc function
 * @name tweetApp.controller:TimelineCtrl
 * @description
 * # TimelineCtrl
 * Controller of the tweetApp
 */
angular.module('tweetApp')
  .controller('TimelineCtrl', ['$scope', 'getTweet', function($scope, getTweet) {

    $scope.tweets = [];

    $scope.loadNewTweet = function(page) {
      getTweet(page).then(function(tweets) {
        $scope.tweets = tweets;
      });
    };

    $scope.loadNewTweet();

  }]);
