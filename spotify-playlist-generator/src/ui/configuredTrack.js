import React, { useState, useEffect, useContext }from 'react';
import { Context } from './global/Store';
import { makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import DeleteIcon from '@material-ui/icons/Delete';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles({
    root: {
        // margin: '2rem'
        padding: '1.2rem'
    },
    settingsButton: {
        color: 'white',
        float: 'right',
        backgroundColor: '#555555',
        '&:hover': {
            backgroundColor: "#80CEE1",
        }
    },
    deleteButton: {
        color: 'white',
        float: 'right',
        backgroundColor: '#555555',
        '&:hover': {
            backgroundColor: "#FE6B8B",
        }
    },
    clearButton: {
        color: 'white',
        float: 'right',
        backgroundColor: '#555555',
        '&:hover': {
            backgroundColor: "#FE6B8B",
        }
    },
    trackTitle: {
        float: 'left',
        fontSize: '1.2rem',
        fontWeight: '700'
    }
})

const ConfiguredTrack = props => {
    const classes = useStyles();
    
    const [state, dispatch] = useContext(Context);
    const [title, setTitle] = useState('.');

    useEffect(() => {
        let trackData = state.tracks.filter(track => track.uid == props.UID);
        
        if(trackData[0] != undefined) {
            setTitle(trackData[0].title + ' - ' + trackData[0].artist);
        }
    }, [state.tracks, state.tracks.length])
    
    function updateTrackConfiguration() {
        console.log('changing track criteria...');
    }

    function clearFetchedTrack() {
        props.clearTrack(props.UID);
    }

    function deleteTrack() {
        props.deleteTrack(props.UID);
    }
    
    return(
        <div name={props.UID} className={classes.root}>
            <span className={classes.trackTitle}>{title}</span>
            
            <IconButton 
                    className={classes.deleteButton}
                    size="small"
                    aria-label="Delete"
                    onClick={deleteTrack}
            ><DeleteIcon/></IconButton>

            <IconButton 
                className={classes.clearButton}
                size="small"
                aria-label="Clear"
                onClick={clearFetchedTrack}
            ><ClearIcon/></IconButton>

            <IconButton 
                    className={classes.settingsButton}
                    size="small"
                    aria-label="Settings"
                    onClick={updateTrackConfiguration}
            ><SettingsIcon/></IconButton>
        </div>
    )
};

export default ConfiguredTrack;