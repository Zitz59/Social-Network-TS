import React from 'react';
import MyPostsContainer from '../MyPosts/MyPostsContainer';
import {ProfileType} from '../../redux/profileReducer';
import {ProfileInfo} from './ProfileInfo';

export type ProfilePropsType = {
    profile: ProfileType
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <div>
                <img
                    src="https://images.unsplash.com/photo-1615678815958-5910c6811c25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt=""/>
            </div>
            <div>
                <ProfileInfo profile={props.profile}/>
                <MyPostsContainer/>

            </div>
        </div>
    )
}

export default Profile;