if(playlistTrack.duration.length == 0 ||
(playlistTrack.duration[0] <= fetchedTrack.duration_ms / 60000) && 
(playlistTrack.duration[1] >= fetchedTrack.duration_ms / 60000)) {
    console.log('duration_ms: ' + fetchedTrack.duration_ms * 100 + ' is within [' + playlistTrack.duration[0] + ',' + playlistTrack.duration[1] + ']');

} else { break; }