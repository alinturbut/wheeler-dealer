'use strict';

angular.module('wheelerDealerApp.uploadCar').controller('CarUploadController', ['$scope', 'Upload', function ($scope, Upload) {
  $scope.myImage = '';

  $scope.submit = function () {
    if ($scope.form.file.$valid && $scope.file) {
      assignImageCrop($scope.file);
      $scope.upload($scope.file);
    }
  };

  // upload on file select or drop
  $scope.upload = function (file) {
    Upload.upload({
      url: 'api/car/upload',
      data: {file: file, 'username': $scope.username}
    }).then(function (resp) {
      console.log('Success ' + resp.config.data.file.name + ' uploaded. Response: ' + resp.path);
    }, function (resp) {
      console.log('Error status: ' + resp.status);
    }, function (evt) {
      var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
      console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
      $scope.path = "assets/images/uploads/" + evt.config.data.file.name;
    });
  };

  function assignImageCrop(file) {
    var reader = new FileReader();
    reader.onload = function (evt) {
      $scope.$apply(function ($scope) {
        $scope.myImage = evt.target.result;
      });
    };
    reader.readAsDataURL(file);
  }
}]);
