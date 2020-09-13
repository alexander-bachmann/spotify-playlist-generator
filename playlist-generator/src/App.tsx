import React from 'react';
import './App.css';
import TrackData from './trackdata'
import SpotifyButton from './spotifyButton'

function App() {
  return (
    <div className="App">
        
        <div className="App-header">
            <SpotifyButton />
            <TrackData  endpointURL='https://api.spotify.com/v1/recommendations?'/>
        </div>

    </div>
  );
}

export default App;
