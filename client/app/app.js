'use strict';

angular.module('wheelerDealerApp', [
  'wheelerDealerApp.auth',
  'wheelerDealerApp.admin',
  'wheelerDealerApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'validation.match',
  'ngFileUpload'
])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
