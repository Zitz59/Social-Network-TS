import React from "react";
import styles from "./Header.module.css";
import {NavLink} from 'react-router-dom';
import {AppThunk} from "../../redux/redux-store";

type HeaderPropsType = {
    userId: number |null,
    email: string |null,
    login: string|null,
    isAuth: boolean
    logout: ()=>AppThunk
}


const Header = (props:HeaderPropsType) => {
    return (
        <header className={styles.header}>
            <img
                src="https://cdn-icons-png.flaticon.com/512/187/187902.png"
                alt=""/>

            <div className={styles.loginBlock}>
                {props.isAuth ?
                    <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;