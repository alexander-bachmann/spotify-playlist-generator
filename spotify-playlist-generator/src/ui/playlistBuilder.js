import React from 'react';
import TextInputField from './textInputField';
import NewTrack from './newTrack';

function PlaylistBuilder(props) {
    return (
        /* 
            PlaylistBuilder

                InputBox (playlist title) - props: defaultText
                InputBox (artist spotify uri) - props: defaultText

                ConfiguredTrack
                    Track Name (default until filled with title)
                    Settings Button
                    Trash Button

                NewTrack 
                    Features
                        Feature
                            Name    
                            Slider
                            Toggle Switch
                    Add Button (this button will generate a new component)
                    Reset Button

                Build Button

                Save Playlist Button
        */

        <div>

            <TextInputField defaultText="Playlist Title"/>
            <TextInputField defaultText="Artist Spotify URI"/>


            <NewTrack defaultTrackName="Track 1"/>


        </div>
    );
}

export default PlaylistBuilder;