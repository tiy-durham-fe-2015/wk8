app.directive('tiyModal', function () {
  return {
    restrict: 'E',

    // transclude specifies that we are going to allow
    // inner content
    transclude: true,

    scope: {
      onclose: '='
    },

    templateUrl: 'tiy-modal.html',

    controller: ['$scope', function ($scope) {
      var self = this;

      self.onclose = $scope.onclose;

      self.close = function () {
        self.onclose();
      };
    }],

    controllerAs: 'vm'
  }
});
