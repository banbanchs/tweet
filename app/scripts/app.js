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
    'ui.gravatar',
    'http-auth-interceptor'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/timeline', {
        templateUrl: 'views/timeline.html',
        controller: 'TimelineCtrl'
      })
      .when('/user/:name', {
        templateUrl: 'views/timeline.html',
        controller: 'UserCtrl'
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
  .run(['$rootScope', '$location', '$cookieStore', 'auth', function($rootScope, $location, $cookieStore, auth) {

    $rootScope.loggedIn = $cookieStore.get('loggedIn') || false;
    $rootScope.currentUser = $cookieStore.get('currentUser') || null;

    $rootScope.$watch($rootScope.loggedIn, function(newValue, oldValue) {
      if (!$rootScope.loggedIn && ['/', '/login'].indexOf($location.path()) === -1) {
        auth.currentUser();
      }
    });

    $rootScope.$on('event:auth-loginRequired', function() {
      $location.path('/login');
      return false;
    });

  }]);
