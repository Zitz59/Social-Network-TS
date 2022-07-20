import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import {UsersInitialStateType} from '../../redux/users-reducer';
import {NavLink} from 'react-router-dom';
import {usersAPI} from '../../api/api';

type UserPropsType = {

    usersPage: UsersInitialStateType,
    onPageChanged: (pageNumber: number) => void,
    totalUsersCount: number,
    currentPage: number,
    pageSize: number,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    followingInProgress: Array<number>,
    toggleInFollowingProgress: (isFetching: boolean, userId: number) => void
}

const Users: React.FC<UserPropsType> = (props) => {
    console.log(props)
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages: Array<number> = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div className={styles.userBlock}>
        <div className={styles.pageNumberSpan}>
            {pages.map(p => {
                return <span className={props.currentPage === p ? styles.selectedPage : ' '}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        <div className={styles.usersContainer}>{
            props.usersPage.users.map(u => <div key={u.id} className={styles.userContainer}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                 className={styles.userAvatar}
                                 alt=""/>
                        </NavLink>
                    </div>
                    <div>{u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.toggleInFollowingProgress(true, u.id)
                            usersAPI.unFollowUser(u.id)
                                .then(data => {
                                    if (data.resultCode === 0) {
                                        props.follow(u.id);
                                    }
                                    props.toggleInFollowingProgress(false, u.id)
                                })
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.toggleInFollowingProgress(true, u.id)
                            usersAPI.followUser(u.id)
                                .then(data => {
                                    if (data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                    props.toggleInFollowingProgress(false, u.id)
                                })
                            props.follow(u.id)
                        }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span><div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span><div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div></span>
                </span>
            </div>)
        }</div>
    </div>
}

export default Users