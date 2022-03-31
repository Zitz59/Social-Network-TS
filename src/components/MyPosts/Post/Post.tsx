import React from "react";
import styles from "./Post.module.css";

const Post = () => {
    return (
        <div className={styles.item}>
            <img
                src="https://lastfm.freetls.fastly.net/i/u/770x0/66541e10affb467cc6579def30939db7.jpg#66541e10affb467cc6579def30939db7"
                alt=""/>

            <div>
                <span>post1</span>
                <span>like</span>
            </div>




        </div>
    )
}

export default Post;