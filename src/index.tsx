import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';

let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={store.getState()}
                     store={store}
                     // addPost={store.addPost.bind(store)}
                     // addMessage={store.addMessage.bind(store)}
                     // changeNewPostText={store.changeNewPostText.bind(store)}
                     // updateNewMessage={store.updateNewMessage.bind(store)}
                     dispatch={store.dispatch.bind(store)}
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
//state with data to rerender
rerenderEntireTree()
store.subscribe(rerenderEntireTree)//callback to rerender when state will change