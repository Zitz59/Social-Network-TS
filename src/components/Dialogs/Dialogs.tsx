import React, {ChangeEvent} from 'react';
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsType, MessageType} from '../../redux/store';


type DialogsPropsType = {
    addMessage: (newMessageText: string) => void
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    onMessageChange: (newMessage: string) => void
    newMessageText: string
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}
                                                                    key={dialog.id}/>);
    let messagesElements = props.messages.map((message) => <Message message={message.message} key={message.id}/>)

    let newMessageElement: React.RefObject<HTMLTextAreaElement> = React.createRef()

    let addMessage = () => {
        props.addMessage(props.newMessageText)
    }

    let onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let changedMessage = e.currentTarget.value
        props.onMessageChange(changedMessage)
    }


    let newMessage = props.newMessageText

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
                <textarea onChange={onMessageChange}
                          value={newMessage}
                          ref={newMessageElement}
                          className={styles.addMessageArea}
                          name="newMessage" id="#"
                          placeholder={'Enter your message'}/>
            </div>
            <div>
                <button onClick={addMessage} className={styles.addMessageBtn}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;