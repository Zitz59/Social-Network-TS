import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage, setTotalUsersCount,
    setUsers, toggleInFollowingProgress, toggleIsFetching,
    unFollow,
    UsersInitialStateType,
    UserType
} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import Users from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {compose} from 'redux';
import {usersAPI} from '../../api/api';

export type MapStateToPropsType = {
    usersPage: UsersInitialStateType,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>
}

export type MapDispatchToPropsType = {
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: Array<UserType>) => void,
    setCurrentPage: (currentPage: number) => void,
    setTotalUsersCount: (totalCount: number) => void,
    toggleIsFetching: (isFetching: boolean) => void,
    toggleInFollowingProgress: (isFetching: boolean, userId: number) => void,

}

export type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<UsersContainerPropsType, UsersContainer> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsersList(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber);

        usersAPI.getNextPageUsersList(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {


        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   usersPage={this.props.usersPage}
                   follow={this.props.follow}
                   unfollow={this.props.unFollow}
                   toggleInFollowingProgress={this.props.toggleInFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    debugger
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
        follow,
        unFollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching,
        toggleInFollowingProgress
    })
)(UsersContainer)
