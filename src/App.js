import React, { Component } from 'react';
import crow from './Scarecrow.png';
import bg from './bg.jpg';
import bubble from './bubble.png';
import './App.css';

class App extends Component {
    render() {
        return <div className = "mainDiv" >
        <header > 404 Not Found </header>
        <img id="crow" src = { crow } alt = "Scarecrow" / >
        <img id="bg" src = { bg } alt = "BG" / >
        <img id="bubble" src = { bubble } alt = "Bubble" / >
        <div className = "rotate" > </div>
        <div className = "content" >
                    <h1>
                    <ul>
                        <li>I</li>
                        <li>&nbsp;</li>
                        <li>H</li>
                        <li>a</li>
                        <li>v</li>
                        <li>e</li>
                        <li>&nbsp;</li>
                        <li>A</li>
                        <li>&nbsp;</li>
                        <li>B</li>
                        <li>a</li>
                        <li>d</li>
                        <li>&nbsp;</li>
                        <li>N</li>
                        <li>e</li>
                        <li>w</li>
                        <li>s</li>
                        <li>&nbsp;</li>
                        <li>F</li>
                        <li>o</li>
                        <li>r</li>
                        <li>&nbsp;</li>
                        <br/>
                        <li>Y</li>
                        <li>o</li>
                        <li>u</li>
                        <li>!</li>
                        <li>&nbsp;</li>
                    </ul>
                    </h1>
             <p > The Page You Are Looking For Might Be Removed Or Is Temporarily Unavailable. < /p> 
             </div > < button id = "one" > Back To Home Page </button> 
             <footer >Copyright  2020</footer > 
             </div >
    }
}

export default App;
