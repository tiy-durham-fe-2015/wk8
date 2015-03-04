$(function () {

  // When the input[type=file] changes
  $('.img-selector').change(function () {
    // This only works in IE10 and up, but there are
    // libraries to shim it...
    //
    // Get a file reader which we'll use to load the image
    var reader = new FileReader();
    var file = this.files[0];

    // When the reader has finished reading the file, it
    // will call this function and pass it the result of
    // the file-read operation.
    reader.onload = function (result) {
      // result.target.result is the data which was read
      // from the FileReader...
      var img = $('<img class="img-thumbnail" />')
        .attr('src', result.target.result);

      var imgName = $('<span class="img-name"></span>')
        .text(file.name);

      $('.img-content').html(img).append(imgName);
      $('.upload-button').removeAttr('disabled');
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
    reader.readAsDataURL(file);
  });
});
