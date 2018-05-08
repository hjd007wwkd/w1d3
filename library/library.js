var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  for (var playlist in library.playlists) {
    var id = playlist;
    var name = library.playlists[playlist].name;
    var tracks = library.playlists[playlist].tracks.length;
    console.log(`${id}: ${name} - ${tracks} tracks`);
  }
}


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  for (var track in library.tracks) {
    var id = track;
    var name = library.tracks[track].name;
    var artist = library.tracks[track].artist;
    var album = library.tracks[track].album;
    console.log(`${id}: ${name} by ${artist} (${album})`);
  }
}


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var pName = library.playlists[playlistId].name;
  var tracks = library.playlists[playlistId].tracks
  console.log(`${playlistId}: ${pName} - ${tracks.length} tracks`)
  for (var i = 0; i < tracks.length; i++) {
    var tId = library.tracks[tracks[i]].id;
    var name = library.tracks[tracks[i]].name;
    var artist = library.tracks[tracks[i]].artist;
    var album = library.tracks[tracks[i]].album;
    console.log(`${tId}: ${name} by ${artist} (${album})`);
  }
}


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  if(library.tracks[trackId] && !library.playlists[playlistId].tracks.includes(trackId)) {
      library.playlists[playlistId].tracks.push(trackId);
  }
}


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
  var tId = "t"+uid()
  library.tracks[tId] = {id: tId, name: name, artist: artist, album: album};
}

// adds a playlist to the library

var addPlaylist = function (name) {
  var pId = "p"+uid()
  library.playlists[pId] = {id: pId, name: name, tracks: []};
}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {
  for(var track in library.tracks) {
    var id = track;
    var name = library.tracks[track].name;
    var artist = library.tracks[track].artist;
    var album = library.tracks[track].album;
    if (name.toLowerCase().search(query) !== -1 || artist.toLowerCase().search(query) !== -1 || album.toLowerCase().search(query) !== -1) {
      console.log(`${id}: ${name} by ${artist} (${album})`);
    }
  }
}

