export type FollowACType = ReturnType<typeof follow>
export type UnFollowACType = ReturnType<typeof unFollow>
export type SetUsersACType = ReturnType<any>
export type setCurrentPageACType = ReturnType<typeof setCurrentPage>
export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
export type toggleInFollowingProgressACType = ReturnType<typeof toggleInFollowingProgress>

type userReducerType =
    FollowACType
    | UnFollowACType
    | SetUsersACType
    | setCurrentPageACType
    | setTotalUsersCountACType
    | toggleIsFetchingACType
    | toggleInFollowingProgressACType

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
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>
}

let initialState: UsersInitialStateType = {
    users: [],
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
            return {...state, currentPage: action.currentPage}
        case 'SET-TOTAL-USERS-COUNT':
            return {...state, totalUsersCount: action.totalUsersCount}
        case 'TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'TOGGLE-IN-FOLLOWING-PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state;
    }
}

export const follow = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unFollow = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsers = (users: Array<UserType>) => ({type: 'SET-USERS', users} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage}) as const
export const setTotalUsersCount = (totalUsersCount: number) =>
    ({type: 'SET-TOTAL-USERS-COUNT', totalUsersCount}) as const
export const toggleIsFetching = (isFetching: boolean) =>
    ({type: 'TOGGLE-IS-FETCHING', isFetching}) as const
export const toggleInFollowingProgress = (isFetching: boolean,userId:number) =>
    ({type: 'TOGGLE-IN-FOLLOWING-PROGRESS', isFetching, userId}) as const