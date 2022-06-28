import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route, Routes} from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import {ActionTypes} from './redux/store';
import {AppStateType, ReduxStoreType} from './redux/redux-store';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

export type AppPropsType = {
    store: ReduxStoreType
    state: AppStateType
    dispatch: (action: ActionTypes) => void
}

const App = (props: AppPropsType) => {
    debugger
    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar sideBar={props.state.sideBar}/>

            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile" element={<Profile /*store={props.store}*/ />}/>
                    <Route path="/dialogs/*" element={<DialogsContainer /*store={props.store}*/ />}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/users" element={<UsersContainer/>}/>
                </Routes>
            </div>
        </div>
    );
}
export default App;
