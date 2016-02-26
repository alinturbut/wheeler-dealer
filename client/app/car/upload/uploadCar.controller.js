'use strict';

//class CarUploadController {
//    constructor($scope, $http) {
//        this.$scope = $scope;
//        this.$http = $http;
//    }
//
//    $scope.submit = function() {
//        alert($scope.file);
//        if ($scope.form.file.$valid && $scope.file) {
//            $scope.upload($scope.file);
//        }
//    }
//
//    $scope.upload = function(file) {
//        Upload.upload({
//            url: '/api/car/upload',
//            data: {file: file, 'username': $scope.username}
//        }).then(function (resp) {
//            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
//        }, function (resp) {
//            console.log('Error status: ' + resp.status);
//        }, function (evt) {
//            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
//            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
//        });
//    };
//}
//
//angular.module('wheelerDealerApp').controller('CarUploadController',CarUploadController);


angular.module('wheelerDealerApp').controller('CarUploadController', ['$scope', 'Upload', function ($scope, Upload) {
    // upload later on form submit or something similar
    $scope.submit = function() {
        if ($scope.form.file.$valid && $scope.file) {
            $scope.upload($scope.file);
        }
    };

    // upload on file select or drop
    $scope.upload = function (file) {
        Upload.upload({
            url: 'api/car/upload',
            data: {file: file, 'username': $scope.username}
        }).then(function (resp) {
            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
    };
}]);