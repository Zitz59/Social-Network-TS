import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                <div className={styles.dialog}>
                    <DialogItem name="Alexey" id="1"/>
                    <DialogItem name="Anton" id="2"/>
                    <DialogItem name="Ann" id="3"/>
                    <DialogItem name="Ksu" id="4"/>
                    <DialogItem name="Max" id="5"/>
                    <DialogItem name="Stanz Wizard" id="6"/>
                    <DialogItem name="Dima" id="7"/>
                </div>
                <div className={styles.messages}>
                    <Message message="Hi"/>
                    <Message message="Where is my money?"/>
                    <Message message="Miss You"/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;