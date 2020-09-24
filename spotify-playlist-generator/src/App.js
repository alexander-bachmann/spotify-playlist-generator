import React from 'react';
import './App.css';
import SignInButton from './ui/signInButton';
import Recommendations from './recommendations';
import RecommendedTracks from './recommendedTracks';
import PlaylistBuilder from './ui/playlistBuilder';

function App() {
    return (
        <div className="App">
            <div className="App-header">
                <SignInButton />
                <PlaylistBuilder />
                {/* <Recommendations 
                    artistURI='4frXpPxQQZwbCu3eTGnZEw' 
                    limit='5'/>
                <RecommendedTracks /> */}

            </div>
        </div>
    );
}

export default App;
