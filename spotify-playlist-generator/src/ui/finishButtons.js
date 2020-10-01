import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import Cookies from 'js-cookie'
import { Context } from './global/Store';

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
    const classes = useStyles();
    
    const [state, dispatch] = useContext(Context);
    
    async function fetchRecommended(endpointURL, queryParam, query) {
        const token = Cookies.get('spotifyAuthToken'); 
        
        let fetchURL = endpointURL + queryParam + query;
        
        const res = await fetch(fetchURL, {
            method: 'GET',
            headers: {
                "Content-Type":"application/json", 
                "Authorization": "Bearer " + token
            }
        });
        
        res
            .json()
            .then(res => props.setFetchedRecommended(res.tracks))
            .catch(err => props.setErrors(err));
    }

    
    
    function buildPlaylist() {
        fetchRecommended(
            'https://api.spotify.com/v1/recommendations?', 
            'seed_artists=', 
            props.spotifyURI);
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