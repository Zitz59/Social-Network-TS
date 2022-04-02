import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import MyPosts from "./components/MyPosts/MyPosts";
import Dialogs from "./components/Dialogs/Dialogs";


const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Profile/>
                </div>
                {/*<Profile/>*/}
                {/*<MyPosts/>*/}
            </div>
        </BrowserRouter>
    );
}
export default App;
