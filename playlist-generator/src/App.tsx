import React from 'react';
import './App.css';
import TrackData from './trackdata'

function App() {
  return (
    <div className="App">
        
        <div className="App-header">
            <TrackData  endpointURL='https://api.spotify.com/v1/recommendations?'/>
        </div>

    </div>
  );
}

export default App;
