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
import Sidebar from './components/Sidebar/Sidebar';
import {RootStateType} from './redux/state';

export type PropsType = {
    state: RootStateType;
}

const App = (props: PropsType) => {
    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Sidebar sidebar={props.state.sideBar} />

            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile" element={<Profile posts={props.state.profilePage.posts}/>}/>
                    <Route path="/dialogs/*" element={<Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                               messages={props.state.dialogsPage.messages}/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}
export default App;
