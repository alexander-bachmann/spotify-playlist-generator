import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
    root: {
        margin: '1rem',
        padding: '1.2rem'
    },
    buildButton: {
        color: 'white',
        float: 'left',
        backgroundColor: '#555555',
        '&:hover': {
            backgroundColor: "#77DD77",
        },
    },
    saveButton: {
        color: 'white',
        float: 'right',
        backgroundColor: '#555555',
        '&:hover': {
            backgroundColor: "#80CEE1",
        },
    },
})

function FinishButtons(props) {
    const classes =useStyles();

    function buildPlaylist() {
        console.log('building playlist...');
    }

    function savePlaylist() {
        console.log('saving playlist...');
    }

    return (
        <div className={classes.root}>
            <Button 
                className={classes.buildButton}
                aria-label="Build"
                variant="contained" 
                color="primary"
                onClick={buildPlaylist}
            >
            Build 
            </Button>

            <Button 
                className={classes.saveButton}
                aria-label="Save"
                variant="contained" 
                color="primary"
                onClick={savePlaylist}
            >
            Save 
            </Button>
        </div>
    )
}

export default FinishButtons;