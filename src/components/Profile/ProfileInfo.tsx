import React from 'react';
import styles from '../MyPosts/MyPosts.module.css';
import {Preloader} from '../common/Preloader/Preloader';
import {ProfileType} from '../../redux/profileReducer';

type ProfileInfoPropsType = {
    profile: ProfileType
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img className={styles.avatar} alt={'profile_large_photo'} src={props.profile.photos.large}/>
                <div>fullName : {props.profile.fullName}</div>
                <div>About me :{props.profile.aboutMe}</div>
                <div>Looking for a job : {props.profile.lookingForAJobDescription}</div>
                <div>Instagram : {props.profile.contacts.instagram}</div>
                <div>Facebook : {props.profile.contacts.facebook}</div>
                <div>Website : {props.profile.contacts.website}</div>
            </div>
        </div>
    )
}
