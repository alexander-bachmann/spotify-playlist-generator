import React, { useState, useEffect, useContext }from 'react';
import { Context } from './global/Store';
import { makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import DeleteIcon from '@material-ui/icons/Delete';

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

const ConfiguredTrack = props => {
    const classes = useStyles();
    
    const [state, dispatch] = useContext(Context);
    const [title, setTitle] = useState(state.count);

    useEffect(() => {
        if(state.tracks[props.count]) {
            setTitle(state.tracks[props.count].title + ' - ' + 
                state.tracks[props.count].artist);
            console.log(state.tracks[props.count].title);
        }
    }, [state])
    
    function changeTrack() {
        console.log('changing track...');
    }

    // TODO delete shouldn't delete but instead reject the track chosen to fill the criteria
    function deleteTrack() {
        props.setCount(count => count - 1);
        props.setTracks(tracks => tracks.filter(
            track => track.props.UID !== props.UID));
        props.setPlaylistTracksJSON(tracks => tracks.filter(
            track => track.uid !== props.UID));
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
};

export default ConfiguredTrack;