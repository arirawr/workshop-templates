// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  
  $.get('/pokemon-image', function(image) {
    // Set the 'src' of the image
    $('#pokemon-image').attr('src', image);
  });
  
  $.get('/pokemon-count', function(count) {
    // Add the count
    $('#pokemon-count').text(count);
  });
  
  $.get('/pokemon-color', function(pokemons) {
    // Loop through each pokemon
    pokemons.forEach(function(p) {
      // Add the pokemon's name to the list
      $('<li></li>').text(p.name).appendTo('#pokemon-color');
    });
  });

});
