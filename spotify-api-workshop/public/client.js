// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
    
  $.get('/myendpoint', function(data) {
    // "Data" is the track object we get from the API. See server.js for the function that returns it.
    console.log(data)
    
    // Display the track name
    $('#data-container').text(data.name);
    
    // Display the album art
    var img = $('<img id="albumart"/>');
    img.attr('src', data.album.images[0].url);
    img.appendTo('#data-container');
  });

});
