# LIRI BOT

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

## Getting Started
* in command line run node.index.js
* in command line run npm install
* get twitter and spotify keys
* create your own .env file
```js
# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

# Twitter API keys

TWITTER_CONSUMER_KEY=your-twitter-consumer-key
TWITTER_CONSUMER_SECRET=your-twitter-consumer-secret
TWITTER_ACCESS_TOKEN_KEY=your-access-token-key
TWITTER_ACCESS_TOKEN_SECRET=your-twitter-access-token-secret

```
* then give LIRI a command. You can use 
* `node index.js my-tweets` (to see the last 20 tweets of a user)
*  `node index.js spotify-this-song '<song name here>'`
* `node liri.js movie-this '<movie name here>'`
* `node liri.js do-what-it-says`


## Built With

* Node.js and various NPM packages.


## Author

* [Inna Leikina](https://github.com/innaleikina)

