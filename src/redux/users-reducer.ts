import {usersAPI} from '../api/api';
import {Dispatch} from 'redux';
import {AppStateType} from './redux-store';

export type FollowACType = ReturnType<typeof followSuccess>
export type UnFollowACType = ReturnType<typeof unFollowSuccess>
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

export const followSuccess = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unFollowSuccess = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsers = (users: Array<UserType>) => ({type: 'SET-USERS', users} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage}) as const
export const setTotalUsersCount = (totalUsersCount: number) =>
    ({type: 'SET-TOTAL-USERS-COUNT', totalUsersCount}) as const
export const toggleIsFetching = (isFetching: boolean) =>
    ({type: 'TOGGLE-IS-FETCHING', isFetching}) as const
export const toggleInFollowingProgress = (isFetching: boolean, userId: number) =>
    ({type: 'TOGGLE-IN-FOLLOWING-PROGRESS', isFetching, userId}) as const

export const getUsers = (currentPage:number,pageSize:number) => {
    return (dispatch:Dispatch<userReducerType>,getState:()=>AppStateType) =>
    {

        dispatch(toggleIsFetching(true))

        usersAPI.getUsersList(currentPage,pageSize)
            .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }

}

export const follow = (userID:number) => {
  return (dispatch:Dispatch<userReducerType>,getState:()=>AppStateType)=>{
      dispatch(toggleInFollowingProgress(true,userID))
      usersAPI.followUser(userID)
          .then(data => {
              if (data.resultCode == 0) {
                  dispatch(follow(userID));
              }
              dispatch(toggleInFollowingProgress(false,userID))
          })
  }

}

export const unfollow = (userID:number) => {
    return (dispatch:Dispatch<userReducerType>,getState:()=>AppStateType)=>{
        dispatch(toggleInFollowingProgress(true,userID))
        usersAPI.unFollowUser(userID)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(unfollow(userID));
                }
                dispatch(toggleInFollowingProgress(false,userID))
            })
    }
}


