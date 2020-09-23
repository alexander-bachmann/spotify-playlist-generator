import React from 'react';
import Feature from './feature';
import Box from '@material-ui/core/Box';

function Features() {
    return (
        <Box>
            {/* TODO will also need to pass the slider min and max values */}
            <Feature defaultName='Instrumentalness' min='0' max='100'/>
            <Feature defaultName='Time Signature' min='0' max='100'/>
            <Feature defaultName='Acousticness' min='0' max='100'/>
            <Feature defaultName='Danceability' min='0' max='100'/>
            <Feature defaultName='Speechiness' min='0' max='100'/>
            <Feature defaultName='Loudness' min='0' max='100'/>
            <Feature defaultName='Liveness' min='0' max='100'/>
            <Feature defaultName='Duration' min='0' max='100'/>
            <Feature defaultName='Valence' min='0' max='100'/>
            <Feature defaultName='Energy' min='0' max='100'/>
            <Feature defaultName='Tempo' min='0' max='100'/>
            <Feature defaultName='Mode' min='0' max='100'/>
            <Feature defaultName='Key' min='0' max='100'/>
        </Box>
    )
}

export default Features