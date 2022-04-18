import React from 'react';
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsType, MessageType} from '../../redux/state';


type DialogsPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}

const Dialogs = (props: DialogsPropsType) => {
    let dialogsElements = props.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.messages.map((message) => <Message message={message.message}/>)

    let newMessageElement: React.RefObject<HTMLTextAreaElement> = React.createRef()

    let addMessage = () => {
        let text = newMessageElement.current?.value
        alert(text)
    }

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
            <div>
                <textarea ref={newMessageElement} className={styles.addMessageArea} name="newMessage" id="#"
                          placeholder={'write to somebody'}>

                </textarea>
            </div>
            <div>
                <button onClick={() => addMessage()} className={styles.addMessageBtn}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;