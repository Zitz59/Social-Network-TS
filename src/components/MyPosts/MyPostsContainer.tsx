import React from 'react';
import store, {ActionTypes, PostsType, StoreType} from '../../redux/store';
import {addPostAC, onPostChangeAC} from '../../redux/profileReducer';
import MyPosts from './MyPosts';
import {ReduxStoreType} from '../../redux/redux-store';
import StoreContext from '../../StoreContext';


// type MyPostsContainerPropsType = {
//     // posts: Array<PostsType>
//     // newPostText: string
//     // dispatch: (action: ActionTypes) => void
//     // changeNewPostText: (newText:string) => void
//     // addPost: (newPostText: string) => void
//     // store: ReduxStoreType
// }

const MyPostsContainer = (/*props: MyPostsContainerPropsType*/) => {




    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostAC(state.profilePage.newPostText))
                }

                let onPostChange = (text: string) => {
                    store.dispatch(onPostChangeAC(text))
                }

                return<MyPosts addPost={addPost}
                         changeNewPostText={onPostChange}
                         posts={store.getState().profilePage.posts}
                         newPostText={store.getState().profilePage.newPostText}/>
            }
        }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;