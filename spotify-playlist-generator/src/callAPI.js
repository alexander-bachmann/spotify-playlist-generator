import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

function CallAPI(props) {
    const [hasError, setErrors] = useState(false);
    const [tracks, setTracks] = useState({});
    
    async function fetchData(endpointURL) {

        const token = Cookies.get('spotifyAuthToken'); 
        let artistURI = '4frXpPxQQZwbCu3eTGnZEw';
        let limit = 1;
        let market = 'US';

        let fetchURL = endpointURL + "limit=" + limit + "&market" 
                        + market + "&seed_artists=" + artistURI;

        const res = await fetch(fetchURL, {
            method: 'GET',
            headers: {
                "Content-Type":"application/json", 
                "Authorization": "Bearer " + token
            }
        });
        
        res
            .json()
            .then(res => setTracks(res))
            .catch(err => setErrors(err));
    }

    useEffect(() => {
        fetchData(props.endpointURL);
    }, []);

    return (
        <div>
            Tracks:
            <br />
            <hr />
            <div>{JSON.stringify(tracks, null, '\t')}</div>
            <hr />
            <span>Has error: {JSON.stringify(hasError)}</span>
        </div>
    );
};

export default CallAPI;