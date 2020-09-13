import React, { useState, useEffect } from 'react';

type TrackDataProps = {
    endpointURL: string
}

function TrackData(props: TrackDataProps) {
    const [hasError, setErrors] = useState(false);
    const [tracks, setTracks] = useState({});

    async function fetchData(endpointURL: string) {

        // TODO this token will expire which is why we need to use OAuth
        let userToken: string = "BQCWpYMGJds-0kEnNzPMrDr-YiJwgvplc2y9iAmpfyZGMSgi-b1YEDgNR6zVzV4_DvVBhOjJgbLrvrFS1qiDSYMNUBFR83268o42OrjXnA3SUbzgaMIAxh4NYzSfJkMBpTjNHOojfkDk1vYfqxjjcjwss2z_CjLE6bv9k3eIKkB5Yr8c16VJx5hy3jmXT9baamRE0SwV5OcTllcyWh02iuvDLKSvXyjw9UchH7XE8HOupwNlvxTfgdVbGkQoMWDVZnBEI6AaGknb";
        let artistURI: string = '4frXpPxQQZwbCu3eTGnZEw';
        let limit: number = 1;
        let market: string = 'US';

        let fetchURL: string = endpointURL + "limit=" + limit + "&market" + market + "&seed_artists=" + artistURI;

        const res = await fetch(fetchURL, {
            method: 'GET',
            headers: {
                "Content-Type":"application/json", 
                "Authorization": "Bearer " + userToken
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