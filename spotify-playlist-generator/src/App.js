import React from 'react';
import './App.css';
import SignInButton from './signInButton';
import Recommendations from './recommendations';

import CallAPI from './callAPI';

function App() {
    return (
        <div className="App">
            <div className="App-header">
                <SignInButton />
                {/* TODO, make it so an object prop for query params is passed in */}
                {/* <CallAPI endpointURL='https://api.spotify.com/v1/recommendations?' /> */}
                <Recommendations />
            </div>
        </div>
  );
}

export default App;
