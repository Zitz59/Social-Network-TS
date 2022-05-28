import React from 'react';
import {addPostAC, InitialStateType, onPostChangeAC, PostsType} from '../../redux/profileReducer';
import MyPosts from './MyPosts';
import {AppStateType} from '../../redux/redux-store';
// import StoreContext from '../../StoreContext';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';


// type MyPostsContainerPropsType = {
//     // posts: Array<PostsType>
//     // newPostText: string
//     // dispatch: (action: ActionTypes) => void
//     // changeNewPostText: (newText:string) => void
//     // addPost: (newPostText: string) => void
//     // store: ReduxStoreType
// }

// const MyPostsContainer = (/*props: MyPostsContainerPropsType*/) => {
//
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState();
//
//                 let addPost = () => {
//                     store.dispatch(addPostAC(state.profilePage.newPostText))
//                 }
//
//                 let onPostChange = (text: string) => {
//                     store.dispatch(onPostChangeAC(text))
//                 }
//
//                 return <MyPosts addPost={addPost}
//                                 changeNewPostText={onPostChange}
//                                 posts={store.getState().profilePage.posts}
//                                 newPostText={store.getState().profilePage.newPostText}/>
//             }
//             }
//         </StoreContext.Consumer>
//     )
// }

export type MapStateToPropsType = {
    posts: Array<PostsType>
    newPostText: string
}

export type mapDispatchToPropsType = {
    addPost: (newPostText: string)=>void
    changeNewPostText:(newText: string)=>void
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
            dispatch(addPostAC(newPostText))
        },
        changeNewPostText: (newText: string) => {
            dispatch(onPostChangeAC(newText))
        }
    }

}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;