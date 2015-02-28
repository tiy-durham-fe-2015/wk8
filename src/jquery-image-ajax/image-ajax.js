$(function () {

  function ajaxUpload (form) {
    // Get the selected file
    var imgSelector = $('input[type=file]', form),
        file = imgSelector[0].files[0];

    // Create a FormData object to represent the form
    // being posted (FormData is a built-in object).
    var formData = new FormData();

    formData.append(imgSelector.attr('name'), file);

    $.ajax({
      url: form.attr('action'), // The URL to post to
      type: form.attr('method'), // The HTTP method (e.g. POST)
      data: formData, // The data to send to the server
      processData: false, // Disable jQuery's mangling of the data
      contentType: false, // Prevent jQuery from adding the content-type header
      dataType: 'json' // What we expect back from server
    }).done(function (data) {
      $('img').remove();
      $('body').append('<img src="' + data.img + '">');
    }).fail(function () {
      console.log(arguments);
      alert('Failed to upload!');
    });

  }

  $('form').submit(function (e) {
    e.preventDefault();
    e.stopPropagation();

    ajaxUpload($(this));

    return false;
  });

});
