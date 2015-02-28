app.filter('withRole', function () {
  return function (items, role) {
    return (items || []).filter(function (person) {
      return person.role === role;
    });
  };
});
