//$ npm install
//$ npm run build

import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Header } from './header';

//typically only ever call ReactDom.render() one time
ReactDom.render(
    <div>
        <Header text="Whaaaduup"/>
        <h1>Playlist Generator</h1>
        <p>sanotehuaosentuhaoesnuth</p>
    </div>, 
    document.querySelector('#root')
);