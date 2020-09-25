if(playlistTrack.key.length == 0 ||
(playlistTrack.key[0] <= fetchedTrack.key * 100) && 
(playlistTrack.key[1] >= fetchedTrack.key * 100)) {
    console.log('key: ' + fetchedTrack.key * 100 + ' is within [' + playlistTrack.key[0] + ',' + playlistTrack.key[1] + ']');

} else { break; }