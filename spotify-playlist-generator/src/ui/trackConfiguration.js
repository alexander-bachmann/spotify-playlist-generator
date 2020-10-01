import React, { useState } from 'react';
import Features from './features';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import nextId from 'react-id-generator';

const useStyles = makeStyles({
    root: {
        // margin: '1ch',
        padding: '3rem 0rem'
    },
    addButton: {
        color: 'white',
        float: 'right',
        backgroundColor: '#555555',
        '&:hover': {
            backgroundColor: "#77DD77",
        },
    },
    resetButton: {
        color: 'white',
        float: 'right',
        backgroundColor: '#555555',
        '&:hover': {
            backgroundColor: "#FE6B8B",
        },
    },
    trackTitle: {
        float: 'left',
        fontSize: '1.2rem',
        fontWeight: '700'
    }
});

function TrackConfiguration(props) {
    const classes = useStyles();
   
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
    
    function addTrack() {
        let UID = nextId();
    
        props.addTrack(UID);
        
        props.setPlaylistTracksJSON( 
            trackFeatures => [...trackFeatures, {
                'uid': UID,
                'title': "Track " + `${UID}`,
                'artist': "Artist " + `${UID}`,
                'instrumentalness': instrumentalness,
                'timeSignature': timeSignature,
                'acousticness': acousticness,
                'danceability': danceability,
                'speechiness': speechiness,
                'loudness': loudness,
                'liveness': liveness,
                'duration': duration,
                'valence': valence,
                'energy': energy,
                'tempo': tempo,
                'mode': mode,
                'key': key
                }
            ]);
    }

    return (
        <div>
            <div className={classes.root}>

                <span className={classes.trackTitle}>{props.trackTitle}</span>
               
                <IconButton 
                    className={classes.addButton}
                    size="small"
                    aria-label="add"
                    onClick={addTrack}
                ><AddIcon/></IconButton>
            </div>
            
            <Features 
                setPlaylistTracksJSON={props.setPlaylistTracksJSON}
                setInstrumentalness={setInstrumentalness}
                setTimeSignature={setTimeSignature}
                setAcousticness={setAcousticness}
                setDanceability={setDanceability}
                setSpeechiness={setSpeechiness}
                setLoudness={setLoudness}
                setLiveness={setLiveness}
                setDuration={setDuration}
                setValence={setValence}
                setEnergy={setEnergy}
                setTempo={setTempo}
                setMode={setMode}
                setKey={setKey}
            />
        </div>
    )
}

export default TrackConfiguration;