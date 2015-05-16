'use strict';

/**
 * @ngdoc service
 * @name tweetApp.auth
 * @description
 * # auth
 * Factory in the tweetApp.
 */
angular.module('tweetApp')
  .factory('auth', ['$rootScope', '$http', '$cookieStore', 'authService', function($rootScope, $http, $cookieStore, httpAutoInterceptor) {
    return {
      login: function(postData, callback) {
        $http({ method: 'POST', url: '/session/new', data: postData }).success(function(data, status, headers, config) {
          $rootScope.currentUser = data;
          $rootScope.loggedIn = true;
          $cookieStore.put('currentUser', data);
          $cookieStore.put('loggedIn', true);
          httpAutoInterceptor.loginConfirmed(data);
          callback(true);
        }).error(function(data, status, headers, config) {
          callback(false);
        });
      },
      logout: function() {
        $http.delete('/session/destroy', {});
        $rootScope.currentUser = null;
        $rootScope.loggedIn = false;
        $cookieStore.remove('loggedIn');
        $cookieStore.remove('currentUser');
      },
      currentUser: function() {
        $http.get('/session/ping').success(function(user) {
          $rootScope.currentUser = user;
          $rootScope.loggedIn = true;
          $cookieStore.put('currentUser', user);
          $cookieStore.put('loggedIn', true);
        });
      }
    };
  }]);
