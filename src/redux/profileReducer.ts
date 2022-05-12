import {ActionTypes, PostsType, ProfilePageType} from './state';


export type ProfileReducerType = AddPostACType | UpdateNewPostACType

type AddPostACType = ActionTypes
type UpdateNewPostACType = ActionTypes


const profileReducer = (state: ProfilePageType, action: ProfileReducerType) => {
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