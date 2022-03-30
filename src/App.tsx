import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
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


type MessageType = {
    message: string
}


function HelloMessage(props: MessageType) {
    return <h1>{props.message}</h1>
}

function ByeMessage(props: MessageType) {
    return <h1>{props.message}</h1>
}

export default App;
