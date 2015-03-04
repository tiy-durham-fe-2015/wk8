$(function () {
  $('.upload').submit(function (e) {
    e.preventDefault();

    // var file = document.querySelector('[name="demo-img"]').files[0];
    var file = $('[name="demo-img"]')[0].files[0];
    var fileData = new FormData();

    fileData.append('demo-img', file);

    $.ajax({
      type: "POST",
      url: "/api/imgs",
      data: fileData,
      processData: false, // Don't process the files (ie. don't turn it into a string)
      contentType: false //Don't compute the content type
    })
    .done(function( msg ) {
      alert( "Data Saved: " + JSON.stringify(msg));
    });
  });
})
