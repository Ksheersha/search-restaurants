'use strict';

angular.
  module('restApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/restaurants', {
          template: '<rest-list></rest-list>'
        }).
        otherwise('/restaurants');
    }
  ]);
