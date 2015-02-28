app.directive('tiyImgSelector', function () {
  return {
    restrict: 'E',

    scope: {
      label: '@'
    },

    templateUrl: 'tiy-img-selector.html',

    controller: ['$scope', function ($scope) {
      var self = this;

      self.label = $scope.label;
    }],

    controllerAs: 'vm',

    link: function ($scope, element, attrs) {
      var container = element[0];
      var input = container.querySelector('input');
      var preview = container.querySelector('.img-preview');

      input.onchange = function () {
        var reader = new FileReader();

        reader.onload = function (result) {
          preview.innerHTML = '<img src="' + result.target.result + '">';
        };

        reader.readAsDataURL(input.files[0]);
        
      };
    }
  }
});
