require("dotenv").config();
var request = require("request");
var fs = require("fs");
var Spotify = require('node-spotify-api');
var Twitter = require('twitter');



var keys = require('./keys');

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var command = process.argv[2];
var searchTerm = process.argv[3]

function displaySpotifyResults(song) {
    spotify.search({
        type: 'track',
        query: song,
        limit: 1
    }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        } else {

            var songInfo = data.tracks.items[0];
            console.log(songInfo.artists[0].name)
            console.log(songInfo.name)
            console.log(songInfo.album.name)
            console.log(songInfo.preview_url)

        }
    });
}

function displayMovieResults(movie) {
    request("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy", function (error, response, body) {
        // If the request is successful (i.e. if the response status code is 200)
        if (!error && response.statusCode === 200) {
            // Parse the body of the site and recover just the imdbRating
            // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
            // console.log("The movie's rating is: " + body);
            console.log("The movie's title is: " + JSON.parse(body).Title);
            console.log("The movie's release year is: " + JSON.parse(body).Year);
            console.log("The movie's IMDB rating is: " + JSON.parse(body).imdbRating);
            console.log("The movie's Rotten Tomatoes rating is: " + JSON.parse(body).Ratings[1].Value);
            console.log("The movie was produced in: " + JSON.parse(body).Country);
            console.log("The movie's language: " + JSON.parse(body).Language);
            console.log("The movie's plot is: " + JSON.parse(body).Plot);
            console.log("The movie's actors are: " + JSON.parse(body).Actors);

        }
    });


}

function displayTwitterResults() {
    var params = {
        screen_name: 'annajon68939907'
    };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            for (var i = 0; i < tweets.length; i++) {
                console.log(tweets[i].created_at);
                console.log(tweets[i].text);
            }
        }
    });
}

if (command === "my-tweets") {
    displayTwitterResults();

} else if (command === "spotify-this-song") {
    if (searchTerm) {
        displaySpotifyResults(searchTerm);
    } else {
        displaySpotifyResults("The Sign");
    }

} else if (command == "movie-this") {
    if (searchTerm) {
        displayMovieResults(searchTerm);
    } else {
        displayMovieResults("Mr Nobody");
    }

} else if (command == "do-what-it-says") {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        // console.log(data);
        var dataArr = data.split(",");
        console.log(dataArr);
        if (dataArr[0] == "spotify-this-song") {
            displaySpotifyResults(dataArr[1]);
        } else if (dataArr[0] == "movie-this") {
            displayMovieResults(dataArr[1]);
        } else if (dataArr[0] == "my-tweets") {
            displayTwitterResults();
        }
    });

}