import React from "react";

const Profile = () => {
    return (
        <div className='content'>
            <div>
                <img
                    src="https://images.unsplash.com/photo-1633283917235-aecae1d65a44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt=""/>
            </div>
            <div>
                <img className='avatar'
                     src="https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                     alt=""/>
                avatar+description
            </div>
            <div>/*My posts*/
                <div>New post</div>
            </div>
            <div>
                post1
            </div>
            <div>
                post2
            </div>
        </div>
    )
}

export default Profile;