'use strict';

angular.
  module('core.rest').
  factory('Rest', ['$resource',
    function($resource) {
      return $resource('restaurants/:restId.json', {}, {
        query: {
          method: 'GET',
          params: {restId: 'restaurants'},
          isArray: true
        }
      });
    }
  ]);
