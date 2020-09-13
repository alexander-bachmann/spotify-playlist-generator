import React from 'react';
import './App.css';
import SignInButton from './signInButton';
import Recommendations from './recommendations';

function App() {
  return (
    <div className="App">
        <div className="App-header">
            <SignInButton />
            <Recommendations />
        </div>
    </div>
  );
}

export default App;
