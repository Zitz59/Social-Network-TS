import {Dispatch} from 'redux';
import {authAPI} from '../api/api';
import {AppThunk} from './redux-store';

export type AuthReducerACType = ReturnType<typeof setAuthUserData> | ReturnType<typeof stopSubmit>

export type AuthInitialStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    isStopSubmit: boolean,
    stopSubmitMessage: string
}

let initialState: AuthInitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isStopSubmit: false,
    stopSubmitMessage: ''
}

export const authReducer = (state = initialState,
                            action: AuthReducerACType): AuthInitialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.payload
            }
        case 'STOP-SUBMIT': {
            return {
                ...state,
                isStopSubmit: action.payload.isStopSubmit,
                stopSubmitMessage: action.payload.stopSubmitMessage
            }
        }
        default:
            return state;
    }
}

export const setAuthUserData = (userId: number | null, email: string | null,
                                login: string | null, isAuth: boolean) => ({
    type: 'SET-USER-DATA',
    payload: {userId, email, login, isAuth}} as const)

export const stopSubmit = (isStopSubmit: boolean, stopSubmitMessage: string) => ({
    type: 'STOP-SUBMIT',
    payload: {isStopSubmit, stopSubmitMessage},
} as const)

export const getAuthUserData = () => {
    return (dispatch: Dispatch<AuthReducerACType>) => {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login,} = response.data.data
                    dispatch(setAuthUserData(id, email, login, true))
                }
            });
    }
}
export const login = (email: string, password: string, rememberMe?: boolean,
                      captcha?: boolean): AppThunk => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe, captcha)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                    dispatch(stopSubmit(false, ''))
                } else {
                    dispatch(stopSubmit(true, response.data.messages[0]))
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export const logout = (): AppThunk => {
    return (dispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            })
            .catch(error =>
                console.log(error))
    }
}