require("dotenv").config();
var Spotify = require('node-spotify-api');
var Twitter = require('twitter');



var keys = require('./keys');

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var command = process.argv[2];
var songTitle = process.argv[3]


if (command === "my-tweets") {
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

} else if (command === "spotify-this-song") {
    spotify.search({
        type: 'track',
        query: songTitle,
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


} else if (command == "movie-this") {

} else if (command == "do-what-it-says") {

}