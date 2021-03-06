var app = require('./express-app'),
    requireDir = require('require-dir');

// Require the API controllers
requireDir('./controllers', { recurse: true });

// Start the server
var server = app.listen(3000, function () {
  var host = server.address().address
      port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
