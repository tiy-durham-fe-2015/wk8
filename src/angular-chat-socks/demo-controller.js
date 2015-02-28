app.controller('DemoCtrl', ['$http', '$scope', function ($http, $scope) {
  var self = this;
  // Create a web socket... This is "always on"... except
  // when the network disconnects it for some reason.
  // In that case, we'd have to manually detect the disconnect
  // and attempt to reconnect... Also, in older browsers,
  // WebSocket is not supported, so you need to detect that,
  // and revert to polling!
  //
  // Finally, WebSocket is a browser feature which should
  // definitely be hidden behind an angular factory so that
  // it is injected into the controller...
  var socket = new WebSocket('ws://localhost:8080');

  self.username = '';
  self.chatMessage = '';

  // Fetch all messages from the server
  $http.get('/chats').then(function (result) {
    self.messages = result.data;
  });

  // Send a message to the server
  self.sendMessage = function () {
    // We'll just silently ignore errors!!!
    $http.post('/chats', {
      text: self.chatMessage,
      user: self.username
    });

    self.chatMessage = '';
  };

  self.messages = [];

  // When the socket receives a message
  socket.onmessage = function (event) {
    // Tell Angular we're doing an update
    $scope.$apply(function () {
      // Parse the socket data and add it to our
      // messages array
      self.messages.push(JSON.parse(event.data));
    });
  };

}]);
