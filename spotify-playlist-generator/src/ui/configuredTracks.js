import React, { useState, useEffect }from 'react';

function ConfiguredTracks(props) {
    return(
        <div>
            <div>
                {props.tracks.map(track => <div key={track}> {track} </div>)}
            </div>

        </div>
    )
}

export default ConfiguredTracks;