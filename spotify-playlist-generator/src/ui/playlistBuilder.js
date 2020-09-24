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
        console.log('deleting track');

        // console.log(trackUID)
 
        // tracks.map(track => {

        //     console.log('props: ' + track.props.UID);
        //     console.log('elem: ' + trackUID);
        //     // track.uid !== trackUID
        // });     

        // let trackMatch = tracks.map(track => {
        //    return track.props.uid !== trackUID;
        // });     

        // console.log(trackMatch);
        console.log(tracks);


        
        // let i = 0;
        // const trackIndex = tracks.map(track => {
        //     ++i; 
            
        //     if(track.props.uid === trackuid)
        //     {
        //         console.log(track.props.UID);
        //         console.log(trackUID);

        //         return i; 
        //     }
        // });
        // console.log(trackIndex);



        // let index = tracks.find(track => track.props.UID !== trackUID);        
        // console.log(index);

        // setTracks(tracks.filter(track => track.props.UID !== trackUID));


        // let filteredTracks =  tracks.filter((track) => (track !== e.target.value))
        // setTracks(filteredTracks);

        // console.log(filteredTracks);

        // console.log(tracks[0].props.UID);

        
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