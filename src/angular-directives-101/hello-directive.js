app.directive('helloDir', function () {
  return {
    restrict: 'E',

    templateUrl: 'hello-directive.html',

    scope: {
      user: '@'
    },

    controller: ['$scope', function ($scope) {
      this.name = $scope.user;
    }],

    controllerAs: 'vm'
  };
});
