import {Dispatch} from 'redux';
import {authAPI} from '../api/api';
import {AppThunk} from "./redux-store";

export type AuthReducerACType = ReturnType<typeof setAuthUserData>

type authReducerType =
    AuthReducerACType


export type AuthInitialStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
}

let initialState: AuthInitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: AuthInitialStateType = initialState, action: authReducerType): AuthInitialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {...state, ...action.payload}
        default:
            return state;
    }
}

export const setAuthUserData = (userId: number| null, email: string | null, login: string| null, isAuth: boolean) => ({
    type: 'SET-USER-DATA',
    payload: {userId, email, login, isAuth} as const
})
// export const setIsLoggedIn = (value: boolean) => ({
//     type: 'login/SET-IS-LOGGED-IN', value
// } as const)

export const getAuthUserData = () => {
    return (dispatch: Dispatch<authReducerType>) => {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login,} = response.data.data
                    dispatch(setAuthUserData(id, email, login, true))
                }
            });
    }
}

export const login = (email: string, password: string, rememberMe?: boolean,captcha?:boolean):AppThunk  => {
    return (dispatch) => {
        authAPI.login(email, password,rememberMe,captcha)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                }
            })
            .catch((error)=>{
                console.log(error)
            })
    }
}

export const logout = ():AppThunk => {
    return (dispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null,null,null,false))
                }
            })
            .catch(error=>
            console.log(error))
    }
}