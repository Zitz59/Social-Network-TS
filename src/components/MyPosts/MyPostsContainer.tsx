import React, {ChangeEvent} from 'react';
import {ActionTypes, PostsType, StoreType} from '../../redux/store';
import {addPostAC, onPostChangeAC} from '../../redux/profileReducer';
import MyPosts from './MyPosts';


type MyPostsContainerPropsType = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: ActionTypes) => void
    changeNewPostText: () => void
    addPost: (newPostText: string) => void
    store: StoreType
}

const MyPostsContainer = (props: MyPostsContainerPropsType) => {
    let state = props.store.getState();


    let addPost = () => {
        props.store.dispatch(addPostAC(props.newPostText))

    }
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch(onPostChangeAC(e.currentTarget.value))
    }


    return (<MyPosts addPost={addPost}
                     changeNewPostText={onPostChange}
                     posts={props.posts}
                     newPostText={state.profilePage.newPostText}/>)
}

export default MyPostsContainer;