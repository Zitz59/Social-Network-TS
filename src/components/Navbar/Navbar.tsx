import React from "react";
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.navItem}>
                <a>Profile</a>
            </div>
            <div className={styles.navItem}>
                <a>Messages</a>
            </div>
            <div className={styles.navItem}>
                <a>News</a>
            </div>
            <div className={styles.navItem}>
                <a>Music</a>
            </div>
            <div className={styles.navItem}>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;