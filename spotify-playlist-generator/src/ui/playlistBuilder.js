import React, { useState, useEffect }from 'react';
import TextInputField from './textInputField';
import TrackConfiguration from './trackConfiguration';
import ConfiguredTrack from './configuredTrack';
import ConfiguredTracks from './configuredTracks';
import nextId from "react-id-generator";
import FinishButtons from './finishButtons';
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

            <FinishButtons />
           
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