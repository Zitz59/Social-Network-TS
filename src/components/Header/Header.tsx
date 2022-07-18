import React from "react";
import styles from "./Header.module.css";
import {NavLink} from 'react-router-dom';

type HeaderPropsType = {
    userId: number,
    email: string,
    login: string|null,
    isAuth: boolean
}


const Header = (props:HeaderPropsType) => {
    return (
        <header className={styles.header}>
            <img
                src="https://cdn-icons-png.flaticon.com/512/187/187902.png"
                alt=""/>

            <div className={styles.loginBlock}>
                {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;