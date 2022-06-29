export type FollowACType = ReturnType<typeof followAC>
export type UnFollowACType = ReturnType<typeof unFollowAC>
export type SetUsersACType = ReturnType<any>
type userReducerType = FollowACType | UnFollowACType | SetUsersACType


export type UsersLocationType = {
    city: string
    country: string
}

export type UserType = {
    id: number,
    photos: { small: string },
    followed: boolean,
    name: string,
    status: string,
    location: UsersLocationType
}

export type UsersInitialStateType = {
    users: Array<UserType>
}


let initialState: UsersInitialStateType = {
    users: []
}


export const usersReducer = (state: UsersInitialStateType = initialState, action: userReducerType): UsersInitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}

        case 'UNFOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}

        case 'SET-USERS':
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}


export const followAC = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unFollowAC = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: 'SET-USERS', users} as const)









