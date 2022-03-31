import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from "./Header";

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

export default App;
