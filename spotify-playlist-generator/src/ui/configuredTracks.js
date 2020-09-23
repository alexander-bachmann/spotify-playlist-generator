import React, { useState, useEffect }from 'react';
import ConfiguredTrack from './configuredTrack';



function ConfiguredTracks(props) {
    const [tracks, setTracks] = useState([]);
    const [count, setCount] = useState(1);
    
    function appendConfiguredTrack(trackTitle) {
        setCount(count + 1);
        setTracks( tracks => [...tracks, <ConfiguredTrack trackTitle={"Track " + trackTitle}/>]);
    }

    return(
        <div>
            <button onClick={() => {appendConfiguredTrack(count)}}>click</button>

            <div>
                {tracks.map(track => <div key={track}> {track} </div>)}
            </div>

        </div>
    )
}

export default ConfiguredTracks;