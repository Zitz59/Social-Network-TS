import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {MessageType} from './Message/Message';
import {DialogItemType} from './DialogItem/DialogItem';

type dialogsDataPropsType={
    dialogsData:Array<DialogItemType>
    messageData:Array<messageDataType>
}




type messageDataType={
    id:number
    message:MessageType
}


let dialogsData = [
    {id:1, name:'Alexey'},
    {id:2, name:'Anton'},
    {id:3, name:'Ann'},
    {id:4, name:'Ksu'},
    {id:5, name:'Max'},
    {id:6, name:'Stanz Wizard'},
    {id:7, name:'Dima'}
]


let messageData = [
    {id:1, message:"Hi"},
    {id:2, message:"Where is my money?"},
    {id:3, message:"Miss You"},
    {id:4, message:"Yo Yo"},
    {id:5, message:"Learn React!"},
    {id:6, message:"How are you?"},
    {id:7, message:"Miss You"},
]

const Dialogs = (props:dialogsDataPropsType) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                <div className={styles.dialog}>
                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                    <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                    <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                    <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                    <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
                    <DialogItem name={dialogsData[6].name} id={dialogsData[6].id}/>
                    <DialogItem name={dialogsData[7].name} id={dialogsData[7].id}/>

                </div>
                <div className={styles.messages}>
                    <Message message={messageData[0].message}/>
                    <Message message={messageData[1].message}/>
                    <Message message={messageData[2].message}/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;