import React, { Component } from 'react';
import crow from './Scarecrow.png';
import './App.css';

class App extends Component {
    render() {
        return <div className = "mainDiv" >
            <
            header > 404 Not Found < /header> <
        img src = { crow }
        alt = "Scarecrow" / > <
            div className = "content" >
            <
            h1 > I Have A Bad News For You! < /h1> <
        p > The Page You Are Looking For Might Be Removed Or Is Temporarily Unavailable. < /p> < /
        div > < button > < /button> <
        footer > 2020 < /footer > < /
        div >
    }
}

export default App;