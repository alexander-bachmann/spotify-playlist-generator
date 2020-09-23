import React from 'react';
import TextInputField from './textInputField';
import NewTrack from './newTrack';
import ConfiguredTrack from './configuredTrack';

function PlaylistBuilder(props) {
    return (
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

        <div>

            <TextInputField defaultText="Playlist Title"/>
            <TextInputField defaultText="Artist Spotify URI"/>

            <ConfiguredTrack trackTitle="Track 1"/>
            <ConfiguredTrack trackTitle="Track 2"/>
            <ConfiguredTrack trackTitle="Track 3"/>

            <NewTrack trackTitle="Track 4"/>


        </div>
    );
}

export default PlaylistBuilder;