import React, { useState, useEffect }from 'react';
import TextInputField from './textInputField';
import NewTrack from './newTrack';
import ConfiguredTrack from './configuredTrack';
import ConfiguredTracks from './configuredTracks';
import nextId from "react-id-generator";
 /*
        TODO probably need to add states for everything that may change such as titles 
        
            PlaylistBuilder

                * InputBox (playlist title) - props: defaultText
                * InputBox (artist spotify uri) - props: defaultText

                ConfiguredTrack
                    * Track Name (default until filled with title)
                    * Settings Button
                    * Trash Button

                * NewTrack  (will also be called when user selects settings cog)
                    * Track title
                    * Add Button (this button will generate a new Configured track component)
                    * Reset Button
                    * Features
                        * Feature
                            * Name    
                            * Slider
                            * Toggle Switch


                Build Button

                Save Playlist Button
        */


function PlaylistBuilder(props) {
    const [tracks, setTracks] = useState([]);
    const [count, setCount] = useState(1);
    let UID;
    
    function appendConfiguredTrack(trackTitle) {
        UID = nextId();
        setCount(count + 1);
        setTracks( tracks => [...tracks, 
            <ConfiguredTrack 
                trackTitle={trackTitle}
                deleteConfiguredTrack={deleteConfiguredTrack}
                UID={UID} 
            />]);
    }

    function deleteConfiguredTrack(trackUID) {
        
        // setTracks(tracks.filter(track => track.uid !== trackUID));
        //DEBUGGING --trying to get these two values to match
        setTracks(tracks.filter(track => {
            console.log(track.UID);
            console.log(trackUID);
            // track.uid !== trackUID
        }));
        
        // console.log(tracks[0].uid); 
        // console.log(trackUID); 
        console.log('deleting track');
        // setTracks(tracks.filter((track) => (track.UID != trackUID)));
        // setTracks(tracks.filter((track) => (track != trackUID)));
        // setTracks( tracks => [...tracks, tracks.splice(i)]);
    }

    return (
        <div>
            <TextInputField defaultText="Playlist Title"/>
            <TextInputField defaultText="Artist Spotify URI"/>

            <ConfiguredTracks 
                tracks={tracks}
            />

            <NewTrack 
                trackTitle={"Track " + count} 
                appendConfiguredTrack={appendConfiguredTrack}
            />


        </div>
    );
}

export default PlaylistBuilder;