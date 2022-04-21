import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import {PostsType} from '../../redux/state';


type MyPostsPropsType = {
    posts: Array<PostsType>
    addPost:(PostMessage: string)=>void
    newPostText:string
}

const MyPosts = (props: MyPostsPropsType) => {
    let postElements = props.posts.map((post) =>
        <Post message={post.message} likesCount={post.likesCount} id={post.id}/>)

    let newPostElement: React.RefObject<HTMLTextAreaElement> = React.createRef();
    //let newPostElement = React.createRef<HTMLTextAreaElement>(); - 2й вариант

    const addPost = () => {
        debugger;
        let text = newPostElement.current? newPostElement.current.value : ' ';
        props.addPost(text);
    }
const onPostChange = () => {

}



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
                        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} className={styles.addPostArea} name="newPost" id="#"
                                  placeholder={'write something'}></textarea>
                    </div>
                    <button onClick={() => addPost()}  className={styles.addPostBtn}>Add post</button>
                </div>
            </div>
            {postElements}
        </div>
    )
}

export default MyPosts;