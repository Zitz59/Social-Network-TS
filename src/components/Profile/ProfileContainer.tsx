import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {ProfileType, getUserProfile} from '../../redux/profileReducer';
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';

export type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileType
    isAuth:boolean
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
    getUserProfile: (userId:number)=> void
}

export type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<PropsType> {


    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getUserProfile(Number(userId))
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth:state.auth.isAuth
})

export default compose<() => JSX.Element>(
    connect(mapStateToProps, {getUserProfile}),
    withRouter
)(ProfileContainer)