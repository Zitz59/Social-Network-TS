import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {ProfileType, getUserProfile, getUserStatus, updateStatus} from '../../redux/profileReducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';


export type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileType
    isAuth:boolean
    status:string
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
    getUserProfile: (userId:number)=> void
    getUserStatus:(userId:number) =>void
    updateStatus:(status:string)=>void
}

export type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId:string|number = this.props.match.params.userId
        if (!userId){
            userId = this.props.profile.userId
        }
        this.props.getUserProfile(Number(userId))
        this.props.getUserStatus(Number(userId))
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth:state.auth.isAuth,
    status:state.profilePage.status
})

export default  compose<()=>JSX.Element>( connect(mapStateToProps, {getUserProfile,getUserStatus,updateStatus}),withRouter)(ProfileContainer)