import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {followAC, setUsersAC, unFollowAC, UsersInitialStateType, UserType} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';

export type MapStateToPropsType = {
    usersPage: UsersInitialStateType
}

export type MapDispatchToPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers:(users:Array<UserType>)=>void

}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.users
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
        setUsers: (users:Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

const  UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default  UserContainer
