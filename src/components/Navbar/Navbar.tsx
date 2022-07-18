import React from 'react';
import styles from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import {SidebarType} from '../../redux/sidebarReducer';

type NavbarType = {
    sideBar: Array<SidebarType>
}

const Navbar = (props: NavbarType) => {
    return (
        <div className={styles.nav}>
            <div className={styles.navItem}>
                <NavLink to={'/profile'} activeClassName={styles.active} className={styles.nav}>
                    Profile
                </NavLink>
            </div>
            <div className={styles.navItem}>
                <NavLink to={'/dialogs/'} /*style={(params)=>{return{color: params.isActive ?'#99D3FF': 'white'}}}*/
                         activeClassName={styles.active} className={styles.nav}>
                  Messages
                </NavLink>
            </div>
            <div className={styles.navItem}>
                <NavLink to={'/news'} activeClassName={styles.active} className={styles.nav}>
                    News
                </NavLink>
            </div>
            <div className={styles.navItem}>
                <NavLink to="/music" activeClassName={styles.active} className={styles.nav}>
                    Music
                </NavLink>
            </div>
            <div className={styles.navItem}>
                <NavLink to="/settings" activeClassName={styles.active} className={styles.nav}>
                    Settings
                </NavLink>
            </div>
            <div className={styles.navItem}>
                <NavLink to="/users" activeClassName={styles.active} className={styles.nav}>
                    Users
                </NavLink>
            </div>
            <div className={styles.navItem}>
                <NavLink to="/friends" activeClassName={styles.active} className={styles.sidebar_block}>
                    Friends
                </NavLink>
                <Sidebar sidebar={props.sideBar}/>
            </div>
        </div>
    )
}

export default Navbar;