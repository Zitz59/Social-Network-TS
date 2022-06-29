import React from 'react';
import {UsersPropsType} from './UsersContainer';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/user.png'
import axios from 'axios';


function Users(props: UsersPropsType) {
    let getUsers = () => {
        if (props.usersPage.users.length === 0) {
            debugger
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            })
        }
    }


    return <div className={styles.userBlock}>
        <button className={styles.getUserButton} onClick={getUsers}>Get users</button>
        {
            props.usersPage.users.map(u => <div key={u.id} className={styles.userContainer}>
                <span>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userAvatar}
                             alt=""/>
                    </div>
                    <div>{u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
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
        }

    </div>

}

export default Users;