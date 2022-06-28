import React from 'react';
import {UsersPropsType} from './UsersContainer';
import styles from './Users.module.css'


function Users(props: UsersPropsType) {
    if (props.usersPage.users.length === 0) {
        props.setUsers([{
                id: 1,
                avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf-PMRzWvRVGLKcnx-a_xVWCfSH3p0TlzYkQ&usqp=CAU',
                followed: true,
                fullName: 'Zohan',
                status: 'Learn react !!!',
                location: {city: 'Tel-a-Viv', country: 'Israel'}
            },
                {
                    id: 2,
                    avatarUrl: 'https://www.meme-arsenal.com/memes/3a8f7ff2e129a15f05bf74dbd78901c0.jpg',
                    followed: false,
                    fullName: 'Ivan',
                    status: 'Drinking vodka and fuck with geese',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    followed: true,
                    fullName: 'Kunigunda',
                    status: 'I am very busy',
                    location: {city: 'Denmark', country: 'København'}
                },
                {
                    id: 4,
                    followed: false,
                    fullName: 'John',
                    status: 'Do it yourself',
                    location: {city: 'Texas', country: 'USA'}
                },
                {
                    id: 5,
                    followed: true,
                    fullName: 'Elena',
                    status: 'Chill',
                    location: {city: 'Male', country: 'Maldives'}
                }
            ]
        )
    }


    return <div>
        {
            props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.avatarUrl} className={styles.userAvatar} alt=""/>
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
                    <span><div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span><div>{u.location.country}</div>
                        <div>{u.location.city}</div></span>
                </span>
            </div>)
        }

    </div>

}

export default Users;