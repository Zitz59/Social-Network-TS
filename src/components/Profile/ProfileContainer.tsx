import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {ProfileType, setUserProfile} from '../../redux/profileReducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';

export type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileType
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

export type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<PropsType> {


    componentDidMount() {
        let userId = this.props.match.params.userId

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserProfile(response.data);
        })

    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})

export default compose<() => JSX.Element>(
    connect(mapStateToProps, {setUserProfile}),
    withRouter
)(ProfileContainer)