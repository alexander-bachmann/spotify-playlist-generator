import React from 'react';
import { SpotifyApiContext } from 'react-spotify-api'
import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import Cookies from 'js-cookie'
import 'react-spotify-auth/dist/index.css'

import TrackData from './trackdata'

function SpotifyButton() {

    const token = Cookies.get('spotifyAuthToken');

    return (
        <div className='app'>
        {token ? (
            <SpotifyApiContext.Provider value={token}>
            {/* Your Spotify Code here */}
                <TrackData  endpointURL='https://api.spotify.com/v1/recommendations?'/>
            <p>You are authorized with token: {token}</p>
            </SpotifyApiContext.Provider>
        ) : (
            // Display the login page
            <SpotifyAuth
            redirectUri='http://localhost:3000/callback'
            clientID='4cc2f43bdb3947caa1ad970cadb7f2a1'
            scopes={['playlist-modify-public', 'playlist-modify-private']}
            />
        )}
        </div>
    )
}

export default SpotifyButton;
