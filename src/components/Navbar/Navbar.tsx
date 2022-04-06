import React from "react";
import styles from './Navbar.module.css';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.navItem}>
                <Link to="/profile">Profile</Link>
            </div>
            <div className={styles.navItem}>
                <Link to="/dialogs">Messages</Link>
            </div>
            <div className={styles.navItem}>
                <Link to="/news">News</Link>
            </div>
            <div className={styles.navItem}>
                <Link to="/music">Music</Link>
            </div>
            <div className={styles.navItem}>
                <Link to="/settings">Settings</Link>
            </div>
        </nav>
    )
}

export default Navbar;