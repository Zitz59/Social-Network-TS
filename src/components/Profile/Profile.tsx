import React from "react";
import styles from "./Profile.module.css";

const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src="https://images.unsplash.com/photo-1633283917235-aecae1d65a44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt=""/>
            </div>
            <div>
                <img className={styles.avatar}
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3IUfiPYzFAfU0OdNVBk3cNCfucV5HKcOEmg&usqp=CAU"
                     alt=""/>
                <div>avatar+description</div>
            </div>
        </div>
    )
}

export default Profile;