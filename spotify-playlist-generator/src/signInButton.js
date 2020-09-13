import React from 'react';
import { SpotifyAuth } from 'react-spotify-auth'
import Cookies from 'js-cookie'
import 'react-spotify-auth/dist/index.css'

function SignInButton() {

    const token = Cookies.get('spotifyAuthToken');

    return (
        <div className='app'>
        {token ? (
           <h1>Signed in</h1> 
            ) : (
            // Display the login page
            <SpotifyAuth
            redirectUri='http://localhost:3000/callback'
            clientID='4cc2f43bdb3947caa1ad970cadb7f2a1'
            scopes={['playlist-modify-public', 'playlist-modify-private']}
            title="Sign in with Spotify"
            />
        )}
        </div>
    )
}

export default SignInButton;
