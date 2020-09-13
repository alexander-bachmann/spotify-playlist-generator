import React from 'react';
import { SpotifyApiContext, BrowseRecommendations, Artist, Track} from 'react-spotify-api'
import { SpotifyAuth } from 'react-spotify-auth'
import Cookies from 'js-cookie'
import 'react-spotify-auth/dist/index.css'

import Recommendations from './recommendations';

function SignInButton() {

    const token = Cookies.get('spotifyAuthToken');

    return (
        <div className='app'>
        {token ? (
            <SpotifyApiContext.Provider value={token}>
            
            <p>You are authorized with token: {token}</p>
            
            {/* Your Spotify Code here */}

            <Artist id={["1XpDYCrUJnvCo9Ez6yeMWh","7jy3rLJdDQY21OgRLCZ9sD"]}>
                
                {({ artists }) => (
                    artists ? (
                        artists.map(artist => (
                            <h1 key={artist.id}>{artist.name}</h1>
                        ))
                    ) : null
                )}
            </Artist>

                {/* <Recommendations /> */}

            </SpotifyApiContext.Provider>
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
