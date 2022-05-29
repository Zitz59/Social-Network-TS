import {ActionTypes} from './store';

export type ProfileReducerType = AddPostACType | UpdateNewPostACType
export type AddPostACType = ActionTypes
export type UpdateNewPostACType = ActionTypes
export type InitialStateType = typeof initialState

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first post', likesCount: 20},
    ] as Array<PostsType>,
    newPostText: ''
}

const profileReducer = (state = initialState, action: ProfileReducerType):InitialStateType => {

    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostsType = {
                id: 5,
                message: action.postMessage,
                likesCount: 0
            };
            return {...state,
                posts:[...state.posts,newPost],newPostText:''};

        case 'UPDATE-NEW-POST-TEXT': {
            return {...state,
            newPostText: action.newText}
        }
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