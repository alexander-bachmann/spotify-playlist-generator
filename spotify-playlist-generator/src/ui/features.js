import React from 'react';
import Feature from './feature';

function Features() {
    return (
        <div>
            <Feature defaultName='Instrumentalness' min='0' max='100'/>
            <Feature defaultName='Time Signature' min='1' max='12'/>
            <Feature defaultName='Acousticness' min='0' max='100'/>
            <Feature defaultName='Danceability' min='0' max='100'/>
            <Feature defaultName='Speechiness' min='0' max='100'/>
            <Feature defaultName='Loudness' min='-60' max='0'/>
            <Feature defaultName='Liveness' min='0' max='100'/>
            <Feature defaultName='Duration' min='0' max='20'/>
            <Feature defaultName='Valence' min='0' max='100'/>
            <Feature defaultName='Energy' min='0' max='100'/>
            <Feature defaultName='Tempo' min='0' max='300'/>
            <Feature defaultName='Mode' min='0' max='1' nodes='1'/>
            <Feature defaultName='Key' min='0' max='11' nodes='1'/>
        </div>
    )
}

export default Features