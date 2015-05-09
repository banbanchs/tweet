'use strict';

/**
 * @ngdoc service
 * @name tweetApp.loader
 * @description
 * # loader
 * Factory in the tweetApp.
 */
angular.module('tweetApp')
  .factory('loader', ['$q', function($q) {
    return function(params, restApi, cacheId, cache) {
      var defer = $q.defer();
      var result = cacheId && cache && cache.get(cacheId);
      // If hit the cache
      if (result) {
        defer.resolve(result);
      } else {
        restApi.get(params, function(data) {
          if (cacheId && cache) {
            cache.put(cacheId, data);
          }
          defer.resolve(data);
        }, function(data) {
          defer.reject(data.err);
        });
      }
      return defer.promise;
    };
  }]);
