'use strict';

// Register `restList` component, along with its associated controller and template
angular.
  module('restList').
  component('restList', {
    templateUrl: 'rest-list/rest-list.template.html',
    controller: ['Rest',
      function restListController(Rest) {
        this.restaurants = Rest.query();
        this.orderProp = 'dist';
      }
    ]
  });
