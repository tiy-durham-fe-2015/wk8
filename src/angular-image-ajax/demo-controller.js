app.controller('DemoCtrl', ['$log', 'imgService', function ($log, imgService) {
  var self = this;

  // A helper message to display when something goes wrong
  self.message = undefined;

  // This object is used to get/set the selected image's
  // input value as well as its remote URL
  self.selectedImage = {
    value: undefined,
    url: undefined
  };

  self.uploadImage = function () {
    if (!self.selectedImage.value) {
      self.message = 'Please select an image';
      return;
    }

    self.message = undefined;

    imgService.upload(self.selectedImage.value)
      .then(function (result) {
        self.selectedImage.url = result.data.img;
      }).catch(function (err) {
        $log.log(err);
        self.message = 'Failed to upload!';
      });
  };
}]);
