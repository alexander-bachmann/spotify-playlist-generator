import React, { useState, useEffect }from 'react';
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

function ConfiguredTrack(props) {
    const classes = useStyles();
    
    return(
        <div name={props.UID} className={classes.root}>
            <span className={classes.trackTitle}>{props.trackTitle}</span>
            
            <IconButton 
                    className={classes.deleteButton}
                    size="small"
                    aria-label="Delete"
                    onClick={() => {props.deleteConfiguredTrack(props.UID)}}
                    // onClick={deleteConfiguredTrack}
            ><DeleteIcon/></IconButton>

            <IconButton 
                    className={classes.settingsButton}
                    size="small"
                    aria-label="settings"
            ><SettingsIcon/></IconButton>
           
        </div>
    )
}

export default ConfiguredTrack;