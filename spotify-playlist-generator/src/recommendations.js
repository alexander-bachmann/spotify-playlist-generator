import React from 'react';

import { SpotifyApiContext, BrowseRecommendations } from 'react-spotify-api';
import Cookies from 'js-cookie'

function Recommendations(props) {
    const token = Cookies.get('spotifyAuthToken');
    return (
            <SpotifyApiContext.Provider value={token}>
                <BrowseRecommendations
                    options={{
                        seed_artists:
                            '4frXpPxQQZwbCu3eTGnZEw',
                        limit: 10
                    }}>
                    { (recommendations, loading, error) => (
                        recommendations ? (
                            recommendations.tracks.map(track => (
                                <p key={track.id}>{track.name}</p>
                            ))
                        ) : <h1>no recommendations</h1> 
                    )
                    }
                </BrowseRecommendations> 
            </SpotifyApiContext.Provider>
    );
}

export default Recommendations