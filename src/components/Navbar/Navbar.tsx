import React from "react";
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.navItem}>
                <NavLink to="/profile" className={navData => navData.isActive ? styles.active:styles.nav}>
                    <a >Profile</a>
                </NavLink>
            </div>
            <div className={styles.navItem}>
                <NavLink to="/dialogs" className={navData => navData.isActive ? styles.active:styles.nav}>
                    <a >Messages</a>
                </NavLink>
            </div>
            <div className={styles.navItem}>
                <NavLink to="/news" className={navData => navData.isActive ? styles.active:styles.nav}>
                    <a >News</a>
                </NavLink>
            </div>
            <div className={styles.navItem}>
                <NavLink to="/music" className={navData => navData.isActive ? styles.active:styles.nav}>
                    <a >Music</a>
                </NavLink>
            </div>
            <div className={styles.navItem}>
                <NavLink to="/settings" className={navData => navData.isActive ? styles.active:styles.nav}>
                    <a >Settings</a>
                </NavLink>
            </div>
            <div className={styles.navItem}>
                <NavLink to="/friends" className={navData => navData.isActive ? styles.active:styles.nav}>
                    <a>Friends</a>
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;