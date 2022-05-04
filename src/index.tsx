import './index.css';
import reportWebVitals from './reportWebVitals';
import store  from './redux/state';
import App from "./App";
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import { RootStateType} from './redux/state';



let rerenderEntireTree = (_state:RootStateType)=> {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state = {store.getState()}
                     addPost = {store.addPost}
                     addMessage={store.addMessage}
                     changeNewPostText={store.changeNewPostText}
                     updateNewMessage ={store.updateNewMessage}
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
rerenderEntireTree(store.getState())//state with data to rerender
store.subscribe(rerenderEntireTree)//callback to rerender when state will change