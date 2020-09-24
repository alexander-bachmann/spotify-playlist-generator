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
    const [count, setCount] = useState(0);
    const [tracks, setTracks] = useState([]);
    const [UID, setUID] = useState(nextId()); 
    
    function appendConfiguredTrack(trackTitle) {
        setUID(nextId());
        setCount(count + 1);
        setTracks( tracks => [...tracks, 
            <ConfiguredTrack 
                trackTitle={trackTitle}
                deleteConfiguredTrack={deleteConfiguredTrack}
                UID={UID} 
            />]);
    }

    function deleteConfiguredTrack(trackUID) {

        // this deletes all tracks under the selected one because the
        // the state of the tracks is not being updated. (look at the count state in browser)
        // 2 tracks then delete one and the count will think it's 0 instead of 1
        console.log(trackUID); 
        
        setTracks(tracks.filter(track => track.props.UID !== trackUID));
        
        // tracks.map(track => 
        //     {
        //         console.log('---');
        //         console.log(track.props.UID);
        //         console.log(trackUID);
        //     });
        // setCount(count - 1);
    }


    return (
        <div>
            <TextInputField defaultText="Playlist Title"/>
            <TextInputField defaultText="Artist Spotify URI"/>

            <FinishButtons />
           
            <ConfiguredTracks 
                tracks={tracks}
            />

            <TrackConfiguration 
                trackTitle={"Track " + count} 
                appendConfiguredTrack={appendConfiguredTrack}
            />

            
        </div>
    );
}

export default PlaylistBuilder;