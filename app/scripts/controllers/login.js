'use strict';

/**
 * @ngdoc function
 * @name tweetApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the tweetApp
 */
angular.module('tweetApp')
  .controller('LoginCtrl', ['$scope', '$location', 'authService', 'auth', 'restApi', function($scope, $location, authService, auth, restApi) {
    $scope.isNotRegistered = false;

    $scope.login = function() {
      auth.login({'name': $scope.user.name, 'password': $scope.user.password}, function(loggedIn) {
        if (loggedIn) {
          authService.loginConfirmed();
          $location.path('/timeline');
        } else {
          authService.loginCancelled();
          $scope.alert = {
            content: 'Error logging in, please try again',
            type: 'danger'
          };
        }
      });
    };

    $scope.register = function() {
      restApi.user.save({}, $scope.newUser, function(user) {
        $scope.isNotRegistered = false;
        $scope.user = user;
        console.log('user ' + user.name + ' registered');
        $location.path('/login');
      }, function() {
        $scope.$parent.alert = {
          content: 'An error occurred while registering',
          type: 'danger'
        };
      });
    };

    $scope.closeAlert = function() {
      $scope.alert = undefined;
    };
  }]);
