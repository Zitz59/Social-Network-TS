import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import {Provider} from "react-redux"
import store from './redux/redux-store';


let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                <App
                    state={store.getState()}
                     store={store}
                     dispatch={store.dispatch.bind(store)}
                />
                </Provider>
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
rerenderEntireTree()//state with data to rerender
store.subscribe(rerenderEntireTree)// store.subscribe(rerenderEntireTree)//callback to rerender when state will change