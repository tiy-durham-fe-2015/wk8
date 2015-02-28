app.filter('withRole', function () {
  // Filters can take more than one parameter.
  // In this case, we are passing in a role
  return function (items, role) {
    return (items || []).filter(function (person) {
      return person.role === role;
    });
  };
});
