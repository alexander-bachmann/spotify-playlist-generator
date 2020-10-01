import React, { useState }from 'react';
import Cookies from 'js-cookie'
import { SpotifyAuth } from 'react-spotify-auth'
import 'react-spotify-auth/dist/index.css'

function SignInButton(props) {

    const token = Cookies.get('spotifyAuthToken');
    return (
        <div className='app'>
            {token ? (
                // TODO this is a gross way to change the button title when signed in
                <SpotifyAuth
                        redirectUri='http://localhost:3000/callback'
                        clientID='4cc2f43bdb3947caa1ad970cadb7f2a1'
                        scopes={['playlist-modify-public', 'playlist-modify-private', 'user-read-email', 'user-read-private']}
                        title="Currently signed in"
                    />
                ) : (
                <SpotifyAuth
                    redirectUri='http://localhost:3000/callback'
                    clientID='4cc2f43bdb3947caa1ad970cadb7f2a1'
                    scopes={['playlist-modify-public', 'playlist-modify-private', 'user-read-email', 'user-read-private']}
                    title="Sign in with Spotify"
                />
            )}

        </div>
    )
}

export default SignInButton;
