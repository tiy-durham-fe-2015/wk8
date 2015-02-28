app.filter('possessive', function() {
  return function(input) {
    input = input || '';
    var suffix = input.slice(-1).toLowerCase() === 's' ? '\'' : '\'s';
    return input + suffix;
  };
});
