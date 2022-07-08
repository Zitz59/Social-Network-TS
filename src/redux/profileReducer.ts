export type AddPostACType = ReturnType<typeof addPost>
export type UpdateNewPostACType = ReturnType<typeof updatePost>
export type SetUserProfileACType = ReturnType<typeof setUserProfile>

type ProfileReducerType = AddPostACType | UpdateNewPostACType | SetUserProfileACType

export type ProfileInitialStateType = {
    posts: Array<PostsType>,
    newPostText: string,
    profile: ProfileType,
}


export type ProfileType = {
    id: number,
    fullName: string,
    photos: { large: string },
    aboutMe: string
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

let initialState: ProfileInitialStateType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first post', likesCount: 20},
    ],
    newPostText: '',
    profile: {
        id: 1,
        fullName: 'Joker',
        photos: {large: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dark-knight-joker-1597655811.png?crop=0.495xw:1.00xh;0.417xw,0&resize=640:*'},
        aboutMe: 'Do I Look Like a Guy with a Plan?'
    }
}

const profileReducer = (state = initialState, action: ProfileReducerType): ProfileInitialStateType => {

    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostsType = {
                id: 5,
                message: action.postMessage,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost], newPostText: ''
            };

        case 'UPDATE-NEW-POST-TEXT': {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case 'SET-USER-PROFILE': {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export const addPost = (newPostText: string) => ({type: 'ADD-POST', postMessage: newPostText}) as const

export const updatePost = (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText}) as const

export const setUserProfile = (profile: ProfileType) => ({type: 'SET-USER-PROFILE', profile}) as const

export default profileReducer;