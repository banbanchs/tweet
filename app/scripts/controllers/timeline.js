'use strict';

/**
 * @ngdoc function
 * @name tweetApp.controller:TimelineCtrl
 * @description
 * # TimelineCtrl
 * Controller of the tweetApp
 */
angular.module('tweetApp')
  .controller('TimelineCtrl', ['$scope', 'getTweet', 'getUser', function($scope, getTweet, getUser) {

    $scope.tweets = [];

    getTweet().then(function(tweets) {
      $scope.tweets = tweets;
    });

  }]);
