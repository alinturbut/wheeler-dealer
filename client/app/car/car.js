'use strict';

angular.module('wheelerDealerApp.uploadCar')
    .config(function($routeProvider) {
        $routeProvider
            .when('/car', {
                templateUrl: 'app/car/upload/uploadCar.html',
                controller: 'CarUploadController',
                controllerAs: 'uploadCar'
            });
    });
