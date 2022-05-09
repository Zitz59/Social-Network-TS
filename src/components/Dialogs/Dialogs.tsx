import React from 'react';
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {ActionTypes, DialogsType, MessageType} from '../../redux/state';


type DialogsPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageText: string
    // addMessage: (newMessage: string) => void
    // updateNewMessage: (newMessage: string) => void
    dispatch:(action:ActionTypes)=>void
}

const Dialogs = (props: DialogsPropsType) => {
    let dialogsElements = props.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>);
    let messagesElements = props.messages.map((message) => <Message message={message.message} key={message.id}/>)

    let newMessageElement: React.RefObject<HTMLTextAreaElement> = React.createRef()

    let addMessage = () => {
        let text = newMessageElement.current ? newMessageElement.current.value : ' '
        // props.addMessage(text)
        props.dispatch({type:'ADD-MESSAGE',dialogMessage:text})
    }

    let onMessageChange = () => {
        let text = newMessageElement.current ? newMessageElement.current.value : ' '
        // props.updateNewMessage(text)
        props.dispatch({type:'UPDATE-NEW-MESSAGE',newMessage:text})
    }

    //if(newMessageElement.current)
    // props.addPost{newMessage.current.value}

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
                          value={props.newMessageText}
                          ref={newMessageElement}
                          className={styles.addMessageArea}
                          name="newMessage" id="#"
                          placeholder={'write to somebody'}/>
            </div>
            <div>
                <button onClick={() => addMessage()} className={styles.addMessageBtn}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;