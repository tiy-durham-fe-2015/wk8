app.directive('tiyImgSelector', function () {
  return {
    // Element only support
    restrict: 'E',

    // The template used to render the directive
    templateUrl: 'tiy-img-selector.html',

    controllerAs: 'vm',

    // The directive tag will be replaced by the directive template
    replace: true,

    scope: {
      // The directive takes name as an attribute value
      name: '@',

      // The directive binds file to a property of the caller
      file: '='
    },

    controller: ['$scope', function ($scope) {
      var self = this;

      self.file = $scope.file;
      self.name = $scope.name;
    }],

    link: function ($scope, element, attrs, ctrl) {
      var input = element[0];

      input.onchange = function () {
        var formData = new FormData();

        formData.append($scope.name.trim(), input.files[0]);

        ctrl.file.value = formData;
      };
    }
  }
});
