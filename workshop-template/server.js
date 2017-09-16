// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();


// Initialize the Pokemon API wrapper
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();


// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
// Serve the HTML
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


//---------------------------------------------------------------------//
//                        POKEMON API CALLS                            //
//---------------------------------------------------------------------//


//----- Get a Pokemon image! -----//

app.get("/pokemon-image", function(request, response) {
  // Ask the API for data about Pikachu
  P.getPokemonByName("pikachu")
    .then(function(data) {
      // Respond with the front default image
      response.json(data.sprites['front_default'])
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
});

//----- Get the total Pokemon count! -----//

app.get("/pokemon-count", function(request, response) {
  // Ask the API for all Pokemon
  P.getPokemonsList()
    .then(function(data) {
      // Respond with the count of all Pokemon
      response.json(data.count)
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
});

//----- Get all Pokemon of a specific color! -----//

app.get("/pokemon-color", function(request, response) {
  // Ask the API for all Pokemon who are yellow
  P.getPokemonColorByName("yellow")
    .then(function(data) {
      // Respond with the array of Pokemon species
      response.json(data.pokemon_species)
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
});

//---------------------------------------------------------------------//
//---------------------------------------------------------------------//


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
