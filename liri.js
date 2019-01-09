// LIRI
// Purpose is to to take in parameters and search multiple databases for relevant results
DEBUG = false;

function printDebug(arg) {
    if (DEBUG) {
        console.log(arg);
    }
}
// npm installations

// dotenv will be used to set process.env variables, including spotify_id and secret

require("dotenv").config();
var axios = require("axios");
var keys = require("./keys");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var moment = require('moment');
moment().format();


[node, processname, command, ...args] = process.argv;
//TODO combine all the arguments into one string
printDebug(`Inputs:\n  command: ${command}\n  args:    ${args.join(',')}`);

// concert-this, spotify-this-song, movie-this, do-what-it-says
if (command === "concert-this") {
    printDebug("Processing concert-this...");
    artist = args.join("+");
    let query = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    axios.get(query)
        .then(function (response) {
            // console.log(response.data);
            printDebug(response);
            response.data.forEach(event => {
                let venue = event.venue;
                let vname = venue.name;
                let vloc = `${venue.city}, ${venue.region}, ${venue.country}`;
                let vdatetime = moment(event.datetime);
                console.log(`Event:\n  Name: ${vname}\n  Location: ${vloc}\n  Date: ${vdatetime.format("MM/DD/YYYY")}`);
            });
        })
        .catch(function (error) {
            console.log(error);
        });
} else if (command === "spotify-this-song") {
    printDebug("Processing spotify-this-song...");
    let song = "The Sign";
    if (args.length > 0) {
        song = args.join(" ");
    }
    spotify.search({ type: 'track', query: song, limit: 10 }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        data.tracks.items.forEach(track => {
            let artists = [];
            track.artists.forEach(artist => {
                artists.push(artist.name);
            });
            // console.log(track);
            console.log(`Track: ${track.name}\n  Artist: ${artists.join(', ')}\n  Preview: ${track.preview_url}\n  Album: ${track.album.name}`);
        });
        // console.log(data.tracks.items[0].artists);
    });

} else if (command === "movie-this") {
    printDebug("Processing movie-this...");

} else if (command === "do-what-it-says") {
    printDebug("Processing do-what-it-says...");
    // TODO if an argument is passed, it's an error

} else {
    printDebug("Not a valid argument.");
    // TODO raise an exception
}