import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';


type PostDataType = {
    id: number
    message: string
    likesCount: number
}

let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 15},
    {id: 2, message: 'It\'s my first post', likesCount: 20},
]

let postElements = posts.map((post) => <Post message={post.message} likesCount={post.likesCount}/>)

const MyPosts = () => {
    return (
        <div className={styles.content}>
            <img className={styles.avatar}
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3IUfiPYzFAfU0OdNVBk3cNCfucV5HKcOEmg&usqp=CAU"
                 alt=""/>
            <div>avatar+description</div>
            <div className={styles.myPost}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea className={styles.addPostArea} name="newPost" id="#"
                                  placeholder={'write something'}></textarea>
                    </div>
                    <button className={styles.addPostBtn}>Add post</button>
                </div>
            </div>
            {postElements}
        </div>
    )
}

export default MyPosts;