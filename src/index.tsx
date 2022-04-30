import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {subscribe} from './redux/state';
import App from "./App";
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import {addMessage, addPost, changeNewPostText, RootStateType, updateNewMessage} from './redux/state';



let rerenderEntireTree = (state:RootStateType)=> {
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



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
rerenderEntireTree(state)//state with data to rerender
subscribe(rerenderEntireTree)//callback to rerender when state will change