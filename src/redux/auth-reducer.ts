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
            return {...state, ...action.data,isAuth:true}
        default:
            return state;
    }
}

export const setAuthUserData = (userId:number,email:string,login:string,isAuth:boolean) => ({type: 'SET-USER-DATA', data:{userId,email,login,isAuth}as const})