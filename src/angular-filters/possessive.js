app.filter('possessive', function() {
  // This is the actual filter. It takes a single parameter,
  // which is the value that we are going to modify. Whatever
  // is returned by this function is what will be displayed
  // (or passed along to the next filter in a filter chain).
  return function(input) {
    // If input is null/undefined, make it an empty string
    input = input || '';

    // If the last letter is an 's', just stick an apostrophe
    // after it, otherwise, stick a 's after it
    var suffix = input.slice(-1).toLowerCase() === 's' ? '\'' : '\'s';

    // Return the value we want to display
    return input + suffix;
  };
});
