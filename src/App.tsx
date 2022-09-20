import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import {AppStateType, ReduxStoreType} from './redux/redux-store';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Dialogs from './components/Dialogs/DialogsContainer';
import {Login} from './components/Login/Login';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {initializeApp} from './redux/app-reducer';

export type AppPropsType = {
    store: ReduxStoreType
    state: AppStateType
    initializeApp: () => void
}

type MapStateToPropsType = {
    initialized:boolean
}

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar sideBar={this.props.state.sideBar}/>
                <div className="app-wrapper-content">
                    <Switch>
                        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                        <Route path="/dialogs/*" render={() => <Dialogs/>}/>
                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/login" render={() => <Login/>}/>
                        <Route path="/404" render={() => <h1>404: PAGE NOT FOUND</h1>}/>
                        <Redirect from="*" to="/404"/>
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    initialized:state.app.initialized
})

export default compose<() => JSX.Element>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
