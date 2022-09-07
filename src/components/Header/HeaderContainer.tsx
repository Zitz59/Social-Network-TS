import React from 'react';
import Header from './Header';
import {AppStateType, AppThunk} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {getAuthUserData, logout} from '../../redux/auth-reducer';
import {compose} from 'redux';

export type MapStateToPropsType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
}

export type MapDispatchToPropsType = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => void
    getAuthUserData: () => void
    logout: () => AppThunk
}
export type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType, {}> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header login={this.props.login}
                       isAuth={this.props.isAuth}
                       email={this.props.email}
                       userId={this.props.userId}
                       logout={this.props.logout}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth,
    email: state.auth.email,
    userId: state.auth.userId,
})

export default compose<() => JSX.Element>(connect(mapStateToProps, {getAuthUserData, logout}))(HeaderContainer)
