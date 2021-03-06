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
             },
// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

  printPlaylists: function () {
    for (var playlist in this.playlists) {
      var id = playlist;
      var name = this.playlists[playlist].name;
      var tracks = this.playlists[playlist].tracks.length;
      console.log(`${id}: ${name} - ${tracks} tracks`);
    }
  },
  // prints a list of all tracks, in the form:
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  // t03: Four Thirty-Three by John Cage (Woodstock 1952)

  printTracks: function () {
    for (var track in this.tracks) {
      var id = track;
      var name = this.tracks[track].name;
      var artist = this.tracks[track].artist;
      var album = this.tracks[track].album;
      console.log(`${id}: ${name} by ${artist} (${album})`);
    }
  },
  // prints a list of tracks for a given playlist, in the form:
  // p01: Coding Music - 2 tracks
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)

  printPlaylist: function (playlistId) {
    var pName = this.playlists[playlistId].name;
    var tracks = this.playlists[playlistId].tracks
    console.log(`${playlistId}: ${pName} - ${tracks.length} tracks`)
    for (var i = 0; i < tracks.length; i++) {
      var tId = this.tracks[tracks[i]].id;
      var name = this.tracks[tracks[i]].name;
      var artist = this.tracks[tracks[i]].artist;
      var album = this.tracks[tracks[i]].album;
      console.log(`${tId}: ${name} by ${artist} (${album})`);
    }
  },
  // adds an existing track to an existing playlist

  addTrackToPlaylist: function (trackId, playlistId) {
    if(this.tracks[trackId] && !this.playlists[playlistId].tracks.includes(trackId)) {
        this.playlists[playlistId].tracks.push(trackId);
    }
  },
  // generates a unique id
  // (use this for addTrack and addPlaylist)

  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  // adds a track to the library

  addTrack: function (name, artist, album) {
    var tId = "t"+this.uid()
    this.tracks[tId] = {id: tId, name: name, artist: artist, album: album};
  },
  // adds a playlist to the library

  addPlaylist: function (name) {
    var pId = "p"+this.uid()
    this.playlists[pId] = {id: pId, name: name, tracks: []};
  },
  // STRETCH:
  // given a query string string, prints a list of tracks
  // where the name, artist or album contains the query string (case insensitive)
  // tip: use "string".search("tri")
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

  printSearchResults: function(query) {
    for(var track in this.tracks) {
      var id = track;
      var name = this.tracks[track].name;
      var artist = this.tracks[track].artist;
      var album = this.tracks[track].album;
      if (name.toLowerCase().search(query) !== -1 || artist.toLowerCase().search(query) !== -1 || album.toLowerCase().search(query) !== -1) {
        console.log(`${id}: ${name} by ${artist} (${album})`);
      }
    }
  }
}