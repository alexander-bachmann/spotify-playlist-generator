if((playlistTrack.instrumentalness[0] <= fetchedTrack.instrumentalness * 100) && 
(playlistTrack.instrumentalness[1] >= fetchedTrack.instrumentalness * 100)) {
    console.log(fetchedTrack.instrumentalness * 100 + ' is within [' + playlistTrack.instrumentalness[0] + ',' + playlistTrack.instrumentalness[1] + ']');
} else { break; }