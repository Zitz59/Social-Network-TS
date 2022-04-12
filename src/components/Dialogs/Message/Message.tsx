import React from 'react';
import styles from '../Dialogs.module.css';
import {MessageType} from '../Dialogs';


const Message = (props: MessageType) => {
    return <div className={styles.message}>{props.message}</div>
}

export default Message;