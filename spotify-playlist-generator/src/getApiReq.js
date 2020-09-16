import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

function GetApiReq(props) {
    const [hasError, setErrors] = useState(false);
    const [tracks, setTracks] = useState({});
    
    // TODO pass in more props so the URL params arent hardcoded
    // if that can't be figured out, then just pass in the whole URL
    async function fetchData(endpointURL, artistURI, limit, market) {

        const token = Cookies.get('spotifyAuthToken'); 
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
        fetchData(props.endpointURL, props.artistURI, props.limit, props.market);
    }, []);

    return (
        <div>
            {/* Tracks:
            <br />
            <hr />
            <div>{JSON.stringify(tracks, null, '\t')}</div>
            <hr />
            <span>Has error: {JSON.stringify(hasError)}</span> */}
        </div>
    );
};

export default GetApiReq;