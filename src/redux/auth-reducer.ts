import {Dispatch} from 'redux';
import {AppStateType} from './redux-store';
import {authAPI} from '../api/api';

export type AuthReducerACType = ReturnType<typeof setAuthUserData>

type authReducerType =
    AuthReducerACType


export type AuthInitialStateType = {
    userId: number,
    email: string,
    login: string,
    isAuth:boolean
}

let initialState: AuthInitialStateType = {
    userId: 24466,
    email: 'null',
    login:'null',
    isAuth:false
}

export const authReducer = (state: AuthInitialStateType = initialState, action: authReducerType): AuthInitialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {...state,...action.data,isAuth:true}
        default:
            return state;
    }
}

export const setAuthUserData = (userId:number,email:string,login:string,isAuth:boolean) => ({type: 'SET-USER-DATA', data:{userId,email,login,isAuth}as const})

export const getAuthUserData = () => {
    return (dispatch: Dispatch<authReducerType>,getState:()=>AppStateType) => {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login, isAuth} = response.data.data
                    dispatch(setAuthUserData(id, email, login, isAuth))
                }
            });
    }
}