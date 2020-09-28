import React from 'react';
import './App.css';
import SignInButton from './ui/signInButton';
import PlaylistBuilder from './ui/playlistBuilder';

function App() {
    return (
        <div className="App">
            <div className="App-header">
                <SignInButton />
                <PlaylistBuilder />
            </div>
        </div>
    );
}

export default App;
