import React, { useState, useEffect }from 'react';
import { makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import DeleteIcon from '@material-ui/icons/Delete';
import { useIsMount } from './useIsMount';

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
    trackTitle: {
        float: 'left',
        fontSize: '1.2rem',
        fontWeight: '700'
    }
})

function ConfiguredTrack(props) {
    const classes = useStyles();

    const [title, setTitle] = useState('.');
    console.log(props.trackTitle);


    function changeTrack() {
        console.log('changing track...');
    }

    function deleteTrack() {
        props.setCount(count => count - 1);
        props.setTracks(tracks => tracks.filter(
            track => track.props.UID !== props.UID));
        props.setPlaylistTracksJSON(tracks => tracks.filter(
            track => track.uid !== props.UID));
        // TODO ... need to update to delete from all the new state arrays
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
                    className={classes.settingsButton}
                    size="small"
                    aria-label="settings"
                    onClick={changeTrack}
            ><SettingsIcon/></IconButton>
        </div>
    )
}

export default ConfiguredTrack;