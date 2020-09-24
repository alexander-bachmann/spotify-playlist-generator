import React, { useState } from 'react';
import Feature from './feature';

function Features(props) {
      
    return (
        <div>
            <Feature 
                defaultName='Instrumentalness' min='0' max='100'
                setFeature={props.setInstrumentalness}/>
            <Feature 
                defaultName='Time Signature' min='1' max='12'
                setFeature={props.setTimeSignature}/>
            <Feature 
                defaultName='Acousticness' min='0' max='100' 
                setFeature={props.setAcousticness}/>
            <Feature 
                defaultName='Danceability' min='0' max='100' 
                setFeature={props.setDanceability}/>
            <Feature 
                defaultName='Speechiness' min='0' max='100' 
                setFeature={props.setSpeechiness}/>
            <Feature 
                defaultName='Loudness' min='-60' max='0' 
                setFeature={props.setLoudness}/>
            <Feature 
                defaultName='Liveness' min='0' max='100' 
                setFeature={props.setLiveness}/>
            <Feature 
                defaultName='Duration' min='0' max='20' 
                setFeature={props.setDuration}/>
            <Feature 
                defaultName='Valence' min='0' max='100' 
                setFeature={props.setValence}/>
            <Feature 
                defaultName='Energy' min='0' max='100' 
                setFeature={props.setEnergy}/>
            <Feature 
                defaultName='Tempo' min='0' max='300' 
                setFeature={props.setTempo}/>
            <Feature 
                // TODO Mode is broken
                defaultName='Mode' min='0' max='1' 
                setFeature={props.setMode}/>
            <Feature 
                defaultName='Key' min='0' max='11' 
                setFeature={props.setKey}/>
        </div>
    )
}

export default Features