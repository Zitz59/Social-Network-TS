import React from 'react';
import {UsersPropsType} from './UsersContainer';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/user.png'
import axios from 'axios';

class User extends React.Component<UsersPropsType, User> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <div className={styles.userBlock}>
            {
                this.props.usersPage.users.map(u => <div key={u.id} className={styles.userContainer}>
                <span>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userAvatar}
                             alt=""/>
                    </div>
                    <div>{u.followed
                        ? <button onClick={() => {
                            this.props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            this.props.follow(u.id)
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
}

export default User;