import React, {ChangeEvent} from 'react';
import {ActionTypes, PostsType, StoreType} from '../../redux/store';
import {addPostAC, onPostChangeAC} from '../../redux/profileReducer';
import MyPosts from './MyPosts';
import {ReduxStoreType} from '../../redux/redux-store';


type MyPostsContainerPropsType = {
    // posts: Array<PostsType>
    // newPostText: string
    // dispatch: (action: ActionTypes) => void
    // changeNewPostText: (newText:string) => void
    // addPost: (newPostText: string) => void
    store: ReduxStoreType
}

const MyPostsContainer = (props: MyPostsContainerPropsType) => {
    let state = props.store.getState();


    let addPost = () => {
        props.store.dispatch(addPostAC(state.profilePage.newPostText))

    }
    let onPostChange = (text:string) => {
        props.store.dispatch(onPostChangeAC(text))
    }


    return (<MyPosts addPost={addPost}
                     changeNewPostText={onPostChange}
                     posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}/>)
}

export default MyPostsContainer;