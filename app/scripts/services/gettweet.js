'use strict';

/**
 * @ngdoc service
 * @name tweetApp.getTweet
 * @description
 * # getTweet
 * Factory in the tweetApp.
 */
angular.module('tweetApp')
  .factory('getTweet', ['restApi', 'cache', 'loader', function(restApi, cache, loader) {
    return function(id) {
      return loader({ id: id }, restApi.tweet, id, cache.tweet);
    };
  }]);
