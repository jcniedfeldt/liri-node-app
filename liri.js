// LIRI
// Purpose is to to take in parameters and search multiple databases for relevant results

// npm installations

// dotenv will be used to set process.env variables, including spotify_id and secret

require("dotenv").config();
var keys = require("./keys");
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);