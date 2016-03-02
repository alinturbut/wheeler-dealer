'use strict';

angular.module('wheelerDealerApp', [
  'wheelerDealerApp.auth',
  'wheelerDealerApp.admin',
  'wheelerDealerApp.constants',
  'wheelerDealerApp.uploadCar',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'validation.match',
  'ngFileUpload',
  'ngImgCrop'
])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
