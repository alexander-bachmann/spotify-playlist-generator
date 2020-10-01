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

    async function createPlaylist() {
        const token = Cookies.get('spotifyAuthToken'); 
        let fetchURL = `https://api.spotify.com/v1/users/${state.user_id}/playlists`;
        
        let reqBody = {
            "name": props.playlistTitle 
        }

        const res = await fetch(fetchURL, {
            method: 'POST',
            headers: {
                "Content-Type":"application/json", 
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify(reqBody),
        });
        
        res
            .json()
            .then(res => populatePlaylist(res.id))
            .catch(err => props.setErrors(err));
    }

    async function populatePlaylist(playlistID) {
        const token = Cookies.get('spotifyAuthToken'); 

        let uris = state.tracks.map(track => {
            return 'spotify:track:' + track.id
        }).join(',');        

        let fetchURL = `https://api.spotify.com/v1/playlists/${playlistID}/tracks?uris=${uris}`

        const res = await fetch(fetchURL, {
            method: 'POST',
            headers: {
                "Content-Type":"application/json", 
                "Authorization": "Bearer " + token
            }
        });
        
        res
            .json()
            .then()
            .catch();
    }
    
    function buildPlaylist() {
        fetchRecommended(
            'https://api.spotify.com/v1/recommendations?', 
            'seed_artists=', 
            props.spotifyURI);
    }

    function savePlaylist() {
        createPlaylist();
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