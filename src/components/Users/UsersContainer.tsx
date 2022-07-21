import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    followSuccess, getUsers,
    setCurrentPage, setTotalUsersCount,
    setUsers, toggleInFollowingProgress, toggleIsFetching, unfollow,
    unFollowSuccess,
    UsersInitialStateType,
    UserType
} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import Users from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {compose} from 'redux';


export type MapStateToPropsType = {
    usersPage: UsersInitialStateType,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>
}

export type MapDispatchToPropsType = {
    followSuccess: (userId: number) => void,
    unFollowSuccess: (userId: number) => void,
    setUsers: (users: Array<UserType>) => void,
    setCurrentPage: (currentPage: number) => void,
    setTotalUsersCount: (totalCount: number) => void,
    toggleIsFetching: (isFetching: boolean) => void,
    toggleInFollowingProgress: (isFetching: boolean, userId: number) => void,
    getUsers: (currentPage: number, pageSize: number) => void,
    unfollow: (userID: number) => void,
    follow: (userID: number) => void

}

export type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<UsersContainerPropsType, UsersContainer> {

    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize);

    }

    onPageChanged = (pageNumber: number) => {

        this.props.getUsers(pageNumber, this.props.pageSize)

    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   usersPage={this.props.usersPage}
                   follow={this.props.followSuccess}
                   unfollow={this.props.unFollowSuccess}
                   toggleInFollowingProgress={this.props.toggleInFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress
    }
}

export default compose<() => JSX.Element>(
    connect(mapStateToProps, {
        followSuccess,
        unFollowSuccess,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching,
        toggleInFollowingProgress,
        getUsers, follow, unfollow
    })
)(UsersContainer)
