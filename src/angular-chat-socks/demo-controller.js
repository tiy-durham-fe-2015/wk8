app.controller('DemoCtrl', ['$http', '$scope', '$timeout', function ($http, $scope, $timeout) {
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
  //createSocket();

  var socket = new WebSocket('ws://localhost:8080');

  self.username = '';
  self.chatMessage = '';
  self.status = '';
  self.messages = [];

  socket.onmessage = function (event) {
    // Tell Angular we're doing an update
    $scope.$apply(function () {
      // Parse the socket data and add it to our
      // messages array
      self.messages.push(JSON.parse(event.data));
    });
  };

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

  // TODO:
  // Put this stuff into a service
  // Make the service have a 'reconnect' function
  // Make the service raise events when things go south
  // Ability for user to close the socket
  // Ability for user to force reconnect now instead of waiting for countdown
  // function createSocket(reconnectInterval) {
  //   // Create a new socket and connect to our socket server...
  //   var socket = new WebSocket('ws://localhost:8080');
  //
  //   reconnectInterval = reconnectInterval || 1000;
  //
  //   // When the socket is open, we are free to send messages
  //   socket.onopen = function () {
  //     $scope.$apply(function () {
  //       self.status = '';
  //       reconnectInterval = 1000;
  //     });
  //   };
  //
  //   // When the socket receives a message
  //   socket.onmessage = function (event) {
  //     // Tell Angular we're doing an update
  //     $scope.$apply(function () {
  //       // Parse the socket data and add it to our
  //       // messages array
  //       self.messages.push(JSON.parse(event.data));
  //     });
  //   };
  //
  //   // When the socket closes...
  //   socket.onclose = function (event) {
  //     // If we closed for any reason other than that the user chose
  //     // to close the socket...
  //     if (event.code !== 1000) {
  //       attemptReconnect();
  //     }
  //   };
  //
  //   function attemptReconnect() {
  //     var secondsToReconnect = Math.ceil(reconnectInterval / 1000);
  //
  //     function updateConnectStatus () {
  //       if (secondsToReconnect > 0) {
  //         self.status = 'Attempting reconnect in ' + secondsToReconnect + ' seconds';
  //         --secondsToReconnect;
  //         $timeout(updateConnectStatus, 1000);
  //       } else {
  //         self.status = 'Connecting...';
  //         socket = createSocket(Math.ceil(Math.min(reconnectInterval * 1.5, 60000)));
  //       }
  //     }
  //
  //     updateConnectStatus();
  //   }
  // }

}]);
