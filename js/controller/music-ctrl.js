'use strict';

angular.module('siteJack', []);

angular.module('siteJack')
.controller('MusicCtrl', function ($scope) {
  $scope.start = true;
  var _audio = new Audio();
  _audio.src = 'http://7xlcxw.com1.z0.glb.clouddn.com/TimeWillTell.mp3';
  _audio.onended = function () {
    $scope.start = !$scope.start;
    $scope.$apply();  // dirty data fresh
  };
  $scope._audio = _audio;
  $scope._audio.play();

  $scope.play = function () {
    if ($scope.start){
      $scope._audio.pause();
    } else {
       $scope._audio.play();
    }
    $scope.start = !$scope.start;
  };
});