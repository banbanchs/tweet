'use strict';

/**
 * @ngdoc function
 * @name tweetApp.controller:NewTweetCtrl
 * @description
 * # NewTweetCtrl
 * Controller of the tweetApp
 */
angular.module('tweetApp')
  .controller('NewTweetCtrl', ['$scope', '$modal', 'restApi', function($scope, $modal, restApi) {

    $scope.createNewTweet = function(content) {
      var newTweet = new restApi.tweet({content: content});
      newTweet.$save();
      // TODO: Refresh timeline after create new tweet
      return newTweet;
    };

    $scope.displayTweetBox = function() {
      var modalInstance = $modal.open({
        animation: true,
        templateUrl: 'newTweet.html',
        controller: 'ModalInstanceCtrl'
      });

      modalInstance.result.then(function(content) {
        $scope.createNewTweet(content);
      });
    };

  }])
  .controller('ModalInstanceCtrl', ['$scope', '$modalInstance', function($scope, $modalInstance) {

    $scope.content = '';

    $scope.send = function() {
      $modalInstance.close($scope.content);
    };

    $scope.cancel = function() {
      $modalInstance.dismiss('cancel');
    };

  }]);

