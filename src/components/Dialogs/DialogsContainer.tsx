import React, {ChangeEvent} from 'react';
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {ActionTypes, DialogsType, MessageType, StoreType} from '../../redux/store';
import {addMessageAC, onMessageChangeAC} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';


type DialogsContainerPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageText: string
    dispatch: (action: ActionTypes) => void
    store:StoreType
}

const DialogsContainer = (props: DialogsContainerPropsType) => {
    let dialogsElements = props.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}
                                                                    key={dialog.id}/>);
    let messagesElements = props.messages.map((message) => <Message message={message.message} key={message.id}/>)

    let newMessageElement: React.RefObject<HTMLTextAreaElement> = React.createRef()

    let addMessage = () => {
        debugger
        props.store.dispatch(addMessageAC(props.newMessageText))
    }

    let onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        debugger
        props.store.dispatch(onMessageChangeAC(e.currentTarget.value))
    }


    let newMessage = props.newMessageText

    return (<Dialogs addMessage = {addMessage} onMessageChange = {onMessageChange} dialogs={} messages={} newMessageText={} dispatch={})
}

export default DialogsContainer;