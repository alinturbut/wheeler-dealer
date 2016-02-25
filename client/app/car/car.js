'use strict';

angular.module('wheelerDealerApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/car', {
                templateUrl: 'app/car/upload/uploadCar.html',
                controller: 'CarUploadController',
                controllerAs: 'vm'
            });
    });