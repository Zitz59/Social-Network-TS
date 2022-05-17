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

export type PropsType = {
    store: ReduxStoreType
    state: RootStateType
    dispatch: (action: ActionTypes) => void

}

const App = (props: PropsType) => {
    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar sideBar={props.state.sideBar}/>

            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile" element={<Profile posts={props.state.profilePage.posts}
                                                             dispatch={props.dispatch}
                                                             newPostText={props.state.profilePage.newPostText}/>}/>
                    <Route path="/dialogs/*" element={<Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                               messages={props.state.dialogsPage.messages}
                                                               newMessageText={props.state.dialogsPage.newMessageText}
                                                               dispatch={props.dispatch}/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}
export default App;
