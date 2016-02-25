'use strict';

angular.module('wheelerDealerApp.auth', [
  'wheelerDealerApp.constants',
  'wheelerDealerApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
