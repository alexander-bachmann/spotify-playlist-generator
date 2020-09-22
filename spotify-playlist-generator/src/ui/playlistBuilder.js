import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import TextInputField from './textInputField';

function PlaylistBuilder(props) {
    return (
        /* 
            PlaylistBuilder

                InputBox (playlist title) - props: default text
                InputBox (artist spotify uri) - props: default text

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


        </div>
    );
}

export default PlaylistBuilder;