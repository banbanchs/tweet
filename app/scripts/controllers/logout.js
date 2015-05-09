'use strict';

/**
 * @ngdoc function
 * @name tweetApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the tweetApp
 */
angular.module('tweetApp')
  .controller('LogoutCtrl', ['$scope', 'auth', function($scope, auth) {
    auth.logout();
    $scope.logout = function() {
      auth.logout();
    };
  }]);
