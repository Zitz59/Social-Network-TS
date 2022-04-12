import React from 'react';
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


export type DialogItemType = {
    id: number,
    name: string
}

export type MessageType = {
    message: string
}

let dialogs = [
    {id: 1, name: 'Alexey'},
    {id: 2, name: 'Anton'},
    {id: 3, name: 'Ann'},
    {id: 4, name: 'Ksu'},
    {id: 5, name: 'Max'},
    {id: 6, name: 'Stanz Wizard'},
    {id: 7, name: 'Dima'}
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Where is my money?'},
    {id: 3, message: 'Miss You'},
    {id: 4, message: 'Yo Yo'},
    {id: 5, message: 'Learn React!'},
    {id: 6, message: 'How are you?'},
    {id: 7, message: 'Miss You'},
]

let dialogsElements = dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>);


let messagesElements = messages.map((message) => <Message message={message.message}/>)

const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                <div className={styles.dialog}>
                    {dialogsElements}
                </div>
                <div className={styles.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;