import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import {UsersInitialStateType} from '../../redux/users-reducer';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

type UserPropsType = {

    usersPage: UsersInitialStateType,
    onPageChanged: (pageNumber: number) => void,
    totalUsersCount: number,
    currentPage: number,
    pageSize: number,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
}

const Users: React.FC<UserPropsType> = (props) => {

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
                        ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                {
                                    withCredentials: true,
                                    headers: {'API-KEY': '6b74dff9-4a4a-410f-be7c-0e00f1a06ec7'}
                                })
                                .then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.follow(u.id)
                                    }
                                })

                            props.unfollow(u.id)

                        }}>Unfollow</button>
                        : <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                {
                                    withCredentials: true,
                                    headers: {'API-KEY': '6b74dff9-4a4a-410f-be7c-0e00f1a06ec7'}
                                })
                                .then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.follow(u.id)
                                    }
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