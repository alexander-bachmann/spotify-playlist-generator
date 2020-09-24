import React, { useState, useEffect }from 'react';
import Features from './features';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';

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

    function addTrack() {
        props.appendConfiguredTrack(props.trackTitle)
    }

    function clearTrack() {
        console.log('track cleared');
    }   

    return (
        <div>
            <div className={classes.root}>
                <span className={classes.trackTitle}>{props.trackTitle}</span>
                
                <IconButton 
                    className={classes.resetButton}
                    size="small"
                    aria-label="clear"
                    onClick={clearTrack}
                ><ClearIcon/></IconButton>
               
                <IconButton 
                    className={classes.addButton}
                    size="small"
                    aria-label="add"
                    onClick={addTrack}
                    
                ><AddIcon/></IconButton>
            </div>
            
            <Features />
        </div>
    )
}

export default TrackConfiguration;