import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={styles.content}>
            <div>
                <img
                    src="https://images.unsplash.com/photo-1633283917235-aecae1d65a44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt=""/>
            </div>
            <div>
                <img className={styles.avatar}
                     src="https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                     alt=""/>
                avatar+description
            </div>
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
            <Post message="Hi , how are you?" likesCount={15}/>
            <Post message="It's my first post" likesCount={20}/>

        </div>
    )
}

export default MyPosts;