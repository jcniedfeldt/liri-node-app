# LIRI
LIRI (the Language Interpretation and Recognition Interface) is a commandline script for retrieving information for current movies, songs, and concerts from public Databases (APIs).

## NPM installations
The necessary NPM packages include:

 - axios
 - node-spotify-api
 - moment
 - fs
 - dotenv

## Command Descriptions

1. `node liri.js concert-this <artist/band name here>`

   * This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

     * Name of the venue

     * Venue location

     * Date of the Event 

2. `node liri.js spotify-this-song '<song name here>'`

   * This will show the following information about the song in your terminal/bash window

     * Artist(s)

     * The song's name

     * A preview link of the song from Spotify

     * The album that the song is from

   * If no song is provided then your program will default to "The Sign" by Ace of Base.

   * Utilizes the Spotify API.

   * The Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a **client id** and **client secret**:

   * Step One: Visit <https://developer.spotify.com/my-applications/#!/>

   * Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.

   * Step Three: Once logged in, navigate to <https://developer.spotify.com/my-applications/#!/applications/create> to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.

   * Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the [node-spotify-api package](https://www.npmjs.com/package/node-spotify-api).

3. `node liri.js movie-this '<movie name here>'`

   * This will output the following information to your terminal/bash window:

     ```
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
     ```

   * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

4. `node liri.js do-what-it-says`

   * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

   * Note that the random.txt file has slightly different format then command line.
   * This currently only works correctly with 1 command inserted.


## Examples
### concert-this
`node liri.js concert-this Maroon 5`

![concert-this Example](img/concert-this.png)

### movie-this
`node liri.js movie-this Ice Age`
![movie-this Example](img/movie-this.png)
### spotify-this-song
`node liri.js spotify-this-song Sound of Silence`
![spotify-this-song Example](img/spotify-this-song.png)
### do-what-it-says
`node liri.js do-what-it-says`
![do-what-it-says Example](img/do-what-it-says.png)