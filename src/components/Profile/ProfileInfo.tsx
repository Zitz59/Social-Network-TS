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
            <img className={styles.avatar}
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3IUfiPYzFAfU0OdNVBk3cNCfucV5HKcOEmg&usqp=CAU"
                 alt=""/>
            <div>
                <img alt={'profile_large_photo'} src={props.profile.photos.large}/>
                <div>About me :{props.profile.aboutMe}</div>
                <div>fullName : {props.profile.fullName}</div>
            </div>
        </div>
    )
}
