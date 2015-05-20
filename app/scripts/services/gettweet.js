'use strict';

/**
 * @ngdoc service
 * @name tweetApp.getTweet
 * @description
 * # getTweet
 * Factory in the tweetApp.
 */
angular.module('tweetApp')
  .factory('getTweet', ['restApi', 'cache', '$q', function(restApi, cache, $q) {
    // TODO: Add limit support
    return function(page) {
      var defer = $q.defer();
      // TODO: Cache support
      restApi.tweet.query({page: page}, function(tweets) {
        defer.resolve(tweets);
      }, function(err) {
        defer.reject(err);
      });
      return defer.promise;
    };
  }]);
