import React, { useState, useEffect } from "react";

const TrackData = () => {
    const [hasError, setErrors] = useState(false);
    const [tracks, setTracks] = useState({});

    async function fetchData() {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        res
            .json()
            .then(res => setTracks(res))
            .catch(err => setErrors(err));
    }

    useEffect(() => {
        fetchData();
    });

    return (
        <div>
            <span>{JSON.stringify(tracks)}</span>
            <hr />
            <span>Has error: {JSON.stringify(hasError)}</span>
        </div>
    );
};

export default TrackData;