import React from 'react';

import { SpotifyApiContext, BrowseRecommendations } from 'react-spotify-api';
import Cookies from 'js-cookie'

function Recommendations(props) {
  
    const token = Cookies.get('spotifyAuthToken');
  
   return (

    <SpotifyApiContext.Provider value={token}>


        <p>You are authorized with token: {token}</p>

        <BrowseRecommendations
            options={{
                seed_artists:
                    '4frXpPxQQZwbCu3eTGnZEw'
            }}>
            {({ recommendations }) => (
                recommendations ? (
                    recommendations.tracks.map(track => (
                        <h1 key={track.id}>{track.name}</h1>
                    ))
                ) : null
            )
            }
        </BrowseRecommendations> 

    </SpotifyApiContext.Provider>
  );
}

export default Recommendations