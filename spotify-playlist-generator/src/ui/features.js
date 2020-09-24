import React, { useState } from 'react';
import Feature from './feature';

function Features(props) {
    
    const [instrumentalness, setInstrumentalness] = useState([]);
    const [timeSignature, setTimeSignature] = useState([]);
    const [acousticness, setAcousticness] = useState([]);
    const [danceability, setDanceability] = useState([]);
    const [speechiness, setSpeechiness] = useState([]);
    const [loudness, setLoudness] = useState([]);
    const [liveness, setLiveness] = useState([]);
    const [duration, setDuration] = useState([]);
    const [valence, setValence] = useState([]);
    const [energy, setEnergy] = useState([]);
    const [tempo, setTempo] = useState([]);
    const [mode, setMode] = useState([]);
    const [key, setKey] = useState([]);
    
    return (
        <div>
            <Feature 
                defaultName='Instrumentalness' min='0' max='100'
                setFeature={setInstrumentalness}/>
            <Feature 
                defaultName='Time Signature' min='1' max='12'
                setFeature={setTimeSignature}/>
            <Feature 
                defaultName='Acousticness' min='0' max='100' 
                setFeature={setAcousticness}/>
            <Feature 
                defaultName='Danceability' min='0' max='100' 
                setFeature={setDanceability}/>
            <Feature 
                defaultName='Speechiness' min='0' max='100' 
                setFeature={setSpeechiness}/>
            <Feature 
                defaultName='Loudness' min='-60' max='0' 
                setFeature={setLoudness}/>
            <Feature 
                defaultName='Liveness' min='0' max='100' 
                setFeature={setLiveness}/>
            <Feature 
                defaultName='Duration' min='0' max='20' 
                setFeature={setDuration}/>
            <Feature 
                defaultName='Valence' min='0' max='100' 
                setFeature={setValence}/>
            <Feature 
                defaultName='Energy' min='0' max='100' 
                setFeature={setEnergy}/>
            <Feature 
                defaultName='Tempo' min='0' max='300' 
                setFeature={setTempo}/>
            <Feature 
                defaultName='Mode' min='0' max='1' 
                setFeature={setMode} nodes='1'/>
            <Feature 
                defaultName='Key' min='0' max='11' 
                setFeature={setKey} nodes='1'/>
        </div>
    )
}

export default Features