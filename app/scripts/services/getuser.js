'use strict';

/**
 * @ngdoc service
 * @name tweetApp.getUser
 * @description
 * # getUser
 * Factory in the tweetApp.
 */
angular.module('tweetApp')
  .factory('getUser', ['restApi', 'cache', 'loader', function(restApi, cache, loader) {
    return function(id) {
      return loader({ id: id }, restApi.user, id, cache.user);
    };
  }]);
