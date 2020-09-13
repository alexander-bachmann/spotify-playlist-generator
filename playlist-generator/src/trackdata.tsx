import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

type TrackDataProps = {
    endpointURL: string
}

function TrackData(props: TrackDataProps) {
    const [hasError, setErrors] = useState(false);
    const [tracks, setTracks] = useState({});

    async function fetchData(endpointURL: string) {

        // TODO this token will expire which is why we need to use OAuth
        const token = Cookies.get('spotifyAuthToken'); 
        let artistURI: string = '4frXpPxQQZwbCu3eTGnZEw';
        let limit: number = 1;
        let market: string = 'US';

        let fetchURL: string = endpointURL + "limit=" + limit + "&market" 
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

export default TrackData;