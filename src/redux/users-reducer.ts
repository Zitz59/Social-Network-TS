export type FollowACType = ReturnType<typeof followAC>
export type UnFollowACType = ReturnType<typeof unFollowAC>
export type SetUsersACType = ReturnType<any>
export type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export type setTotalUsersCountAC =ReturnType<typeof setTotalUsersCountAC>

type userReducerType = FollowACType | UnFollowACType | SetUsersACType | setCurrentPageACType | setTotalUsersCountAC

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
    users: Array<UserType>,
    pageSize:number,
    totalUsersCount:number,
    currentPage:number

}

let initialState: UsersInitialStateType = {
    users: [],
    pageSize: 6,
    totalUsersCount:0,
    currentPage:1
}

export const usersReducer = (state: UsersInitialStateType = initialState, action: userReducerType): UsersInitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}

        case 'UNFOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}

        case 'SET-USERS':
            return {...state, users: action.users}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage:action.currentPage}
        case 'SET-TOTAL-USERS-COUNT':
            return {...state, totalUsersCount:action.totalUsersCount}
        default:
            return state;
    }
}

export const followAC = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unFollowAC = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: 'SET-USERS', users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type:'SET-CURRENT-PAGE',currentPage}) as const
export const setTotalUsersCountAC = (totalUsersCount:number) => ({type:'SET-TOTAL-USERS-COUNT',totalUsersCount}) as const









