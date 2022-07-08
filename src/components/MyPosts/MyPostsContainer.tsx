import React from 'react';
import {addPost, updatePost, PostsType} from '../../redux/profileReducer';
import MyPosts from './MyPosts';
import {AppStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

export type MapStateToPropsType = {
    posts: Array<PostsType>
    newPostText: string
}

export type mapDispatchToPropsType = {
    addPost: (newPostText: string) => void
    changeNewPostText: (newText: string) => void
}

export type MyPostsPropsType = MapStateToPropsType & mapDispatchToPropsType


let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}


let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPost(newPostText))
        },
        changeNewPostText: (newText: string) => {
            dispatch(updatePost(newText))
        }
    }

}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;