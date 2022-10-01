// const axios = require("axios");

const playlistTracks = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/playlist_tracks/',
  params: {id: '37i9dQZF1DX4Wsb4d7NKfP', offset: '0', limit: '100'},
  headers: {
    'X-RapidAPI-Key': '40d1032632mshda3c84c837afc5ap12a269jsnf3bf560cef23',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }
};

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });