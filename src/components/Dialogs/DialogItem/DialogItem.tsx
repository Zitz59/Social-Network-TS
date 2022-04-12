import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from '../Dialogs.module.css';
import {DialogItemType} from '../Dialogs';


const DialogItem = (props: DialogItemType) => {
    let path = '/dialogs/' + props.id

    return (
        <div className={styles.dialog + ' ' + styles.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;