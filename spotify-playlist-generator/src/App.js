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
                <Recommendations 
                    artistURI='4frXpPxQQZwbCu3eTGnZEw' 
                    limit='5'/>
            </div>
        </div>
  );
}

export default App;
