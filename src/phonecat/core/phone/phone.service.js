'use strict';

export default angular.
  module('core.phone').
  factory('Phone', ['$resource',
    function($resource) {
      return $resource('phonecat/phones/:phoneId.json', {}, {
        query: {
          method: 'GET',
          params: {phoneId: 'phones'},
          isArray: true
        }
      });
    }
  ]);
