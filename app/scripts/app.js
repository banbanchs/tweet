'use strict';

/**
 * @ngdoc overview
 * @name tweetApp
 * @description
 * # tweetApp
 *
 * Main module of the application.
 */
angular
  .module('tweetApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'http-auth-interceptor'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/timeline', {
        templateUrl: 'views/timeline.html'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(['$rootScope', function($rootScope) {
    $rootScope.currentUser = null;
    $rootScope.loggedIn = false;
  }]);
