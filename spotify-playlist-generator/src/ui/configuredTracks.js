import React, { useEffect } from 'react';


function ConfiguredTracks(props) {
    return(
        <div>
            {props.tracks.map((track, index) => 
                <div key={index}> {track} </div>)}
        </div>
    )
}

export default ConfiguredTracks;