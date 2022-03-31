import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <ul>
                    <li>css</li>
                    <li>html</li>
                    <li>js</li>
                    <li>react</li>
                </ul>
            </div>
        </BrowserRouter>
    );
}

const Header = () => {
    return (
        <div>
            <a href="#">Home</a>
            <a href="#">News</a>
            <a href="#">Feed</a>
        </div>
    )
}

export default App;
