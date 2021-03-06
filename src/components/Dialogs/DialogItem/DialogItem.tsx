import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from '../Dialogs.module.css';


type DialogItemPropsType = {
    id:number
    name:string
}

const DialogItem = (props: DialogItemPropsType) => {
    let path = '/dialogs/' + props.id

    return (
        <div className={styles.dialogItem}>
            <div className={styles.dialog + ' ' + styles.active}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default DialogItem;