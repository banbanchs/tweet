'use strict';

/**
 * @ngdoc service
 * @name tweetApp.cache
 * @description
 * # cache
 * Factory in the tweetApp.
 */
angular.module('tweetApp')
  .factory('cache', ['$cacheFactory', function($cacheFactory) {
    return {
      tweet: $cacheFactory('tweet', { capacity: 20 }),
      user: $cacheFactory('user', { capacity: 20 })
    };
  }]);
