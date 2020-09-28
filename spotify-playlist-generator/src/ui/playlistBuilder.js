import React, { useState, useEffect }from 'react';
import TextInputField from './textInputField';
import TrackConfiguration from './trackConfiguration';
import ConfiguredTracks from './configuredTracks';
import FinishButtons from './finishButtons';
import Cookies from 'js-cookie';
import { useIsMount } from './useIsMount';

// 4frXpPxQQZwbCu3eTGnZEw - Thundercat

function PlaylistBuilder(props) {
    const isMount = useIsMount();
    const [count, setCount] = useState(0);
    // UI
    const [playlistTitle, setPlaylistTitle] =useState('');
    const [spotifyURI, setSpotifyURI] = useState('');
    const [tracks, setTracks] = useState([]);
    // API Data
    const [fetchedRecommended, setFetchedRecommended] = useState({});
    const [trackIDs, setTrackIDs] = useState([]);
    const [fetchedFeatures, setFetchedFeatures] = useState(-1);
    const [hasError, setErrors] = useState(false);
    // User Playlist
    const [playlistTracksJSON, setPlaylistTracksJSON] = useState([]);
    const [playlistIDs, setPlaylistIDs] = useState([]);

    // On retrieval of recommended tracks, extract track IDs
    useEffect(() => {
        if(fetchedRecommended) {
            if(fetchedRecommended === undefined) {
                setFetchedRecommended({});
            }
            
            let tmp = Object.values(fetchedRecommended);
            tmp = tmp.map( track => {
                return track.id;
            }).join(',');

            setTrackIDs(tmp);
        }

    }, [fetchedRecommended])

    // On extraction of track IDs, retrieve track features 
    useEffect(() => {
        fetchFeatures(
            'https://api.spotify.com/v1/audio-features?', 
            'ids=', 
            trackIDs);

    }, [trackIDs])

    // On retrieval of track features, compare against user's playlist criteria
    // then extract valid track IDs
    useEffect(() => {
        // if isn't the first mount (should probably rename)
        if(!isMount && fetchedFeatures) { 
            let recommendedTracksFeatures = Array.from(fetchedFeatures);
            let playlistCriteria = Array.from(playlistTracksJSON);
            let ids = [];

            for(let playlistTrack of playlistCriteria) {
                let trackFound = false;

                for(let fetchedTrack of recommendedTracksFeatures) {
                    if(isValidTrack(playlistTrack, fetchedTrack)) {
                        if(!ids.includes(fetchedTrack.id)) {
                            ids.push(fetchedTrack.id);
                            trackFound = true;
                            break;
                        }
                    }
                }
                
                if(!trackFound) {
                    ids.push('Track 404');
                }
            }
            
            setPlaylistIDs(ids)
        }
    }, [fetchedFeatures]);

    function isValidTrack(playlistTrack, fetchedTrack) {
        if(playlistTrack.instrumentalness.length == 0 ||
        (playlistTrack.instrumentalness[0] <= fetchedTrack.instrumentalness * 100) && 
        (playlistTrack.instrumentalness[1] >= fetchedTrack.instrumentalness * 100)) {

            if(playlistTrack.timeSignature.length == 0 ||
            (playlistTrack.timeSignature[0] <= fetchedTrack.time_signature) && 
            (playlistTrack.timeSignature[1] >= fetchedTrack.time_signature)) {
            
                if(playlistTrack.acousticness.length == 0 ||
                (playlistTrack.acousticness[0] <= fetchedTrack.acousticness * 100) && 
                (playlistTrack.acousticness[1] >= fetchedTrack.acousticness * 100)) {
                                                
                    if(playlistTrack.danceability.length == 0 ||
                    (playlistTrack.danceability[0] <= fetchedTrack.danceability * 100) && 
                    (playlistTrack.danceability[1] >= fetchedTrack.danceability * 100)) {

                    if(playlistTrack.speechiness.length == 0 ||
                        (playlistTrack.speechiness[0] <= fetchedTrack.speechiness * 100) && 
                        (playlistTrack.speechiness[1] >= fetchedTrack.speechiness * 100)) {

                            if(playlistTrack.loudness.length == 0 ||
                            (playlistTrack.loudness[0] <= fetchedTrack.loudness) && 
                            (playlistTrack.loudness[1] >= fetchedTrack.loudness)) {

                                if(playlistTrack.liveness.length == 0 ||
                                (playlistTrack.liveness[0] <= fetchedTrack.liveness * 100) && 
                                (playlistTrack.liveness[1] >= fetchedTrack.liveness * 100)) {

                                    if(playlistTrack.duration.length == 0 ||
                                    (playlistTrack.duration[0] <= fetchedTrack.duration_ms / 60000) && 
                                    (playlistTrack.duration[1] >= fetchedTrack.duration_ms / 60000)) {

                                        if(playlistTrack.valence.length == 0 ||
                                        (playlistTrack.valence[0] <= fetchedTrack.valence * 100) && 
                                        (playlistTrack.valence[1] >= fetchedTrack.valence * 100)) {

                                            if(playlistTrack.energy.length == 0 ||
                                            (playlistTrack.energy[0] <= fetchedTrack.energy * 100) && 
                                            (playlistTrack.energy[1] >= fetchedTrack.energy * 100)) {

                                                if(playlistTrack.tempo.length == 0 ||
                                                (playlistTrack.tempo[0] <= fetchedTrack.tempo) && 
                                                (playlistTrack.tempo[1] >= fetchedTrack.tempo)) {

                                                    if(playlistTrack.mode.length == 0 ||
                                                    (playlistTrack.mode[0] <= fetchedTrack.mode) && 
                                                    (playlistTrack.mode[1] >= fetchedTrack.mode)) {

                                                        if(playlistTrack.key.length == 0 ||
                                                        (playlistTrack.key[0] <= fetchedTrack.key) && 
                                                        (playlistTrack.key[1] >= fetchedTrack.key)) {
                                                            // console.log('----');
                                                            // console.log('instrumentalness: ' + fetchedTrack.instrumentalness * 100 + ' is within [' + playlistTrack.instrumentalness[0] + ',' + playlistTrack.instrumentalness[1] + ']');
                                                            // console.log('time_signature: ' + fetchedTrack.time_signature + ' is within [' + playlistTrack.timeSignature[0] + ',' + playlistTrack.timeSignature[1] + ']');
                                                            // console.log('acousticness: ' + fetchedTrack.acousticness * 100 + ' is within [' + playlistTrack.acousticness[0] + ',' + playlistTrack.acousticness[1] + ']');
                                                            // console.log('danceability: ' + fetchedTrack.danceability * 100 + ' is within [' + playlistTrack.danceability[0] + ',' + playlistTrack.danceability[1] + ']');
                                                            // console.log('speechiness: ' + fetchedTrack.speechiness * 100 + ' is within [' + playlistTrack.speechiness[0] + ',' + playlistTrack.speechiness[1] + ']');
                                                            // console.log('loudness: ' + fetchedTrack.loudness + ' is within [' + playlistTrack.loudness[0] + ',' + playlistTrack.loudness[1] + ']');
                                                            // console.log('liveness: ' + fetchedTrack.liveness * 100 + ' is within [' + playlistTrack.liveness[0] + ',' + playlistTrack.liveness[1] + ']');
                                                            // console.log('duration_ms: ' + fetchedTrack.duration_ms / 60000 + ' is within [' + playlistTrack.duration[0] + ',' + playlistTrack.duration[1] + ']');
                                                            // console.log('valence: ' + fetchedTrack.valence * 100 + ' is within [' + playlistTrack.valence[0] + ',' + playlistTrack.valence[1] + ']');
                                                            // console.log('energy: ' + fetchedTrack.energy * 100 + ' is within [' + playlistTrack.energy[0] + ',' + playlistTrack.energy[1] + ']');
                                                            // console.log('tempo: ' + fetchedTrack.tempo + ' is within [' + playlistTrack.tempo[0] + ',' + playlistTrack.tempo[1] + ']');
                                                            // console.log('mode: ' + fetchedTrack.mode + ' is within [' + playlistTrack.mode[0] + ',' + playlistTrack.mode[1] + ']');
                                                            // console.log('key: ' + fetchedTrack.key + ' is within [' + playlistTrack.key[0] + ',' + playlistTrack.key[1] + ']');

                                                            return true; 
                                                        }
                                                    } else { return false; }
                                                } else { return false; }
                                            } else { return false; }
                                        } else { return false; }
                                    } else { return false; }
                                } else { return false; }
                            } else { return false; }
                        } else { return false; }
                    } else { return false; }
                } else { return false; }
            } else { return false; }
        } else { return false; }
    }
    
    async function fetchFeatures(endpointURL, queryParam, query) {
        const token = Cookies.get('spotifyAuthToken'); 
        
        let fetchURL = endpointURL + queryParam + query;
        
        const res = await fetch(fetchURL, {
            method: 'GET',
            headers: {
                "Content-Type":"application/json", 
                "Authorization": "Bearer " + token
            }
        });
        
        res
            .json()
            .then(res => setFetchedFeatures(res.audio_features))
            .catch(err => setErrors(err));
    }
    
    return (
        <div>
            <TextInputField 
                defaultText="Playlist Title"
                onChange={setPlaylistTitle}
            />
            <TextInputField 
                defaultText="Artist Spotify URI"
                onChange={setSpotifyURI}
            />

            <FinishButtons 
                playlistTrackJSON={playlistTracksJSON}     
                playlistTitle={playlistTitle}
                spotifyURI={spotifyURI}
                setFetchedRecommended={setFetchedRecommended}
                setFetchedFeatures={setFetchedFeatures}
                trackIDs={trackIDs}
                setErrors={setErrors}
            />
           
            <ConfiguredTracks 
                tracks={tracks}
                count={count}
            />

            <TrackConfiguration 
                trackTitle={"Track " + `${count + 1}`} 
                setTracks={setTracks}
                setPlaylistTracksJSON={setPlaylistTracksJSON}
                setCount={setCount}
            />
        </div>
    );
}

export default PlaylistBuilder;