import React from 'react';
import TextInputField from './textInputField';
import NewTrack from './newTrack';

function PlaylistBuilder(props) {
    return (
        /*
        TODO probably need to add states for everything that may change such as titles 
        
            PlaylistBuilder

                * InputBox (playlist title) - props: defaultText
                * InputBox (artist spotify uri) - props: defaultText

                ConfiguredTrack
                    Track Name (default until filled with title)
                    Settings Button
                    Trash Button

                * NewTrack 
                    * Features
                        * Feature
                            * Name    
                            * Slider
                            * Toggle Switch
                    Add Button (this button will generate a new component)
                    Reset Button

                Build Button

                Save Playlist Button
        */

        <div>

            <TextInputField defaultText="Playlist Title"/>
            <TextInputField defaultText="Artist Spotify URI"/>


            <NewTrack trackTitle="Track 1"/>


        </div>
    );
}

export default PlaylistBuilder;