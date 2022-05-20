import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route, Routes} from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import {ActionTypes, RootStateType} from './redux/store';
import {ReduxStoreType} from './redux/redux-store';
import DialogsContainer from './components/Dialogs/DialogsContainer';

export type AppPropsType = {
    store: ReduxStoreType
    state: RootStateType
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
                    <Route path="/profile" element={<Profile store={props.store}/>}/>
                    <Route path="/dialogs/*" element={<DialogsContainer store={props.store}/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}
export default App;
