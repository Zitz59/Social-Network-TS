import React from 'react';
import MyPosts from '../MyPosts/MyPosts';
import {ActionTypes, PostsType} from '../../redux/state';


type ProfilePropsType = {
    posts: Array<PostsType>
    // addPost: (PostMessage: string) => void
    newPostText: string
    // changeNewPostText: (newText: string) => void
    dispatch:(action:ActionTypes)=>void

}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <div>
                <img
                    src="https://images.unsplash.com/photo-1615678815958-5910c6811c25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt=""/>
            </div>
            <div>
                <MyPosts posts={props.posts}
                         // addPost={props.addPost}
                         newPostText={props.newPostText}
                         //changeNewPostText={props.changeNewPostText}
                         dispatch={props.dispatch}/>
            </div>
        </div>
    )
}

export default Profile;