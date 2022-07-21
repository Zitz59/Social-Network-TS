import React from 'react';
import Header from './Header';
import axios from 'axios';
import {AppStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {setAuthUserData} from '../../redux/auth-reducer';
import {compose} from 'redux';


export type MapStateToPropsType = {
    userId: number,
    email: string,
    login: string|null,
    isAuth: boolean
}

export type MapDispatchToPropsType = {
    setAuthUserData: (userId: number, email: string, login: string, isAuth: boolean) => void
}

export type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType


class HeaderContainer extends React.Component<HeaderContainerPropsType, {}> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login, isAuth} = response.data.data
                    this.props.setAuthUserData(id, email, login, isAuth)
                }
            });
    }

    render() {
        return <Header login={this.props.login}
        isAuth={this.props.isAuth}
        email={this.props.email}
        userId={this.props.userId}/>
    }

}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth,
    email:state.auth.email,
    userId:state.auth.userId

})

export default compose<() => JSX.Element>(connect(mapStateToProps, {setAuthUserData}))(HeaderContainer)
