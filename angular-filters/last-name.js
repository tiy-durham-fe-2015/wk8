app.filter('lastName', function() {
  return function(input) {
    var words = (input || '').match(/\w+/g);
    return words[words.length - 1];
  };
});
