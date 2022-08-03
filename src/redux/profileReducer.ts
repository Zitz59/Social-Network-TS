import {Dispatch} from 'redux';
import {AppStateType} from './redux-store';
import {profileAPI, usersAPI} from '../api/api';

export type AddPostACType = ReturnType<typeof addPost>
export type UpdateNewPostACType = ReturnType<typeof updatePost>
export type SetUserProfileACType = ReturnType<typeof setUserProfile>
export type SetStatusType = ReturnType<typeof setStatus>

type ProfileReducerType = AddPostACType | UpdateNewPostACType | SetUserProfileACType | SetStatusType

export type ProfileInitialStateType = {
    posts: Array<PostsType>,
    newPostText: string,
    profile: ProfileType,
    status:string
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type ProfileType = {
    photos: { large: string,  },
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
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
        userId: 24466,//25030
        lookingForAJob:true,
        lookingForAJobDescription: 'ahhahahahaa',
        fullName: 'Joker',
        photos: {large: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dark-knight-joker-1597655811.png?crop=0.495xw:1.00xh;0.417xw,0&resize=640:*'},
        aboutMe: 'Do I Look Like a Guy with a Plan?',
        contacts:{github:'joker31',facebook:'Joker31',instagram:'Joker31',
            mainLink:'Joker31',twitter:'Joker31',vk:'Joker31',website:'www.Joker31.com',youtube:'Joker31'}
    },
    status:""
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
        case 'SET-STATUS':{
            return {...state,status:action.status}
        }
        default:
            return state;
    }
}
// actions
export const addPost = (newPostText: string) => ({type: 'ADD-POST', postMessage: newPostText}) as const
export const updatePost = (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText}) as const
export const setUserProfile = (profile: ProfileType) => ({type: 'SET-USER-PROFILE', profile}) as const
export const setStatus = (status:string) => ({type:'SET-STATUS',status}) as const

//thunk
export const getUserProfile = (userId: number) => {
    return (dispatch: Dispatch<ProfileReducerType>, getState: () => AppStateType) => {
        usersAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            })
    }
}
export const getUserStatus = (userId:number) => {
    return (dispatch: Dispatch<ProfileReducerType>, getState: () => AppStateType) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response))
            })
    }
}
export const updateStatus = (status:string) => {
    return (dispatch: Dispatch<ProfileReducerType>, getState: () => AppStateType) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if(response.data.resultCode === 0)
                dispatch(setStatus(status))
            })
    }
}

export default profileReducer;