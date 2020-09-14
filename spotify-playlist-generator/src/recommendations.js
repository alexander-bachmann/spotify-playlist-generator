import React from 'react';
import Cookies from 'js-cookie'
import { SpotifyApiContext, BrowseRecommendations } from 'react-spotify-api';

function Recommendations(props) {
    const token = Cookies.get('spotifyAuthToken');
    return (
        <SpotifyApiContext.Provider value={token}>
            <BrowseRecommendations
                options={{
                    seed_artists: props.artistURI,
                    limit: props.limit
                }}>
                {(recommendations, loading, error) => (
                    recommendations ? (
                        recommendations.tracks.map(track => (
                            <p key={track.id}>{track.artists[0].name} - {track.name}</p>
                        ))
                    ) : <p>no recommendations</p> 
                )
                }
            </BrowseRecommendations> 
        </SpotifyApiContext.Provider>
    );
}

export default Recommendations