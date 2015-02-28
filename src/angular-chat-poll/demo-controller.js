app.controller('DemoCtrl', ['$http', '$timeout', function ($http, $timeout) {
  var self = this;

  self.username = '';
  self.chatMessage = '';

  self.sendMessage = function () {
    var msg = {
      text: self.chatMessage,
      user: self.username
    };

    self.messages.push(msg);

    self.chatMessage = '';

    // We'll just silently ignore errors!!!
    $http.post('/chats', msg);
  };

  self.messages = [{
    text: 'Hello'
  }, {
    text: 'World'
  }];

  function getMessages() {
    $http.get('/chats').then(function (result) {
      self.messages = result.data;
    }).finally(function () {
      $timeout(getMessages, 1000);
    });
  }

  getMessages();

}]);
