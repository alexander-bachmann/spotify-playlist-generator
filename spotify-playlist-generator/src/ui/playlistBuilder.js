import React, { useState, useEffect }from 'react';
import TextInputField from './textInputField';
import TrackConfiguration from './trackConfiguration';
import ConfiguredTracks from './configuredTracks';
import FinishButtons from './finishButtons';
import Cookies from 'js-cookie'
 /*
        TODO probably need to add states for everything that may change such as titles 
        
            PlaylistBuilder

                * InputBox (playlist title) - props: defaultText
                * InputBox (artist spotify uri) - props: defaultText

                ConfiguredTrack
                    * Track Name (default until filled with title)
                    * Settings Button
                    * Trash Button

                * TrackConfiguration  (will also be called when user selects settings cog)
                    * Track title
                    * Add Button (this button will generate a new Configured track component)
                    * Reset Button
                    * Features
                        * Feature
                            * Name    
                            * Slider
                            * Toggle Switch

                * Build Button
                * Save Button
        */


function PlaylistBuilder(props) {
    const [playlistTitle, setPlaylistTitle] =useState('');
    const [spotifyURI, setSpotifyURI] = useState('');
    const [count, setCount] = useState(0);
    const [tracks, setTracks] = useState([]);
    const [playlistTracksJSON, setPlaylistTracksJSON] = useState([]);
    const [fetchedRecommended, setFetchedRecommended] = useState({});
    const [trackIDs, setTrackIDs] = useState([]);
    const [fetchedFeatures, setFetchedFeatures] = useState({});
    const [hasError, setErrors] = useState(false);

    useEffect(() => {
        let tmp = Object.values(fetchedRecommended);
        
        tmp = tmp.map( track => {
            return track.id;
        }).join(',');
        
        setTrackIDs(tmp);

    }, [fetchedRecommended])

    useEffect(() => {
        fetchFeatures(
            'https://api.spotify.com/v1/audio-features?', 
            'ids=', 
            trackIDs);

    }, [trackIDs])

    useEffect(() => {

        // console.log(playlistTracksJSON);

        let recommendedTracksFeatures = Array.from(fetchedFeatures);
        let playlistCriteria = Array.from(playlistTracksJSON);


        recommendedTracksFeatures.forEach((track) => {
            if(track !== null) {
                console.log(track.acousticness);


                playlistCriteria.forEach((trackCriteria) => {
                    console.log(trackCriteria.acousticness)
                })
            }
        })


    }, [fetchedFeatures]);
    
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
            {/* these will be deleted.. they are just proof that state is being saved */}
            <h5>{playlistTitle}</h5>
            <h5>{spotifyURI}</h5>

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