import React from 'react';
import MyPosts from '../MyPosts/MyPosts';
import {PostsType} from '../../redux/state';
import {PropsType} from '../../App';

type ProfilePropsType = {
    posts:Array<PostsType>
}


const Profile = (props:ProfilePropsType) => {
    return (
        <div>
            <div>
                <img
                    src="https://images.unsplash.com/photo-1615678815958-5910c6811c25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt=""/>
            </div>
            <div>
                <MyPosts posts={props.posts}/>
            </div>
        </div>
    )
}

export default Profile;