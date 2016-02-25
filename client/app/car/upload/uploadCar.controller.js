'use strict';

class CarUploadController {
    constructor($scope, $http) {
        this.$scope = $scope;
        this.$http = $http;
    }

    submit() {
        if ($scope.form.file.$valid && $scope.file) {
            $scope.upload($scope.file);
        }
    }

    upload(file) {
        Upload.upload({
            url: 'upload/url',
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
}

angular.module('wheelerDealerApp').controller('CarUploadController',CarUploadController);