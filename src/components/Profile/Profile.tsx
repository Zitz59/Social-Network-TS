import React from 'react';
import {ProfileType} from '../../redux/profileReducer';
import {ProfileInfo} from '../ProfileInfo/ProfileInfo';
import MyPosts from '../MyPosts/MyPostsContainer';

export type ProfilePropsType = {
    profile: ProfileType
}

export type ProfileStatusType = {
    status:string
    updateStatus:(status:string)=>void
}

const Profile: React.FC<ProfilePropsType & ProfileStatusType> = (props) => {
    return (
        <div>
            <div>
                <ProfileInfo updateStatus={props.updateStatus} status={props.status} profile={props.profile} />
                <MyPosts/>

            </div>
        </div>
    )
}

export default Profile;