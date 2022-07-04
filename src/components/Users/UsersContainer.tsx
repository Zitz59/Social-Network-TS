import React from 'react';
import {connect} from 'react-redux';
import {
    followAC,
    setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UsersInitialStateType,
    UserType
} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import User from './Users';

export type MapStateToPropsType = {
    usersPage: UsersInitialStateType,
    pageSize:number,
    totalUsersCount:number,
    currentPage:number

}

export type MapDispatchToPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users: Array<UserType>) => void,
    setCurrentPage:(currentPage:number)=>void,
    setTotalUsersCount:(totalCount:number)=>void

}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.users,
        pageSize:state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage:state.users.currentPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage:(currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount:(totalCount) => {
            dispatch((setTotalUsersCountAC(totalCount)))
        }
    }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User);

export default UserContainer
