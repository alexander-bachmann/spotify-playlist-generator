import React, { useState, useEffect } from 'react';

type TrackDataProps = {
    endpointURL: string
}

function TrackData(props: TrackDataProps) {
    const [hasError, setErrors] = useState(false);
    const [tracks, setTracks] = useState({});

    async function fetchData(endpointURL: string) {

        // TODO this token will expire which is why we need to use OAuth
        let userToken: string = 'BQCij9ZYV9Xl-s4SbL8_rS8LYkKa2tHNN4TQfGczOo8UnamOi0vGl_eMlP9rMedgPO1S6PGBTEgoF2_bx3VgmogFy7zthEY4cWAJo9d515ULk6LMAa6dn5CK40xcxa39JcdWspZe7WL5D7WiJSytE-d8NIMd0_U-LGSrEONrROa_lNb-WDiGf5HGxofM-6whe7n9KO3j3YDtbJQFlT0hMDezxKwscEEODSAgNDkfqCF-l8SjQ6ABVKWDASQdIPPLaXUvlWagpIQu';
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