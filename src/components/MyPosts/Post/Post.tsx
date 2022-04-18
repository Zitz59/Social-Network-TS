import React from 'react';
import styles from './Post.module.css';


type PostPropsType = {
    message: string
    likesCount: number
    id: number
}

const Post = (props: PostPropsType) => {
    return (
        <div className={styles.item}>
            <img
                src="https://lastfm.freetls.fastly.net/i/u/770x0/66541e10affb467cc6579def30939db7.jpg#66541e10affb467cc6579def30939db7"
                alt=""/>
            {props.message}
            <div>
                <span> </span>
                <span>
                    likes {props.likesCount}
                </span>
            </div>


        </div>
    )
}

export default Post;