if(playlistTrack.loudness.length == 0 ||
(playlistTrack.loudness[0] <= fetchedTrack.loudness * 100) && 
(playlistTrack.loudness[1] >= fetchedTrack.loudness * 100)) {
    console.log('loudness: ' + fetchedTrack.loudness * 100 + ' is within [' + playlistTrack.loudness[0] + ',' + playlistTrack.loudness[1] + ']');

} else { break; }