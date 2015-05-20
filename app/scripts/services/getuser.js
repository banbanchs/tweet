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
    return function(id, page) {
      return loader({ id: id, page: page }, restApi.user, id, cache.user);
    };
  }]);
