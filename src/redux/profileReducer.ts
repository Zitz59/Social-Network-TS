import {ActionTypes, PostsType, ProfilePageType} from './store';


export type ProfileReducerType = AddPostACType | UpdateNewPostACType

type AddPostACType = ActionTypes
type UpdateNewPostACType = ActionTypes
type InitialStateType = ProfilePageType

let initialState:InitialStateType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first post', likesCount: 20},
    ],
    newPostText: ''
}


const profileReducer = (state = initialState, action: ProfileReducerType) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostsType = {
                id: 5,
                message: action.postMessage,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = ''
            return state;

        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;
            return state;
        default:
            return state;

    }
}

export const addPostAC = (newPostText: string) => {
    return {
        type: 'ADD-POST', postMessage: newPostText
    } as const
}

export const onPostChangeAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT', newText: newText
    } as const
}


export default profileReducer;