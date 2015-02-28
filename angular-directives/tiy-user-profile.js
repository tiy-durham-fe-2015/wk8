app.directive('tiyUserProfile', function () {
  return {
    // E = element
    // A = attribute
    // C = class (I wouldn't use this)
    // M = comment (I wouldn't use this, either)
    restrict: 'E',
    scope: {
      // @ - Get value from attribute
      // = - Value has 2-way binding
      // & - Allows binding to a function
      user: '=',
      cssClass: '@'
    },
    controller: ['$scope', function ($scope) {
      this.user = $scope.user;
      this.cssClass = $scope.cssClass || '';
    }],
    controllerAs: 'vm',
    templateUrl: 'tiy-user-profile.html',
    link: function ($scope, element, attrs) {
      // If you need to manipulate the DOM, this is the
      // only legit place to do it in the Angular world
    }
  }
});
