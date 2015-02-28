$(function () {

  // When the input[type=file] changes
  $('.img-selector').change(function () {
    // This only works in IE10 and up, but there are
    // libraries to shim it...
    //
    // Get a file reader which we'll use to load the image
    var reader = new FileReader();

    reader.onload = function (result) {
      var img = $('<img />');
      img.attr('src', result.target.result);
      $('.img-preview img').remove();
      $('.img-preview').append(img);
    };

    reader.readAsDataURL($(this)[0].files[0]);
  });
});
