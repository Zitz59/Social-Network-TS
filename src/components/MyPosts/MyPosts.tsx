import React, {ChangeEvent} from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import {ActionTypes, addPostAC, onPostChangeAC, PostsType} from '../../redux/state';


type MyPostsPropsType = {
    posts: Array<PostsType>
    // addPost: (PostMessage: string) => void
    newPostText: string
    // changeNewPostText: (newText: string) => void
    dispatch:(action:ActionTypes)=>void
}

const MyPosts = (props: MyPostsPropsType) => {
    let postElements = props.posts.map((post) =>
        <Post message={post.message} likesCount={post.likesCount} id={post.id} key={post.id}/>)

    let newPostElement: React.RefObject<HTMLTextAreaElement> = React.createRef();
    //let newPostElement = React.createRef<HTMLTextAreaElement>(); - 2й вариант

    let addPost = () => {
        // props.addPost(props.newPostText);
        props.dispatch(addPostAC(props.newPostText))

    }
    let onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        // let text = newPostElement.current ? newPostElement.current.value : ' ';
        // props.changeNewPostText(e.currentTarget.value)
        // props.changeNewPostText(text);
        props.dispatch(onPostChangeAC(e.currentTarget.value))}




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
                        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}
                                  className={styles.addPostArea} name="newPost" id="#"
                                  placeholder={'write something'}/>
                    </div>
                    <button onClick={() => addPost()} className={styles.addPostBtn}>Add post</button>
                </div>
            </div>
            {postElements}
        </div>
    )
}

export default MyPosts;