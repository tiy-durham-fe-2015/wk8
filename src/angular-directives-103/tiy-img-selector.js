app.directive('tiyImgSelector', function () {
  return {
    restrict: 'E',

    scope: {
      label: '@',
      name: '@'
    },

    templateUrl: 'tiy-img-selector.html',

    controller: ['$scope', function ($scope) {
      var self = this;

      self.imgSrc = undefined;
      self.name = $scope.name;
      self.label = $scope.label;
    }],

    controllerAs: 'vm',

    link: function ($scope, element, attrs, ctrl) {
      var container = element[0];
      var input = container.querySelector('input');
      var preview = container.querySelector('.img-preview');

      input.onchange = function () {
        var reader = new FileReader();

        reader.onload = function (result) {
          $scope.$apply(function () {
            ctrl.imgSrc = result.target.result;
          });
        };

        reader.readAsDataURL(input.files[0]);
      };
    }
  }
});
