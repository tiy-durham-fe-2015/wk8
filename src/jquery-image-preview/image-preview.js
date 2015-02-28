$(function () {

  // When the input[type=file] changes
  $('.img-selector').change(function () {
    // This only works in IE10 and up, but there are
    // libraries to shim it...
    //
    // Get a file reader which we'll use to load the image
    var reader = new FileReader();

    // When the reader has finished reading the file, it
    // will call this function and pass it the result of
    // the file-read operation.
    reader.onload = function (result) {
      var img = $('<img />');
      // result.target.result is the data which was read
      // from the FileReader...
      img.attr('src', result.target.result);

      $('.img-preview img').remove();
      $('.img-preview').append(img);
    };

    // Tell the reader to read the selected file, and
    // get its content as a data-URL... for more on
    // data URLs, see this:
    //
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/data_URIs
    //
    // Basically, we are going to get the image content as
    // a base64-encoded string which can be directly assigned
    // to an img element's src attribute.
    reader.readAsDataURL(this.files[0]);
  });
});
