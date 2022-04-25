import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import {addMessage, addPost, changeNewPostText, RootStateType, updateNewMessage} from './redux/state';


export let rerenderEntireTree = (state:RootStateType)=> {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state = {state}
                     addPost = {addPost}
                     addMessage={addMessage}
                     changeNewPostText={changeNewPostText}
                     updateNewMessage ={updateNewMessage}
                />
            </BrowserRouter>
        </React.StrictMode>
        ,
        document.getElementById('root')
    );
}
