app.directive('tiyUserProfile', function () {
  return {
    // E = element
    // A = attribute
    // C = class (I wouldn't use this)
    // M = comment (I wouldn't use this, either)
    restrict: 'EA',

    scope: {
      // @ - Get value from attribute as a literal
      // = - Get value from controller (see directives-demo.html)
      // & - Allows binding to a function
      user: '=', // user is a name we've defined, and we can expect a user attribute in HTML
      cssClass: '@' // cssClass is something we've defined, and we can expect a css-class attrib in HTML
    },

    controller: ['$scope', function ($scope) {
      var self = this;

      self.user = $scope.user;
      self.cssClass = $scope.cssClass || '';
    }],

    controllerAs: 'vm',

    templateUrl: 'tiy-user-profile.html',

    link: function ($scope, element, attrs) {
      // If you need to manipulate the DOM, this is the
      // only legit place to do it in the Angular world
    }
  };
});
