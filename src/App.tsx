import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {Route, Routes} from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import {AppStateType, ReduxStoreType} from './redux/redux-store';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

export type AppPropsType = {
    store: ReduxStoreType
    state: AppStateType
}

const App = (props: AppPropsType) => {
    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar sideBar={props.state.sideBar}/>

            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile" element={<ProfileContainer/>}/>
                    <Route path="/dialogs/*" element={<DialogsContainer/>}/>
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
