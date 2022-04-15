import React from 'react';
import styles from '../../Navbar/Navbar.module.css'

type SidebarPropsType = {
    name:string
    avatar:string
}

const SideBarItem = (props: SidebarPropsType) => {
    return (
        <div className={styles.box}>
            <div className={styles.sidebar_item}>
                <img src={props.avatar} alt=""/>
                {props.name}
            </div>
        </div>
    );
};

export default SideBarItem;