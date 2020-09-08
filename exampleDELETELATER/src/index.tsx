import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Header } from './header';
import { CustomTime } from './custom-date'
import { FruitLoops } from './fruit-loops'


let fruit: Array<string> = [
    "red",
    "green",
    "blue",
    "yellow",
    "pink"
]

//typically only ever call ReactDom.render() one time, like the main() function in java/c++
ReactDom.render(
    <div>
        <Header text="Whaaaduup"/>
        <CustomTime />
        <FruitLoops fruit={fruit} /> 
        <h1>Playlist Generator</h1>
        <p>sanotehuaosentuhaoesnuth</p>
    </div>, 
    document.querySelector('#root')
);