var app = angular.module("bookmarks", []);
app.controller("BookmarksCtrl", ["$scope", function($scope) {
  var vm = this;
  chrome.bookmarks.getTree(function(data) {
    $scope.$apply(function() {
      console.log(data);
      vm.tree = data[0];
    });
  })
}]);
app.directive('autofocus', ['$timeout', function($timeout) {
  return {
    restrict: 'A',
    link : function($scope, $element) {
      $timeout(function() {
        $element[0].focus();
      });
    }
  }
}]);
