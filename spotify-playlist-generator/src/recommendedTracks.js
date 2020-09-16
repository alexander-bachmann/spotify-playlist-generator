import React from 'react';
import Cookies from 'js-cookie'
import GetApiReq from './getApiReq';

function RecommendedTracks(props) {
    return (
        <GetApiReq 
            endpointURL='https://api.spotify.com/v1/recommendations?'
            artistURI='4frXpPxQQZwbCu3eTGnZEw' 
            limit='1'
            market='US'
        />
    );
}

export default RecommendedTracks

