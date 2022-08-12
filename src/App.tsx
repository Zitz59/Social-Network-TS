import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route} from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import {AppStateType, ReduxStoreType} from './redux/redux-store';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Dialogs from './components/Dialogs/DialogsContainer';
import Login from './components/Login/Login';

export type AppPropsType = {
    store: ReduxStoreType
    state: AppStateType
}

class App extends React.Component<AppPropsType> {
    render() {
        // @ts-ignore
        return (

            <div className="app-wrapper">
                {/*<PrimarySearchAppBar/>*/}
                <HeaderContainer/>
                <Navbar sideBar={this.props.state.sideBar}/>
                <div className="app-wrapper-content">
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/dialogs/*" render={() => <Dialogs/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/login" render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

export default App;
