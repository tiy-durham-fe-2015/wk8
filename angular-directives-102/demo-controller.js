app.controller('DemoCtrl', function () {
  var self = this;

  self.users = [{
    username: 'chris'
  }, {
    username: 'tom'
  }];

  self.userToDelete = undefined;

  self.deleteUser = function (user) {
    self.userToDelete = user;
  };

  self.confirmDelete = function () {
    self.users = self.users.filter(function (user) {
      return user.username !== self.userToDelete.username;
    });

    self.userToDelete = undefined;
  };

  self.cancelDelete = function () {
    self.userToDelete = undefined;
  };
});
