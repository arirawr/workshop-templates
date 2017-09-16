Spotify API Workshop 1
=========================

A basic Node app that integrates with the Spotify API.

This app uses the *Client Credentials Flow* for authentication, which means you can only get non-user-specific data.

## Getting Started

1. After registering your app at developer.spotify.com, put your app's client ID and secret (which you can find in the My Apps dashboard) into the `.env`.

2. Click on "Show Live" in Glitch and verify that your app works (you should see "Dancing Queen" and album art).

## Challenges

1. Change the song that shows up. *(Hint: look in server.js for the API call)*

2. Display the artist name in addition to the song name. *(Hint: look at the whole track object to find the artist name)*

3. Make the image link to the song on Spotify. *(Hint: look at the whole track object to find the song URL)*

4. Use a different endpoint to get totally different data! *(Hint: look at [this repository](https://github.com/thelinmichael/spotify-web-api-node/) for examples of all the calls you can make)*