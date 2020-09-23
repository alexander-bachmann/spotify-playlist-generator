import React, { useState, useEffect }from 'react';
import Features from './features';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        margin: '1ch',
    },
    onSwitch: {
        background: '#FE6B8B',
        borderRadius: 50,
    },
    addButton: {
        color: 'white',
        backgroundColor: '#555555',
        float: 'right',
    },
    resetButton: {
        color: 'white',
        backgroundColor: '#555555',
        float: 'right'
    },

    trackTitle: {
        float: 'left'
    }

});

function NewTrack(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/* <span className={classes.trackTitle}>{props.trackTitle}</span>

            <Button 
                className={classes.resetButton}
                variant="contained"
                size="small"
            >reset</Button>
           <Button 
                className={classes.addButton}
                variant="contained"
                size="small"
            >add</Button> */}

            <Features />
        </div>
    )
}

export default NewTrack;