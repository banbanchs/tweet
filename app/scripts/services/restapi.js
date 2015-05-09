'use strict';

/**
 * @ngdoc service
 * @name tweetApp.restApi
 * @description
 * # restApi
 * Factory in the tweetApp.
 */
angular.module('tweetApp')
  .factory('restApi', ['$resource', function($resource) {
    return {
      tweet: $resource('/api/tweet/:id'),
      user: $resource('/api/users/:id', {},
          {update: { method: 'PUT' }})
    };
  }]);
